(function () {
  "use strict";

  var STORAGE_KEY = "lockie-shopping-v1";
  var SVG_NS = "http://www.w3.org/2000/svg";

  var state = loadState();
  var activeGroup = "food";
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
      migrateChoices(data);
      return data;
    } catch (err) {
      return blankState();
    }
  }

  function blankState() {
    return { ticks: {}, choices: {}, custom: {} };
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  var LEGACY_MILK = [
    "Organic full-fat pasteurised",
    "A2 full-fat",
    "Kefir"
  ];

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
    var savedMilk = data.choices.milk;
    if (typeof savedMilk === "number") {
      var legacyName = LEGACY_MILK[savedMilk];
      var milkNames = [];
      var milk = findCatalogItem("milk");
      if (milk) milkNames = optionsOf(milk).map(function (opt) { return opt.name; });
      if (legacyName && milkNames.indexOf(legacyName) !== -1) data.choices.milk = legacyName;
      else delete data.choices.milk;
    }

    SHOPPING.groups.forEach(function (group) {
      group.sections.forEach(function (section) {
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

  function customItems(section) {
    var list = state.custom[section.id] || [];
    return list.map(function (item) {
      return { id: item.id, name: item.name, custom: true, sectionId: section.id };
    });
  }

  function sectionEntries(section) {
    return section.items.concat(customItems(section));
  }

  function groupById(id) {
    for (var i = 0; i < SHOPPING.groups.length; i++) {
      if (SHOPPING.groups[i].id === id) return SHOPPING.groups[i];
    }
    return SHOPPING.groups[0];
  }

  function findCatalogItem(id) {
    for (var i = 0; i < SHOPPING.groups.length; i++) {
      var sections = SHOPPING.groups[i].sections;
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
    group.sections.forEach(function (section) {
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
    var name = el("span", "name", item.name);
    text.appendChild(name);
    if (item.qty) text.appendChild(el("span", "qty", item.qty));
    if (item.note) text.appendChild(el("span", "note", item.note));
    button.appendChild(text);
    row.appendChild(button);

    var options = optionsOf(item);
    if (options.length === 1) {
      var single = el("div", "product");
      single.appendChild(el("span", "product-name", options[0].name));
      var singleMeta = noteLine(options[0]);
      if (singleMeta) single.appendChild(singleMeta);
      row.appendChild(single);
    } else if (options.length > 1) {
      var index = choiceIndex(item);
      var chosen = options[index];
      var choice = el("button", "choice");
      choice.type = "button";
      choice.setAttribute("data-choose", item.id);
      choice.setAttribute("aria-label", "Change option for " + item.name + ". Current option: " + chosen.name);
      choice.appendChild(el("span", "product-name", chosen.name));
      var meta = noteLine(chosen);
      if (meta) choice.appendChild(meta);
      row.appendChild(choice);
    }

    if (item.custom) {
      var remove = el("button", "remove", "remove");
      remove.type = "button";
      remove.setAttribute("data-remove", item.id);
      remove.setAttribute("data-section", section.id);
      remove.setAttribute("aria-label", "Remove " + item.name);
      row.appendChild(remove);
    }

    return row;
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

    var form = el("form", "add");
    form.setAttribute("data-add-form", section.id);
    var input = el("input");
    input.type = "text";
    input.maxLength = 80;
    input.placeholder = "Add a one-off";
    input.setAttribute("aria-label", "One-off item for " + (section.title || "this list"));
    input.autocomplete = "off";
    input.enterKeyHint = "done";
    var add = el("button", null, "Add");
    add.type = "submit";
    add.setAttribute("aria-label", "Add a one-off to " + (section.title || "this list"));
    form.appendChild(input);
    form.appendChild(add);
    wrap.appendChild(form);
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
        window.scrollTo(0, 0);
        render();
      });
      nav.appendChild(btn);
    });
  }

  function updateChrome() {
    var group = groupById(activeGroup);
    var count = tally(groupItems(group));
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
    if (group.note) frag.appendChild(el("p", "group-note", group.note));
    group.sections.forEach(function (section) {
      frag.appendChild(renderSection(section));
    });
    var clear = el("button", "clear", "Clear ticks");
    clear.type = "button";
    clear.id = "clear-ticks";
    frag.appendChild(clear);
    list.replaceChildren(frag);
    updateChrome();
    if (focusSection) {
      var input = list.querySelector('[data-add-form="' + focusSection + '"] input');
      if (input) input.focus();
      focusSection = null;
    }
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

  function removeCustom(sectionId, id) {
    var list = state.custom[sectionId] || [];
    state.custom[sectionId] = list.filter(function (item) { return item.id !== id; });
    if (!state.custom[sectionId].length) delete state.custom[sectionId];
    delete state.ticks[id];
    saveState();
    render();
  }

  function addCustom(sectionId, name) {
    var trimmed = name.trim().slice(0, 80);
    if (!trimmed) return;
    if (!state.custom[sectionId]) state.custom[sectionId] = [];
    state.custom[sectionId].push({
      id: "c-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name: trimmed
    });
    saveState();
    focusSection = sectionId;
    render();
  }

  function openSheet(id) {
    var item = findCatalogItem(id);
    if (!item) return;
    var options = optionsOf(item);
    if (options.length < 2) return;
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
      kicker.appendChild(document.createTextNode("Option " + (index + 1)));
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
      var tick = event.target.closest("[data-tick]");
      if (tick) {
        toggleTick(tick.getAttribute("data-tick"));
        return;
      }
      if (event.target.closest("#clear-ticks")) openConfirm();
    });

    list.addEventListener("submit", function (event) {
      var form = event.target.closest("[data-add-form]");
      if (!form) return;
      event.preventDefault();
      var input = form.querySelector("input");
      addCustom(form.getAttribute("data-add-form"), input.value);
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
      if (!document.getElementById("confirm").hidden) closeConfirm();
      else if (!document.getElementById("sheet").hidden) closeSheet();
    });
  }

  function assertIds() {
    var seen = {};
    SHOPPING.groups.forEach(function (group) {
      if (seen[group.id]) console.error("Duplicate id: " + group.id);
      seen[group.id] = true;
      group.sections.forEach(function (section) {
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
