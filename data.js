/* Lockie's shopping list — edit this file to change items.
   The first option is the default. Mark the gold standard with gold: true
   (it can be any option). That label only shows in the option picker.
   qty and note are optional. An option note (discount code, and similar)
   shows when that option is chosen.
   Keep each id the same once it exists — ticks and choices are remembered by id.

   An item looks like:
     { id: "eggs", name: "Eggs", qty: "28/week", options: [ { gold: true, name: "Pasture-raised eggs" } ] }
*/
var SHOPPING = {
  groups: [
    {
      id: "food",
      label: "Food",
      note: "Weekly for two (Lockie + Margo), full 7-night rotation. Slow cooker nights swap in; extras listed below.",
      sections: [
        {
          id: "dairy-protein",
          title: "Dairy, eggs & whey",
          items: [
            {
              id: "greek-yoghurt",
              name: "Greek yoghurt",
              qty: "3.6 kg/week",
              note: "Yoghurt bowl (Meal 1), both",
              options: [
                { gold: true, name: "Jalna Organic Farm to Pot Greek yoghurt (full-fat)" },
                { name: "Other plain full-fat organic Greek yoghurt" }
              ]
            },
            {
              id: "whey",
              name: "Whey protein (unflavoured)",
              qty: "460 g/week",
              note: "Lockie 45 g/day, Margo 20 g/day",
              options: [
                { gold: true, name: "Protein Supplies WPC, unflavoured", note: "Code CHARLEY10" },
                { name: "Chief Whey, unflavoured", note: "Code HGH10" },
                { name: "Professional Whey isolate, unflavoured", note: "Code HGH5" }
              ]
            },
            {
              id: "eggs",
              name: "Eggs",
              qty: "63/week",
              note: "Egg meal (Meal 2): Lockie 6, Margo 3",
              options: [{ gold: true, name: "Pasture-raised eggs (ideally certified organic)" }]
            },
            {
              id: "milk",
              name: "Milk",
              qty: "3.6 L/week",
              options: [
                { gold: true, name: "Raw organic grass-fed cow's milk" },
                { name: "Organic full-fat A2 (pasteurised)" },
                { name: "Raw A2 milk" }
              ]
            },
            {
              id: "cheese",
              name: "Raw aged cheddar",
              qty: "130 g/week",
              options: [{ gold: true, name: "Raw or organic aged cheddar" }]
            },
            {
              id: "parmesan",
              name: "Parmesan",
              qty: "40 g/week (+40 g per slow cooker cacciatore or ragu)",
              options: [{ gold: true, name: "Raw parmesan" }]
            },
            {
              id: "butter",
              name: "Butter",
              qty: "120 g/week",
              options: [{ gold: true, name: "Grass-fed grass-finished butter" }]
            }
          ]
        },
        {
          id: "meat-fish",
          title: "Meat",
          note: "Certified organic or grass-fed, HGP-free. Butcher paper, freeze in portions.",
          aside: "No sardines, ever.",
          items: [
            {
              id: "beef-mince",
              name: "Beef mince",
              qty: "1.4 kg/week",
              options: [{ gold: true, name: "Grass-fed grass-finished lean beef mince (5%)" }]
            },
            {
              id: "chicken-thigh",
              name: "Chicken thigh",
              qty: "820 g/week (+430 g for slow cooker cacciatore)",
              options: [{ gold: true, name: "Organic or free-range chicken thigh fillets" }]
            },
            {
              id: "steak",
              name: "Steak",
              qty: "430 g/week",
              options: [{ gold: true, name: "Grass-fed sirloin" }]
            },
            {
              id: "beef-liver",
              name: "Beef liver",
              qty: "80 g/week",
              note: "Once a week, in the ragu",
              options: [{ gold: true, name: "Organic or grass-fed beef liver" }]
            },
            {
              id: "beef-chuck",
              name: "Beef chuck (slow cooker)",
              qty: "440 g per slow cooker night",
              note: "Only if swapping in slow cooker chuck & veg (night 4)",
              options: [{ gold: true, name: "Grass-fed beef chuck" }]
            },
            {
              id: "beef-cheek",
              name: "Beef cheek (slow cooker)",
              qty: "370 g per slow cooker night",
              note: "Only if swapping in slow cooker cheek & liver ragu (night 2); add 50 g liver",
              options: [{ gold: true, name: "Grass-fed beef cheek" }]
            }
          ]
        },
        {
          id: "carbs",
          title: "Carbs",
          items: [
            {
              id: "sourdough",
              name: "Sourdough",
              qty: "~21 slices/week (1.05 kg)",
              note: "Lockie 2 slices, Margo 1, daily",
              options: [{ gold: true, name: "Organic long-ferment sourdough (flour, water, salt)" }]
            },
            {
              id: "potato",
              name: "White potato",
              qty: "1.4 kg/week",
              note: "Peel and cook"
            },
            {
              id: "basmati",
              name: "White basmati rice",
              qty: "200 g dry/week (+150 g per cacciatore night)",
              note: "Rinse, boil in plenty of water, drain",
              options: [{ gold: true, name: "Indian/Pakistani or Californian white basmati" }]
            },
            {
              id: "rice-penne",
              name: "Brown rice penne",
              qty: "170 g dry/week (+180 g per slow cooker ragu)",
              options: [{ gold: true, name: "San Remo Organic Brown Rice Penne (100% brown rice)" }]
            },
            {
              id: "rice-noodles",
              name: "Rice noodles",
              qty: "160 g dry/week",
              note: "Pho night",
              options: [{ gold: true, name: "Nutritionist Choice unbleached organic rice noodles", note: "$10.59/200 g · WholeLife Milton" }]
            }
          ]
        },
        {
          id: "fruit-veg",
          title: "Fruit & veg",
          note: "Organic for berries, kiwi, salad and anything eaten with the skin. Bicarb soak 10–15 min.",
          items: [
            { id: "blackberries", name: "Organic blackberries", qty: "910 g/week", note: "Fresh or frozen" },
            { id: "blueberries", name: "Organic blueberries", qty: "630 g/week", note: "Fresh or frozen" },
            { id: "strawberries", name: "Organic strawberries", qty: "560 g/week" },
            { id: "raspberries", name: "Organic raspberries", qty: "560 g/week", note: "Fresh or frozen" },
            { id: "bananas", name: "Bananas", qty: "~13/week (1.5 kg)", note: "Morning snack, both" },
            { id: "gold-kiwifruit", name: "Gold kiwifruit", qty: "~7/week (700 g)" },
            { id: "avocados", name: "Avocados", qty: "~12/week" },
            { id: "broccoli", name: "Broccoli", qty: "1.85 kg/week", note: "Cook, don't eat raw" },
            { id: "cos", name: "Cos lettuce", qty: "660 g/week (~3 heads)" },
            { id: "cucumber", name: "Cucumber", qty: "890 g/week (~7 Lebanese)", note: "Peel if not organic" },
            { id: "tomato", name: "Organic tomatoes", qty: "1.35 kg/week (~11)" },
            { id: "capsicum", name: "Organic red capsicum", qty: "600 g/week (~4) (+240 g per cacciatore)" },
            { id: "red-onion", name: "Red onion", qty: "310 g/week (~2) (+180 g per slow cooker night)" },
            { id: "carrots", name: "Carrots", qty: "140 g/week (+180 g per slow cooker chuck, +110 g per ragu)", note: "Organic, or scrub/peel" },
            { id: "garlic", name: "Garlic", qty: "1 bulb" },
            { id: "dill", name: "Fresh dill", qty: "2 bunches/week" },
            { id: "coriander", name: "Fresh coriander", qty: "1 bunch/week", note: "Pho night" },
            { id: "spring-onion", name: "Spring onion", qty: "1 bunch/week" },
            { id: "lemons", name: "Lemons", qty: "~3/week" },
            { id: "limes", name: "Limes", qty: "1/week", note: "Pho night" }
          ]
        },
        {
          id: "drinks",
          title: "Drinks & broth",
          items: [
            {
              id: "orange-juice",
              name: "Orange juice",
              qty: "3.6 L/week",
              note: "250 mL/day each",
              options: [{ gold: true, name: "Organic cold-pressed OJ, no preservatives, glass" }]
            },
            {
              id: "coconut-water",
              name: "Coconut water",
              qty: "3.5 L/week",
              note: "250 mL/day each",
              options: [
                { gold: true, name: "Raw C Coconut Water" },
                { name: "Other 100% pure coconut water with nothing added" }
              ]
            },
            {
              id: "bone-broth",
              name: "Bone broth paste",
              qty: "~1 jar every 2 weeks (~17 mugs/week for two)",
              note: "Morning snack mug each + slow cooker/pho · 1 heaped tsp in 250 mL hot (not boiling) water · refrigerate after opening",
              options: [
                { gold: true, name: "Best of the Bone Original bone broth concentrate paste", note: "$32.99 · bestofthebone.com · code HOLISTICGUT15" }
              ]
            }
          ]
        },
        {
          id: "pantry",
          title: "Pantry, fats & sweeteners",
          items: [
            {
              id: "evoo",
              name: "Extra virgin olive oil",
              qty: "~150 mL/week",
              note: "Raw only (dressings)",
              options: [{ gold: true, name: "Australian EVOO in dark glass or tin" }]
            },
            {
              id: "cooking-fat",
              name: "Cooking fat",
              options: [
                { gold: true, name: "Beef tallow (Best of the Bone)", note: "Code HOLISTICGUT15" },
                { name: "Ghee (grass-fed, glass jar)" }
              ]
            },
            {
              id: "passata",
              name: "Tomato passata",
              qty: "300 g/week (+300 g per slow cooker cacciatore or ragu)",
              options: [{ gold: true, name: "Organic tomato passata in glass" }]
            },
            {
              id: "raw-honey",
              name: "Raw honey",
              qty: "~250 g/week",
              note: "Morning snack: Lockie 1 tbsp, Margo 2 tsp",
              options: [{ gold: true, name: "Raw Australian organic honey" }]
            },
            {
              id: "maple-syrup",
              name: "Maple syrup",
              qty: "~175 g/week",
              note: "Yoghurt bowl",
              options: [{ gold: true, name: "Pure maple syrup in glass" }]
            },
            {
              id: "dark-chocolate",
              name: "Dark chocolate (85%)",
              qty: "~2 × 80 g bars/week",
              note: "Max 15 g/day Lockie, 10 g Margo, on the yoghurt bowl",
              options: [
                { gold: true, name: "Alter Eco Organic Classic Blackout 85% (80 g)", note: "Organic, fair trade · about $8.60–$9.95 · Harris Farm, IGA, health food stores" },
                { name: "Loving Earth Organic 85% (80 g)", note: "Organic, coconut-nectar sweetened · about $6.90" },
                { name: "Pana Organic dark (85%)", note: "Organic · Australian-made" }
              ]
            },
            {
              id: "ceylon-cinnamon",
              name: "Ceylon cinnamon",
              qty: "~30 g/week",
              note: "Yoghurt bowl · tested brand",
              options: [{ gold: true, name: "Ceylon cinnamon (not cassia), tested for lead" }]
            },
            {
              id: "salt",
              name: "Salt",
              options: [{ gold: true, name: "Salt with batch heavy-metal testing" }]
            },
            {
              id: "chewing-gum",
              name: "Chewing gum",
              options: [
                { gold: true, name: "Natural chicle-based gum (no aspartame or artificial colours)" },
                { name: "Xylitol-sweetened natural gum" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "supplements",
      label: "Supplements",
      note: "For two (Lockie + Margo).",
      sections: [
        {
          id: "supplements-list",
          items: [
            {
              id: "omega-3",
              name: "Omega-3",
              qty: "1 × 473 mL bottle ≈ 47 days for two",
              note: "1 tsp (5 mL) each, morning with Meal 1 · keep refrigerated · use within 3 months · check the lot number on nordic.com · reorder every ~6 weeks",
              options: [
                { gold: true, name: "Nordic Naturals Arctic Cod Liver Oil, orange, 473 mL", note: "$94.55 · Aus Health Nutrition" },
                { name: "Nordic Naturals Ultimate Omega, 180 caps", note: "$129.95 · 2 softgels/day each with food · 45 days for two · Aus Health Nutrition" },
                { name: "Nordic Naturals Ultimate Omega, 120 caps", note: "$99.95 · 2 softgels/day each with food · 30 days for two · Aus Health Nutrition" }
              ]
            },
            {
              id: "vitamin-d3-k2",
              name: "Vitamin D3 + K2",
              qty: "3 drops/day combined",
              note: "Lockie 2 drops, Margo 1, morning with a fat-containing meal · on food or under the tongue · max 4/day (not 10)",
              options: [
                { gold: true, name: "Seeking Health D3 + K2 Drops, 30 mL", note: "$41.10 · iHerb AU" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "care",
      label: "Personal care",
      sections: [
        {
          id: "personal-care",
          items: [
            {
              id: "toilet-paper",
              name: "Toilet paper",
              options: [
                { gold: true, name: "Who Gives A Crap bamboo (unscented)" },
                { name: "Unscented, unbleached recycled or bamboo toilet paper" }
              ]
            },
            {
              id: "face-cleanser",
              name: "Face cleanser",
              options: [
                { gold: true, name: "The Ordinary Squalane Cleanser", note: "PM only" }
              ]
            },
            {
              id: "face-moisturiser",
              name: "Face moisturiser",
              options: [
                { gold: true, name: "The Ordinary Natural Moisturizing Factors + HA" }
              ]
            },
            {
              id: "body-moisturiser",
              name: "Body moisturiser",
              options: [
                { gold: true, name: "MooGoo Full Cream Moisturiser" }
              ]
            },
            {
              id: "shampoo",
              name: "Shampoo",
              options: [
                { gold: true, name: "MooGoo Milk Shampoo" }
              ]
            },
            {
              id: "conditioner",
              name: "Conditioner",
              options: [
                { gold: true, name: "MooGoo Cream Conditioner" }
              ]
            },
            {
              id: "body-wash",
              name: "Body wash",
              options: [
                { gold: true, name: "MooGoo Milk Wash (soap-free)" },
                { name: "Unscented natural bar soap" }
              ]
            },
            {
              id: "hair-clay",
              name: "Hair clay",
              options: [
                { gold: true, name: "Aotearoad Natural Hair Clay – Medium Hold (old formula)" },
                { name: "Hunter Lab hair clay" }
              ]
            },
            {
              id: "deodorant",
              name: "Deodorant",
              options: [
                { gold: true, name: "Tuttofare Natural Deodorant", note: "Current, fades by evening, better option coming" },
                { name: "Other aluminium-free, fragrance-free natural deodorant" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "cleaning",
      label: "Cleaning",
      note: "Buy option 1 unless it is unavailable, too expensive, or it performs poorly. Option 2 is the fallback.",
      sections: [
        {
          id: "cleaning-jobs",
          items: [
            {
              id: "surface",
              name: "Surface / glass / mirrors / floors",
              note: "Benches, glass, mirrors, and sealed floors",
              options: [
                { gold: true, name: "Koh Universal Cleaner" },
                { name: "Ecostore Ultra Sensitive Multi-Purpose Cleaner" }
              ]
            },
            {
              id: "disinfectant",
              name: "Disinfectant",
              note: "Raw meat, illness, or a high-risk bathroom only",
              options: [
                { gold: true, name: "Hydro-E HOCl Hospital Grade Disinfectant" },
                { name: "SimplyClean Simply NO Mould / HOCl-style disinfectant" }
              ]
            },
            {
              id: "bathroom",
              name: "Bathroom",
              note: "Soap scum and scale",
              options: [
                { gold: true, name: "SimplyClean HealthyClean Bathroom" },
                { name: "Ecostore Bathroom & Shower Cleaner Concentrate" }
              ]
            },
            {
              id: "dishwasher",
              name: "Dishwasher",
              options: [
                { gold: true, name: "Kin Kin Dishwasher Powder" },
                { name: "Hudstone Dishwashing Powder" }
              ]
            },
            {
              id: "dish-liquid",
              name: "Dish liquid",
              options: [
                { gold: true, name: "Ecostore Ultra Sensitive Dish Liquid" },
                { name: "Earth Choice Sensitive Concentrated Dishwashing Liquid" }
              ]
            },
            {
              id: "laundry",
              name: "Laundry",
              options: [
                { gold: true, name: "Resparkle Fragrance-Free Laundry Powder" },
                { name: "Abode Zero Laundry Powder / Liquid" }
              ]
            },
            {
              id: "stain-remover",
              name: "Stain remover / soaker",
              note: "Blood, sweat, sunscreen, whites",
              options: [
                { gold: true, name: "Hudstone Pre Soaker / Stain Remover" },
                { name: "Kin Kin Laundry Soaker & Stain Remover" }
              ]
            },
            {
              id: "hand-wash",
              name: "Hand wash",
              options: [
                { gold: true, name: "Ecostore Ultra Sensitive Hand Wash" },
                { name: "Abode Sensitive / fragrance-free hand wash" }
              ]
            },
            {
              id: "toilet",
              name: "Toilet",
              options: [
                { gold: true, name: "Citric acid powder + toilet brush" },
                { name: "Abode Toilet Gel" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
