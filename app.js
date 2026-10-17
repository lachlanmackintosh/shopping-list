(function () {
  "use strict";

  var STORAGE_KEY = "lockie-shopping-v1";
  var SVG_NS = "http://www.w3.org/2000/svg";

  var EDITS_KEY = "lockie-shopping-edits-v1";
  var edits = loadEdits();
  var editing = false;
  var formCtx = null;
  var undoTimer = null;
  var state = loadState();
  var activeGroup = "food";
  var person = state.person === "margo" ? "margo" : "lockie";
  var openItemId = null;
  var justTickedId = null;
  var focusSection = null;

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return blankState();
      var data = JSON.parse(raw);
      if (!data || typeof data !== "object") return blankState();
      data.ticks = data.ticks && typeof data.ticks === "object" ? data.ticks : {};
      data.choices = data.choices && typeof data.choices === "object" ? data.choices : {};
      data.custom = data.custom && typeof data.custom === "object" ? data.custom : {};
      if (data.person !== "margo") data.person = "lockie";
      migrateChoices(data);
      return data;
    } catch (err) {
      return blankState();
    }
  }

  function loadEdits() {
    var e = { added: {}, hidden: {}, over: {}, rules: [] };
    try {
      var d = JSON.parse(localStorage.getItem(EDITS_KEY) || "null");
      if (d && typeof d === "object") {
        if (d.added && typeof d.added === "object") e.added = d.added;
        if (d.hidden && typeof d.hidden === "object") e.hidden = d.hidden;
        if (d.over && typeof d.over === "object") e.over = d.over;
        if (Array.isArray(d.rules)) e.rules = d.rules;
      }
    } catch (err) {}
    return e;
  }

  function arr(v) { return Array.isArray(v) ? v.filter(function (x) { return x && typeof x === "object" && x.id && x.name; }) : []; }

  function isHidden(id) { return edits.hidden[id] === true; }

  function saveEdits() {
    localStorage.setItem(EDITS_KEY, JSON.stringify(edits));
  }

  function uid() {
    return "c-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }

  function blankState() {
    return { ticks: {}, choices: {}, custom: {}, person: "lockie" };
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function optionsOf(item) {
    if (!item.options || !item.options.length) return [];
    return item.options.map(function (opt) {
      if (typeof opt === "string") return { name: opt, note: "", gold: false };
      return { name: opt.name, note: opt.note || "", gold: opt.gold === true };
    });
  }

  function choiceIndex(item) {
    var options = optionsOf(item);
    if (!options.length) return 0;
    var saved = state.choices[item.id];
    if (typeof saved !== "string") return 0;
    for (var i = 0; i < options.length; i++) {
      if (options[i].name === saved) return i;
    }
    return 0;
  }

  function migrateChoices(data) {
    var legacyMilk = [
      "Organic full-fat pasteurised",
      "A2 full-fat",
      "Kefir"
    ];
    var savedMilk = data.choices.milk;
    if (typeof savedMilk === "number") {
      var legacyName = legacyMilk[savedMilk];
      var milkNames = [];
      var milk = findCatalogItem("milk");
      if (milk) milkNames = optionsOf(milk).map(function (opt) { return opt.name; });
      if (legacyName && milkNames.indexOf(legacyName) !== -1) data.choices.milk = legacyName;
      else delete data.choices.milk;
    }

    SHOPPING.groups.forEach(function (group) {
      allSections(group).forEach(function (section) {
        section.items.forEach(function (item) {
          var saved = data.choices[item.id];
          var options = optionsOf(item);
          if (typeof saved === "number") {
            if (options[saved]) data.choices[item.id] = options[saved].name;
            else delete data.choices[item.id];
          } else if (typeof saved === "string") {
            var stillThere = options.some(function (opt) { return opt.name === saved; });
            if (!stillThere) delete data.choices[item.id];
          }
        });
      });
    });
  }

  function allSections(group) {
    if (group.people) return group.people.lockie.concat(group.people.margo);
    return group.sections || [];
  }

  function visibleSections(group) {
    if (group.people) return group.people[person] || [];
    return group.sections || [];
  }

  function customItems(section) {
    var legacy = arr(state.custom[section.id]).map(function (item) {
      return { id: item.id, name: item.name, qty: item.note || "", custom: true, sectionId: section.id };
    });
    var added = arr(edits.added[section.id]).map(function (item) {
      return { id: item.id, name: item.name, qty: item.note || "", custom: true, sectionId: section.id };
    });
    return legacy.concat(added).filter(function (item) {
      return !isHidden(item.id);
    }).map(function (item) {
      var o = edits.over[item.id];
      if (o) { item.name = o.title; item.qty = o.note || ""; }
      return item;
    });
  }

  function sectionEntries(section) {
    var builtin = section.items.filter(function (item) {
      return !isHidden(item.id);
    });
    return builtin.concat(customItems(section));
  }

  function groupById(id) {
    for (var i = 0; i < SHOPPING.groups.length; i++) {
      if (SHOPPING.groups[i].id === id) return SHOPPING.groups[i];
    }
    return SHOPPING.groups[0];
  }

  function findCatalogItem(id) {
    for (var i = 0; i < SHOPPING.groups.length; i++) {
      var sections = allSections(SHOPPING.groups[i]);
      for (var j = 0; j < sections.length; j++) {
        var items = sections[j].items;
        for (var k = 0; k < items.length; k++) {
          if (items[k].id === id) return items[k];
        }
      }
    }
    return null;
  }

  function tally(items) {
    var done = 0;
    for (var i = 0; i < items.length; i++) {
      if (state.ticks[items[i].id]) done++;
    }
    return { done: done, total: items.length };
  }

  function groupItems(group) {
    var all = [];
    visibleSections(group).forEach(function (section) {
      all = all.concat(sectionEntries(section));
    });
    return all;
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function checkboxSvg() {
    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 32 32");
    svg.setAttribute("aria-hidden", "true");
    var ring = document.createElementNS(SVG_NS, "path");
    ring.setAttribute("class", "ring");
    ring.setAttribute("d", "M16.4 4.7c6.2-.7 11.2 3.6 11.6 9.4.5 6.2-4.2 11.6-10.4 12.2-6.4.6-11.8-4-12.3-10.1C4.8 9.8 9.6 5.5 16.4 4.7z");
    var mark = document.createElementNS(SVG_NS, "path");
    mark.setAttribute("class", "mark");
    mark.setAttribute("d", "M10.2 16.7l4.1 4.3 8-9.2");
    svg.appendChild(ring);
    svg.appendChild(mark);
    return svg;
  }

  function noteLine(opt) {
    if (!opt.note) return null;
    return el("span", "choice-meta", opt.note);
  }

  function renderItem(item, section) {
    var row = el("div", "item" + (item.custom ? " is-custom" : "") + (state.ticks[item.id] ? " is-ticked" : ""));
    if (item.id === justTickedId) row.classList.add("just-ticked");

    var button = el("button", "tick-row");
    button.type = "button";
    button.setAttribute("data-tick", item.id);
    button.setAttribute("aria-pressed", state.ticks[item.id] ? "true" : "false");
    button.setAttribute("aria-label", (state.ticks[item.id] ? "Untick " : "Tick ") + item.name);

    var box = el("span", "box");
    box.appendChild(checkboxSvg());
    button.appendChild(box);

    var text = el("span", "text");
    var isClean = /^(cleaning|care)/.test(section.id) && !item.custom && optionsOf(item).length;
    var mainName = isClean ? optionsOf(item)[choiceIndex(item)].name : item.name;
    var sub = isClean ? item.name : item.qty;
    var ov = edits.over[item.id];
    if (ov && !item.custom) { mainName = ov.title; sub = ov.note || ""; }
    var name = el("span", "name", mainName);
    text.appendChild(name);
    if (sub) text.appendChild(el("span", "qty", sub));
    item.shownTitle = mainName;
    item.shownNote = sub || "";
    button.appendChild(text);
    row.appendChild(button);

    var options = optionsOf(item);
    if (options.length) {
      var more = el("button", "optbtn", options.length > 1 ? "Other options" : "Details");
      more.type = "button";
      more.setAttribute("data-choose", item.id);
      more.setAttribute("aria-label", (options.length > 1 ? "Other options for " : "Details for ") + item.name);
      row.appendChild(more);
    }

    if (editing) {
      var acts = el("div", "edit-actions");
      var eb = el("button", "mini", "Edit");
      eb.type = "button";
      eb.setAttribute("data-edit-item", item.id);
      eb.setAttribute("data-section", section.id);
      eb.setAttribute("aria-label", "Edit " + item.shownTitle);
      var xb = el("button", "mini mini-x", "\u2715 Remove");
      xb.type = "button";
      xb.setAttribute("data-hide", item.id);
      xb.setAttribute("aria-label", "Remove " + item.shownTitle);
      acts.appendChild(eb);
      acts.appendChild(xb);
      row.appendChild(acts);
    }

    return row;
  }

  function addButton(sectionId, label) {
    var b = el("button", "addbtn", "+ " + (label || "Add"));
    b.type = "button";
    b.setAttribute("data-add", sectionId);
    return b;
  }

  function toolbar() {
    var bar = el("div", "toolbar");
    bar.appendChild(el("span", "toolbar-hint", editing ? "Tap Edit or Remove on any item" : "Add or remove items"));
    var b = el("button", "editbtn" + (editing ? " is-on" : ""), editing ? "\u2713 Done" : "\u270E Edit list");
    b.type = "button";
    b.id = "edit-toggle";
    b.setAttribute("aria-pressed", editing ? "true" : "false");
    bar.appendChild(b);
    return bar;
  }

  function renderSection(section) {
    var wrap = el("section", "section");
    wrap.id = "section-" + section.id;
    var entries = sectionEntries(section);
    var count = tally(entries);

    if (section.title) {
      var head = el("div", "section-head");
      head.appendChild(el("h2", null, section.title));
      head.appendChild(el("span", "section-count", count.done + " of " + count.total));
      wrap.appendChild(head);
    }
    if (section.note) wrap.appendChild(el("p", "section-note", section.note));
    if (section.aside) wrap.appendChild(el("p", "aside", section.aside));

    entries.forEach(function (item) {
      wrap.appendChild(renderItem(item, section));
    });

    if (activeGroup === "food") wrap.appendChild(addButton(section.id));
    return wrap;
  }

  function renderTabs() {
    var nav = document.getElementById("tabs");
    SHOPPING.groups.forEach(function (group) {
      var btn = el("button", "tab", group.label);
      btn.type = "button";
      btn.id = "tab-" + group.id;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-controls", "list");
      btn.addEventListener("click", function () {
        if (activeGroup === group.id) return;
        activeGroup = group.id;
        editing = false;
        window.scrollTo(0, 0);
        render();
      });
      nav.appendChild(btn);
    });
  }

  function updateChrome() {
    var group = groupById(activeGroup);
    var isRules = group.rules === true;
    document.getElementById("bar-wrap").hidden = isRules;
    document.getElementById("count").hidden = isRules;
    var count = isRules ? { done: 0, total: 0 } : tally(groupItems(group));
    var countEl = document.getElementById("count");
    var label = count.total > 0 && count.done === count.total ? "All ticked" : count.done + " of " + count.total;
    countEl.textContent = label;
    var bar = document.getElementById("bar");
    var pct = count.total ? Math.round((count.done / count.total) * 100) : 0;
    bar.style.width = pct + "%";
    var wrap = document.getElementById("bar-wrap");
    wrap.setAttribute("aria-valuemax", String(count.total));
    wrap.setAttribute("aria-valuenow", String(count.done));
    wrap.setAttribute("aria-label", label + " in " + group.label);

    var tabs = document.querySelectorAll(".tab");
    for (var i = 0; i < tabs.length; i++) {
      var on = tabs[i].id === "tab-" + activeGroup;
      tabs[i].setAttribute("aria-selected", on ? "true" : "false");
      tabs[i].tabIndex = on ? 0 : -1;
    }
    document.getElementById("list").setAttribute("aria-labelledby", "tab-" + activeGroup);
  }

  function render() {
    var group = groupById(activeGroup);
    var list = document.getElementById("list");
    var frag = document.createDocumentFragment();
    frag.appendChild(toolbar());
    if (group.rules) {
      frag.appendChild(renderRules());
      list.replaceChildren(frag);
      updateChrome();
      return;
    }
    if (group.note) frag.appendChild(el("p", "group-note", group.note));
    if (group.people) frag.appendChild(renderPeople());
    visibleSections(group).forEach(function (section) {
      frag.appendChild(renderSection(section));
    });
    if (activeGroup !== "food") {
      var secs = visibleSections(group);
      if (secs.length) frag.appendChild(addButton(secs[0].id));
    }
    var clear = el("button", "clear", "Clear ticks");
    clear.type = "button";
    clear.id = "clear-ticks";
    frag.appendChild(clear);
    list.replaceChildren(frag);
    updateChrome();
  }

  function renderPeople() {
    var bar = el("div", "people");
    bar.setAttribute("role", "tablist");
    bar.setAttribute("aria-label", "Whose list");
    [["lockie", "Lockie"], ["margo", "Margo"]].forEach(function (p) {
      var b = el("button", "person" + (person === p[0] ? " is-on" : ""), p[1]);
      b.type = "button";
      b.setAttribute("data-person", p[0]);
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", person === p[0] ? "true" : "false");
      bar.appendChild(b);
    });
    return bar;
  }

  function slug(t) {
    return String(t).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function ruleList() {
    var out = [];
    (typeof RULES !== "undefined" ? RULES : []).forEach(function (r) {
      var id = "rule-" + slug(r.title);
      out.push({ id: id, title: r.title, items: r.items, open: r.open, custom: false });
    });
    edits.rules.forEach(function (r) {
      out.push({ id: r.id, title: r.title, items: String(r.body || "").split(/\n+/).filter(Boolean), custom: true });
    });
    return out.filter(function (r) { return !isHidden(r.id); }).map(function (r) {
      var o = edits.over[r.id];
      if (o) { r.title = o.title; r.items = String(o.note || "").split(/\n+/).filter(Boolean); }
      return r;
    });
  }

  function renderRules() {
    var wrap = el("div", "rules");
    wrap.appendChild(el("p", "group-note", "The ethos, the rules and how to prep. Tap a heading to open it."));
    ruleList().forEach(function (rule) {
      var box = el("div", "rule-wrap");
      var d = el("details", "rule");
      if (rule.open) d.open = true;
      d.appendChild(el("summary", null, rule.title));
      var ul = el("ul");
      rule.items.forEach(function (t) { ul.appendChild(el("li", null, t)); });
      d.appendChild(ul);
      box.appendChild(d);
      if (editing) {
        var acts = el("div", "edit-actions rule-actions");
        var eb = el("button", "mini", "Edit");
        eb.type = "button";
        eb.setAttribute("data-edit-rule", rule.id);
        var xb = el("button", "mini mini-x", "\u2715 Remove");
        xb.type = "button";
        xb.setAttribute("data-hide", rule.id);
        acts.appendChild(eb);
        acts.appendChild(xb);
        box.appendChild(acts);
      }
      wrap.appendChild(box);
    });
    wrap.appendChild(addButton("rules", "Add rule"));
    return wrap;
  }

  function toggleTick(id) {
    if (state.ticks[id]) {
      delete state.ticks[id];
      justTickedId = null;
    } else {
      state.ticks[id] = true;
      justTickedId = id;
    }
    saveState();
    render();
    justTickedId = null;
  }

  function findEntry(id) {
    var found = null;
    SHOPPING.groups.forEach(function (g) {
      allSections(g).forEach(function (sec) {
        sectionEntries(sec).concat(sec.items).forEach(function (it) {
          if (it.id === id && !found) found = it;
        });
      });
    });
    return found;
  }

  function hideId(id) {
    edits.hidden[id] = true;
    saveEdits();
    render();
    showUndo(id);
  }

  function showUndo(id) {
    var t = document.getElementById("undo");
    if (!t) {
      t = el("div", "undo");
      t.id = "undo";
      var msg = el("span", null, "Removed.");
      var btn = el("button", null, "Undo");
      btn.type = "button";
      btn.id = "undo-btn";
      t.appendChild(msg);
      t.appendChild(btn);
      document.body.appendChild(t);
      btn.addEventListener("click", function () {
        var uid2 = t.getAttribute("data-id");
        if (uid2) { delete edits.hidden[uid2]; saveEdits(); render(); }
        t.hidden = true;
      });
    }
    t.setAttribute("data-id", id);
    t.hidden = false;
    clearTimeout(undoTimer);
    undoTimer = setTimeout(function () { t.hidden = true; }, 6000);
  }

  function openForm(ctx) {
    formCtx = ctx;
    var isRule = ctx.kind === "rule";
    var host = document.getElementById("form-overlay");
    if (!host) {
      host = el("div", "overlay center");
      host.id = "form-overlay";
      var dlg = el("form", "dialog");
      dlg.id = "item-form";
      dlg.setAttribute("role", "dialog");
      dlg.setAttribute("aria-modal", "true");
      dlg.innerHTML = '<h2 id="form-title"></h2>' +
        '<label class="field"><span id="lbl-title">Title</span><input id="f-title" type="text" maxlength="140" autocomplete="off"></label>' +
        '<label class="field"><span id="lbl-note">Note (optional)</span><input id="f-note" type="text" maxlength="160" autocomplete="off"><textarea id="f-body" rows="6" maxlength="1500"></textarea></label>' +
        '<div class="dialog-actions"><button type="button" class="btn btn-quiet" id="form-cancel">Cancel</button><button type="submit" class="btn btn-ink" id="form-save">Save</button></div>';
      host.appendChild(dlg);
      document.body.appendChild(host);
      dlg.addEventListener("submit", function (e) { e.preventDefault(); saveForm(); });
      document.getElementById("form-cancel").addEventListener("click", closeForm);
      host.addEventListener("click", function (e) { if (e.target === host) closeForm(); });
    }
    document.getElementById("form-title").textContent = (ctx.id ? "Edit " : "Add ") + (isRule ? "rule" : "item");
    document.getElementById("lbl-note").firstChild && (document.getElementById("lbl-note").textContent = isRule ? "Text (one point per line)" : "Note (optional)");
    document.getElementById("f-title").value = ctx.title || "";
    document.getElementById("f-note").value = ctx.note || "";
    document.getElementById("f-body").value = ctx.note || "";
    document.getElementById("f-note").hidden = isRule;
    document.getElementById("f-body").hidden = !isRule;
    host.hidden = false;
    document.getElementById("f-title").focus();
  }

  function closeForm() {
    var host = document.getElementById("form-overlay");
    if (host) host.hidden = true;
    formCtx = null;
  }

  function saveForm() {
    if (!formCtx) return;
    var title = document.getElementById("f-title").value.trim();
    if (!title) { document.getElementById("f-title").focus(); return; }
    var isRule = formCtx.kind === "rule";
    var note = (isRule ? document.getElementById("f-body").value : document.getElementById("f-note").value).trim();
    var id = formCtx.id;
    if (id) {
      var isAdded = false;
      var lists = isRule ? edits.rules : [].concat.apply([], Object.keys(edits.added).map(function (k) { return edits.added[k]; }));
      lists.forEach(function (it) { if (it.id === id) { isAdded = true; if (isRule) { it.title = title; it.body = note; } else { it.name = title; it.note = note; } } });
      if (!isAdded) edits.over[id] = { title: title, note: note };
      else delete edits.over[id];
    } else if (isRule) {
      edits.rules.push({ id: uid(), title: title, body: note });
    } else {
      var sid = formCtx.section;
      if (!edits.added[sid]) edits.added[sid] = [];
      edits.added[sid].push({ id: uid(), name: title, note: note });
    }
    saveEdits();
    closeForm();
    render();
  }

  function openSheet(id) {
    var item = findCatalogItem(id);
    if (!item) return;
    var options = optionsOf(item);
    if (!options.length) return;
    openItemId = id;
    document.getElementById("sheet-title").textContent = item.name;
    var qty = document.getElementById("sheet-qty");
    if (item.qty) {
      qty.hidden = false;
      qty.textContent = item.qty;
    } else {
      qty.hidden = true;
      qty.textContent = "";
    }
    var infoEl = document.getElementById("sheet-info");
    infoEl.hidden = !item.info;
    infoEl.textContent = item.info || "";
    document.getElementById("sheet-kicker").textContent = options.length > 1 ? "Choose one" : "What to buy";
    var host = document.getElementById("sheet-options");
    host.replaceChildren();
    var current = choiceIndex(item);
    options.forEach(function (opt, index) {
      var btn = el("button", "opt" + (index === current ? " is-on" : ""));
      btn.type = "button";
      btn.setAttribute("data-option", String(index));
      btn.setAttribute("aria-pressed", index === current ? "true" : "false");
      var radio = el("span", "radio");
      radio.setAttribute("aria-hidden", "true");
      var copy = el("span");
      var kicker = el("span", "opt-kicker");
      kicker.appendChild(document.createTextNode(index === 0 ? "The pick" : "Also fine"));
      if (opt.gold) {
        kicker.appendChild(document.createTextNode(" · "));
        kicker.appendChild(el("span", "gold", "Gold standard"));
      }
      copy.appendChild(kicker);
      copy.appendChild(el("span", "opt-name", opt.name));
      if (opt.note) copy.appendChild(el("span", "opt-note", opt.note));
      btn.appendChild(radio);
      btn.appendChild(copy);
      host.appendChild(btn);
    });
    document.getElementById("sheet").hidden = false;
    document.body.classList.add("locked");
    var selected = host.querySelector(".opt.is-on");
    if (selected) selected.focus();
  }

  function closeSheet() {
    document.getElementById("sheet").hidden = true;
    openItemId = null;
    if (document.getElementById("confirm").hidden) document.body.classList.remove("locked");
  }

  function openConfirm() {
    document.getElementById("confirm").hidden = false;
    document.body.classList.add("locked");
    document.getElementById("confirm-cancel").focus();
  }

  function closeConfirm() {
    document.getElementById("confirm").hidden = true;
    if (document.getElementById("sheet").hidden) document.body.classList.remove("locked");
  }

  function clearTicks() {
    state.ticks = {};
    saveState();
    closeConfirm();
    render();
  }

  function bind() {
    var list = document.getElementById("list");

    list.addEventListener("click", function (event) {
      var remove = event.target.closest("[data-remove]");
      if (remove) {
        removeCustom(remove.getAttribute("data-section"), remove.getAttribute("data-remove"));
        return;
      }
      var choose = event.target.closest("[data-choose]");
      if (choose) {
        openSheet(choose.getAttribute("data-choose"));
        return;
      }
      var tg = event.target.closest("#edit-toggle");
      if (tg) { editing = !editing; render(); return; }
      var ad = event.target.closest("[data-add]");
      if (ad) {
        var sid = ad.getAttribute("data-add");
        openForm(sid === "rules" ? { kind: "rule" } : { kind: "item", section: sid });
        return;
      }
      var hd = event.target.closest("[data-hide]");
      if (hd) { hideId(hd.getAttribute("data-hide")); return; }
      var ei = event.target.closest("[data-edit-item]");
      if (ei) {
        var ent = findEntry(ei.getAttribute("data-edit-item"));
        if (ent) { var shown = ent.custom ? { t: ent.name, n: ent.qty } : { t: ent.shownTitle || ent.name, n: ent.shownNote || "" }; openForm({ kind: "item", id: ent.id, title: shown.t, note: shown.n }); }
        return;
      }
      var er = event.target.closest("[data-edit-rule]");
      if (er) {
        var rid = er.getAttribute("data-edit-rule");
        var r = ruleList().filter(function (x) { return x.id === rid; })[0];
        if (r) openForm({ kind: "rule", id: rid, title: r.title, note: r.items.join("\n") });
        return;
      }
      var who = event.target.closest("[data-person]");
      if (who) {
        person = who.getAttribute("data-person");
        editing = false;
        state.person = person;
        saveState();
        render();
        return;
      }
      var tick = event.target.closest("[data-tick]");
      if (tick) {
        toggleTick(tick.getAttribute("data-tick"));
        return;
      }
      if (event.target.closest("#clear-ticks")) openConfirm();
    });


    document.getElementById("sheet").addEventListener("click", function (event) {
      if (event.target.id === "sheet") closeSheet();
    });

    document.getElementById("sheet-options").addEventListener("click", function (event) {
      var btn = event.target.closest("[data-option]");
      if (!btn || !openItemId) return;
      var picked = findCatalogItem(openItemId);
      var pickedOptions = picked ? optionsOf(picked) : [];
      var pickedIndex = parseInt(btn.getAttribute("data-option"), 10);
      if (pickedOptions[pickedIndex]) state.choices[openItemId] = pickedOptions[pickedIndex].name;
      saveState();
      closeSheet();
      render();
    });

    document.getElementById("sheet-close").addEventListener("click", closeSheet);
    document.getElementById("confirm").addEventListener("click", function (event) {
      if (event.target.id === "confirm") closeConfirm();
    });
    document.getElementById("confirm-cancel").addEventListener("click", closeConfirm);
    document.getElementById("confirm-ok").addEventListener("click", clearTicks);

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;
      if (document.getElementById("form-overlay") && !document.getElementById("form-overlay").hidden) closeForm();
      else if (!document.getElementById("confirm").hidden) closeConfirm();
      else if (!document.getElementById("sheet").hidden) closeSheet();
    });
  }

  function assertIds() {
    var seen = {};
    SHOPPING.groups.forEach(function (group) {
      if (seen[group.id]) console.error("Duplicate id: " + group.id);
      seen[group.id] = true;
      allSections(group).forEach(function (section) {
        if (seen[section.id]) console.error("Duplicate id: " + section.id);
        seen[section.id] = true;
        section.items.forEach(function (item) {
          if (!item.id || !item.name) console.error("Item needs an id and a name", item);
          if (seen[item.id]) console.error("Duplicate id: " + item.id);
          seen[item.id] = true;
        });
      });
    });
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("./sw.js").catch(function () {});
  }

  assertIds();
  saveState();
  renderTabs();
  bind();
  render();
  registerServiceWorker();
})();
