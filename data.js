/* Household shopping list: edit this file to change items.
   Each item shows a short plain label (name) and qty on the list. Product, price, links,
   codes and notes live in options (first option = the pick). Mark any option gold: true
   for the "Gold standard" label (shown only in the picker). item.info shows at the top of the picker.
   Personal care and Supplements have people: { lockie: [sections], margo: [sections] }.
   Keep each id the same once it exists: ticks and choices are remembered by id.
   Rules are in the RULES array at the bottom: { title, items: [text, ...] }. */
var SHOPPING = {
  "groups": [
    {
      "id": "food",
      "label": "Food",
      "sections": [
        {
          "id": "dairy-protein",
          "title": "Dairy, eggs & whey",
          "items": [
            {
              "id": "greek-yoghurt",
              "name": "Greek yoghurt",
              "qty": "3.6 kg/week"
            },
            {
              "id": "eggs",
              "name": "Eggs",
              "qty": "63/week"
            },
            {
              "id": "milk",
              "name": "Milk",
              "qty": "3.6 L/week"
            },
            {
              "id": "cheese",
              "name": "Cheddar",
              "qty": "130 g/week"
            },
            {
              "id": "parmesan",
              "name": "Parmesan",
              "qty": "40 g/week"
            },
            {
              "id": "butter",
              "name": "Butter",
              "qty": "120 g/week"
            }
          ]
        },
        {
          "id": "meat-fish",
          "title": "Meat",
          "items": [
            {
              "id": "beef-mince",
              "name": "Beef mince",
              "qty": "1.4 kg/week"
            },
            {
              "id": "chicken-thigh",
              "name": "Chicken thighs",
              "qty": "820 g/week"
            },
            {
              "id": "steak",
              "name": "Steak",
              "qty": "430 g/week"
            },
            {
              "id": "beef-liver",
              "name": "Beef liver",
              "qty": "80 g/week"
            },
            {
              "id": "beef-chuck",
              "name": "Beef chuck",
              "qty": "440 g per slow cooker night"
            }
          ]
        },
        {
          "id": "carbs",
          "title": "Carbs",
          "items": [
            {
              "id": "sourdough",
              "name": "Sourdough",
              "qty": "~21 slices/week"
            },
            {
              "id": "potato",
              "inSeason": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
              ],
              "name": "Potatoes",
              "qty": "1.4 kg/week"
            },
            {
              "id": "basmati",
              "name": "Basmati rice",
              "qty": "200 g dry/week"
            },
            {
              "id": "rice-penne",
              "name": "Rice pasta",
              "qty": "170 g dry/week"
            },
            {
              "id": "rice-noodles",
              "name": "Rice noodles",
              "qty": "160 g dry/week"
            }
          ]
        },
        {
          "id": "fruit-veg",
          "title": "Fruit & veg",
          "items": [
            {
              "id": "blackberries",
              "inSeason": [
                12,
                1,
                2,
                3
              ],
              "frozenOk": true,
              "name": "Blackberries",
              "qty": "910 g/week"
            },
            {
              "id": "blueberries",
              "inSeason": [
                7,
                8,
                9,
                10,
                11,
                12
              ],
              "name": "Blueberries",
              "qty": "630 g/week"
            },
            {
              "id": "strawberries",
              "inSeason": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
              ],
              "name": "Strawberries",
              "qty": "560 g/week"
            },
            {
              "id": "raspberries",
              "inSeason": [
                12,
                1,
                2,
                3
              ],
              "frozenOk": true,
              "name": "Raspberries",
              "qty": "560 g/week"
            },
            {
              "id": "bananas",
              "inSeason": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
              ],
              "name": "Bananas",
              "qty": "~13/week"
            },
            {
              "id": "gold-kiwifruit",
              "inSeason": [
                4,
                5,
                6,
                7,
                8,
                9,
                10
              ],
              "name": "Gold kiwifruit",
              "qty": "~7/week"
            },
            {
              "id": "avocados",
              "inSeason": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
              ],
              "name": "Avocados",
              "qty": "~12/week"
            },
            {
              "id": "broccoli",
              "inSeason": [
                5,
                6,
                7,
                8,
                9,
                10
              ],
              "name": "Broccoli",
              "qty": "~5 heads/week"
            },
            {
              "id": "cos",
              "inSeason": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
              ],
              "name": "Cos lettuce",
              "qty": "~3 heads/week"
            },
            {
              "id": "cucumber",
              "inSeason": [
                10,
                11,
                12,
                1,
                2,
                3,
                4
              ],
              "name": "Cucumber",
              "qty": "~7 Lebanese/week"
            },
            {
              "id": "tomato",
              "inSeason": [
                10,
                11,
                12,
                1,
                2,
                3,
                4
              ],
              "name": "Tomatoes",
              "qty": "~11/week"
            },
            {
              "id": "capsicum",
              "inSeason": [
                10,
                11,
                12,
                1,
                2,
                3,
                4
              ],
              "name": "Red capsicum",
              "qty": "~5/week"
            },
            {
              "id": "red-onion",
              "inSeason": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
              ],
              "name": "Red onion",
              "qty": "~3/week"
            },
            {
              "id": "carrots",
              "inSeason": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
              ],
              "name": "Carrots",
              "qty": "~2/week"
            },
            {
              "id": "garlic",
              "inSeason": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
              ],
              "name": "Garlic",
              "qty": "1 bulb"
            },
            {
              "id": "dill",
              "name": "Dill",
              "qty": "2 bunches/week"
            },
            {
              "id": "coriander",
              "name": "Coriander",
              "qty": "1 bunch/week"
            },
            {
              "id": "spring-onion",
              "name": "Spring onion",
              "qty": "1 bunch/week"
            },
            {
              "id": "lemons",
              "inSeason": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
              ],
              "name": "Lemons",
              "qty": "~3/week"
            },
            {
              "id": "limes",
              "name": "Limes",
              "qty": "1/week"
            }
          ]
        },
        {
          "id": "drinks",
          "title": "Drinks & broth",
          "items": [
            {
              "id": "orange-juice",
              "name": "Orange juice",
              "qty": "3.6 L/week"
            },
            {
              "id": "coconut-water",
              "name": "Coconut water",
              "qty": "3.5 L/week"
            },
            {
              "id": "pomegranate-juice",
              "name": "Pomegranate juice",
              "qty": "1–2 L/week"
            },
            {
              "id": "tart-cherry",
              "name": "Tart cherry concentrate",
              "qty": "473 mL every ~8 days"
            },
            {
              "id": "bone-broth",
              "name": "Bone broth",
              "qty": "~1 jar every 2 weeks"
            }
          ]
        },
        {
          "id": "pantry",
          "title": "Pantry, fats & sweeteners",
          "items": [
            {
              "id": "evoo",
              "name": "Olive oil",
              "qty": "~150 mL/week"
            },
            {
              "id": "cooking-fat",
              "name": "Tallow or ghee"
            },
            {
              "id": "passata",
              "name": "Passata",
              "qty": "300 g/week"
            },
            {
              "id": "raw-honey",
              "name": "Honey",
              "qty": "~250 g/week"
            },
            {
              "id": "maple-syrup",
              "name": "Maple syrup",
              "qty": "~175 g/week"
            },
            {
              "id": "dark-chocolate",
              "name": "Dark chocolate",
              "qty": "~2 × 80 g bars/week"
            },
            {
              "id": "ceylon-cinnamon",
              "name": "Ceylon cinnamon",
              "qty": "~30 g/week"
            },
            {
              "id": "salt",
              "name": "Salt"
            },
            {
              "id": "chewing-gum",
              "name": "Chewing gum"
            },
            {
              "id": "rice-cakes",
              "name": "Organic rice cakes or rice crackers"
            },
            {
              "id": "apple-cider-vinegar",
              "name": "Apple cider vinegar (raw, unfiltered, with the mother)"
            },
            {
              "id": "rice-cakes",
              "name": "Organic rice cakes or rice crackers"
            }
          ]
        },
        {
          "id": "simmer-pot",
          "title": "Simmer pot",
          "items": [
            {
              "id": "simmer-orange",
              "name": "Orange",
              "qty": "1/week"
            },
            {
              "id": "simmer-cinnamon",
              "name": "Cinnamon sticks"
            },
            {
              "id": "simmer-cloves",
              "name": "Whole cloves"
            },
            {
              "id": "simmer-vanilla",
              "name": "Vanilla extract"
            },
            {
              "id": "simmer-rotation",
              "name": "Rosemary, mint, ginger or star anise"
            }
          ]
        }
      ]
    },
    {
      "id": "supplements",
      "label": "Supplements",
      "people": {
        "lockie": [
          {
            "id": "supp-lockie",
            "items": [
              {
                "id": "omega-3",
                "name": "Cod liver oil",
                "qty": "5 mL/day"
              },
              {
                "id": "creatine",
                "name": "Creatine",
                "qty": "5 g/day"
              },
              {
                "id": "vitamin-d3-k2",
                "name": "Vitamin D3 + K2",
                "qty": "2 drops/day"
              },
              {
                "id": "whey",
                "name": "Whey protein",
                "qty": "45 g/day"
              }
            ]
          }
        ],
        "margo": [
          {
            "id": "supp-margo",
            "items": [
              {
                "id": "m-omega-3",
                "name": "Cod liver oil",
                "qty": "5 mL/day"
              },
              {
                "id": "m-vitamin-d3-k2",
                "name": "Vitamin D3 + K2",
                "qty": "1 drop/day"
              },
              {
                "id": "m-whey",
                "name": "Whey protein",
                "qty": "20 g/day"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "care",
      "label": "Personal care",
      "people": {
        "lockie": [
          {
            "id": "care-main",
            "items": [
              {
                "id": "care-face-moisturiser",
                "name": "Face moisturiser"
              },
              {
                "id": "care-face-cleanser",
                "name": "Face cleanser"
              },
              {
                "id": "care-body-moisturiser",
                "name": "Body moisturiser"
              },
              {
                "id": "care-body-wash",
                "name": "Body wash"
              },
              {
                "id": "care-hand-wash",
                "name": "Hand wash"
              },
              {
                "id": "care-shampoo",
                "name": "Shampoo"
              },
              {
                "id": "care-conditioner",
                "name": "Conditioner"
              },
              {
                "id": "care-hair-styling",
                "name": "Hair styling"
              },
              {
                "id": "care-toothbrush",
                "name": "Toothbrush"
              },
              {
                "id": "care-dental-floss",
                "name": "Dental floss"
              },
              {
                "id": "care-toothpaste",
                "name": "Toothpaste"
              },
              {
                "id": "care-deodorant",
                "name": "Deodorant"
              }
            ]
          },
          {
            "id": "care-optional",
            "title": "Optional",
            "items": [
              {
                "id": "care-opt-the-ordinary-multi-peptide-copper-peptid",
                "name": "Peptide serum"
              },
              {
                "id": "care-opt-the-ordinary-squalane",
                "name": "Squalane"
              },
              {
                "id": "care-opt-sylvawell-fragrance",
                "name": "Fragrance"
              },
              {
                "id": "care-opt-lactic-acid",
                "name": "Lactic acid serum"
              }
            ]
          }
        ],
        "margo": [
          {
            "id": "care-m-main",
            "items": [
              {
                "id": "m-care-body-wash",
                "name": "Body wash"
              },
              {
                "id": "m-care-hand-wash",
                "name": "Hand wash"
              },
              {
                "id": "m-care-toothpaste",
                "name": "Toothpaste"
              }
            ]
          },
          {
            "id": "care-m-optional",
            "title": "Margo to add",
            "note": "Margo to add her own face, hair and deodorant picks. Tap + Add below.",
            "items": []
          }
        ]
      }
    },
    {
      "id": "cleaning",
      "label": "Cleaning",
      "guide": {"title": "How to use", "items": ["Surface cleaner: benches, tables, stovetop. Spray, wipe with a damp cloth.", "Dishwashing liquid: dishes by hand; a few drops in a spray bottle of water also works as a bench spray.", "Dishwasher powder: half-fill the dispenser (about 15 mL).", "Laundry liquid: about 35 mL per load (check bottle); fragrance-free for skin.", "Laundry soaker: stains and smelly gear; soak 1–2 hrs or add a scoop to the wash.", "Mould cleaner (peroxide): grout, shower floor, silicone. Spray, leave 10–15 min, scrub, rinse.", "Shower glass: 1 tbsp citric acid in 500 mL warm water (or neat cleaning vinegar). Spray, leave 5–10 min, wipe. Squeegee after every shower.", "Toilet cleaner: under the rim, leave 10 min, brush, flush.", "Citric acid: also descales kettle and shower head (soak).", "Disinfectant: only for raw meat spills or sickness, not everyday.", "Safety: never mix acids (citric/vinegar) or peroxide with bleach; no acid on natural stone."]},
      "sections": [
        {
          "id": "cleaning-main",
          "items": [
            {
              "id": "clean-general-surfaces-kitchen",
              "name": "Surface cleaner"
            },
            {
              "id": "clean-targeted-disinfection",
              "name": "Disinfectant"
            },
            {
              "id": "clean-laundry-detergent",
              "name": "Laundry liquid"
            },
            {
              "id": "clean-laundry-soaker-stain",
              "name": "Laundry soaker"
            },
            {
              "id": "clean-dishwasher",
              "name": "Dishwasher powder"
            },
            {
              "id": "clean-hand-dishwashing",
              "name": "Dishwashing liquid"
            },
            {
              "id": "clean-bathroom",
              "name": "Shower cleaner"
            },
            {
              "id": "clean-toilet",
              "name": "Toilet cleaner"
            },
            {
              "id": "clean-mould",
              "name": "Mould cleaner"
            },
            {
              "id": "clean-descaling",
              "name": "Citric acid"
            },
            {
              "id": "clean-vinegar",
              "name": "White cleaning vinegar"
            },
            {
              "id": "clean-multipurpose-wipes",
              "name": "Cleaning wipes"
            },
            {
              "id": "clean-hand-sanitiser",
              "name": "Hand sanitiser"
            }
          ]
        },
        {
          "id": "cleaning-optional",
          "title": "Optional",
          "items": [
            {
              "id": "clean-opt-koala-eco-fragrance-free-laundry-stain-s",
              "name": "Laundry stain spray"
            },
            {
              "id": "clean-opt-koala-eco-fragrance-free-oxygenated-blea",
              "name": "Oxygen bleach"
            }
          ]
        }
      ]
    },
    {
      "id": "rules",
      "label": "Rules",
      "rules": true
    }
  ]
};

var RULES = [
  {
    title: "Ethos",
    open: true,
    items: [
      "Whole, minimally processed food. Not absolute: weigh benefit against risk. Preparation, sourcing and packaging all count.",
      "No sardines, ever.",
      "Meat: certified organic or grass-fed, HGP-free. Butcher paper, freeze in portions.",
      "Glass or stainless for storage. Never heat food in plastic, no cans."
    ]
  },
  {
    title: "Avoid list highlights",
    items: [
      "Artificial sweeteners, dyes and flavours (aspartame, sucralose, acesulfame-K; E102, E110, E129, E133). Unflavoured whey, plain products.",
      "BHA/BHT, titanium dioxide, bromate, parabens, benzoate preservatives. Read labels.",
      "Emulsifiers and gums (carrageenan, polysorbate 80, CMC, mono/diglycerides). Plain dairy only.",
      "Nitrites in processed meat (bacon, ham, salami). Fresh meat instead.",
      "Plastic chemicals: BPA, phthalates, PFAS. No cans, no non-stick pans, no greaseproof takeaway wrap.",
      "Pesticides and glyphosate: organic for high-residue produce, wash the rest.",
      "Large predatory fish (shark/flake, swordfish, tuna) for mercury. Never canned fish.",
      "Seed oils, and spinach, chard and raw kale (oxalates and goitrogens).",
      "Lead and cadmium: Ceylon not cassia cinnamon, batch-tested salt, skip cacao. Organ meats from organic sources only."
    ]
  },
  {
    title: "Dairy rule",
    items: [
      "Raw OR A2 organic grass-fed, whichever is available.",
      "Plain only: milk, cream, salt, cultures. No gums or carrageenan, no cottage cheese with additives.",
      "Aged cheese in small portions (histamine). Cheddar over parmesan if reactive. Store in beeswax or glass, not cling wrap."
    ]
  },
  {
    title: "Cooking fats",
    items: [
      "Cook with beef tallow or grass-fed ghee.",
      "Extra virgin olive oil raw only (dressings), in dark glass or tin.",
      "Butter: grass-fed, grass-finished. No seed oils."
    ]
  },
  {
    title: "Organic priorities",
    items: [
      "Always organic: strawberries, blueberries, blackberries, raspberries, kiwi, tomato, capsicum, cos, rocket, carrots.",
      "Organic or peel: carrot, cucumber, gold kiwi.",
      "Fine conventional: avocado, red onion, banana, lemon, lime, garlic (thick skin or peeled).",
      "Eggs pasture-raised, ideally certified organic. Mushrooms organic or Australian grown."
    ]
  },
  {
    title: "Washing and prep produce",
    items: [
      "Bicarb soak: 1 tsp bicarb per litre of water, 10–15 minutes, then rinse.",
      "Peel conventional cucumber and carrot. Scrub or peel root veg.",
      "Frozen organic berries are fine and often cheaper."
    ]
  },
  {
    title: "Reduce anti-nutrients",
    items: [
      "Cook brassicas (broccoli, cabbage): steam or boil. Never raw broccoli smoothies.",
      "Oxalate veg: boil and discard the water. Avoid raw kale and spinach.",
      "Pair oxalate foods with dairy or cheese.",
      "Grains: soak or ferment. Sourdough only, long-ferment. White rice over brown.",
      "Rice: rinse, boil in plenty of water (6–10:1) and drain to cut arsenic.",
      "Beans and lentils only if soaked and pressure-cooked. Skip seeds and bran."
    ]
  },
  {
    title: "Tea, coffee and iron",
    items: [
      "Keep tea and coffee away from iron-rich meals (tannins block iron). Leave about an hour either side.",
      "Especially important for Margo."
    ]
  },
  {
    title: "Hot drinks and honey",
    items: [
      "Raw honey never in hot drinks. Heat destroys the enzymes. Use maple syrup instead.",
      "Bone broth paste in hot, not boiling, water."
    ]
  },
  {
    title: "Laundry",
    items: [
      "No fabric softener and no scent boosters.",
      "Fragrance-free detergent and soaker only."
    ]
  },
  {
    title: "Supplements",
    items: [
      "Cod liver oil: 1 tsp (5 mL) each with Meal 1. Keep in the fridge, use within 3 months.",
      "Vitamin D3 + K2: Lockie 2 drops, Margo 1, with a fat-containing meal. Max 4 a day combined.",
      "Whey: Lockie 45 g, Margo 20 g. Unflavoured only.",
      "Creatine: Lockie only, 5 g/day."
    ]
  },
  {
    title: "Dish tools (plastic-free)",
    items: [
      "Beechwood and plant-bristle brush for everyday dishes. Swap the head every 2–3 months.",
      "316L stainless chainmail for burnt-on pans. Dishwasher or boil to clean.",
      "Linen or organic cotton cloth. Fresh one every day or two, wash hot.",
      "Rinse after use and let everything dry fully. Brush stands head-up."
    ]
  }
];
