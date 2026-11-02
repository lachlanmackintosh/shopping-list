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
              "name": "Plain full-fat organic Greek yoghurt",
              "qty": "3.6 kg/week",
              "options": [
                {
                  "gold": true,
                  "name": "Jalna Organic Farm to Pot Greek yoghurt (full-fat)"
                },
                {
                  "name": "Other plain full-fat organic Greek yoghurt"
                }
              ],
              "info": "Yoghurt bowl (Meal 1), both."
            },
            {
              "id": "eggs",
              "name": "Pasture-raised eggs",
              "qty": "63/week",
              "options": [
                {
                  "gold": true,
                  "name": "Pasture-raised eggs (ideally certified organic)"
                }
              ],
              "info": "Egg meal (Meal 2): Lockie 6, Margo 3."
            },
            {
              "id": "milk",
              "name": "Raw or A2 grass-fed milk",
              "qty": "3.6 L/week",
              "options": [
                {
                  "gold": true,
                  "name": "Raw organic grass-fed cow's milk"
                },
                {
                  "name": "Organic full-fat A2 (pasteurised)"
                },
                {
                  "name": "Raw A2 milk"
                }
              ]
            },
            {
              "id": "cheese",
              "name": "Raw or organic aged cheddar",
              "qty": "130 g/week",
              "options": [
                {
                  "gold": true,
                  "name": "Raw or organic aged cheddar"
                }
              ]
            },
            {
              "id": "parmesan",
              "name": "Raw parmesan",
              "qty": "40 g/week",
              "options": [
                {
                  "gold": true,
                  "name": "Raw parmesan"
                }
              ],
              "info": "Plus 40 g per slow cooker cacciatore or ragu."
            },
            {
              "id": "butter",
              "name": "Grass-fed butter",
              "qty": "120 g/week",
              "options": [
                {
                  "gold": true,
                  "name": "Grass-fed grass-finished butter"
                }
              ]
            }
          ]
        },
        {
          "id": "meat-fish",
          "title": "Meat",
          "items": [
            {
              "id": "beef-mince",
              "name": "Grass-fed beef mince",
              "qty": "1.4 kg/week",
              "options": [
                {
                  "gold": true,
                  "name": "Grass-fed grass-finished lean beef mince (5%)"
                }
              ]
            },
            {
              "id": "chicken-thigh",
              "name": "Organic or free-range chicken thigh",
              "qty": "820 g/week",
              "options": [
                {
                  "gold": true,
                  "name": "Organic or free-range chicken thigh fillets"
                }
              ],
              "info": "Plus 430 g for slow cooker cacciatore."
            },
            {
              "id": "steak",
              "name": "Grass-fed steak (sirloin)",
              "qty": "430 g/week",
              "options": [
                {
                  "gold": true,
                  "name": "Grass-fed sirloin"
                }
              ]
            },
            {
              "id": "beef-liver",
              "name": "Organic grass-fed beef liver",
              "qty": "80 g/week",
              "options": [
                {
                  "gold": true,
                  "name": "Organic or grass-fed beef liver"
                }
              ],
              "info": "Once a week, in the ragu."
            },
            {
              "id": "beef-chuck",
              "name": "Grass-fed beef chuck (slow cooker)",
              "qty": "440 g per slow cooker night",
              "options": [
                {
                  "gold": true,
                  "name": "Grass-fed beef chuck"
                }
              ],
              "info": "Only if swapping in slow cooker chuck & veg (night 4)."
            },
            {
              "id": "beef-cheek",
              "name": "Grass-fed beef cheek (slow cooker)",
              "qty": "370 g per slow cooker night",
              "options": [
                {
                  "gold": true,
                  "name": "Grass-fed beef cheek"
                }
              ],
              "info": "Only if swapping in slow cooker cheek & liver ragu (night 2); add 50 g liver."
            }
          ]
        },
        {
          "id": "carbs",
          "title": "Carbs",
          "items": [
            {
              "id": "sourdough",
              "name": "Organic long-ferment sourdough",
              "qty": "~21 slices/week",
              "options": [
                {
                  "gold": true,
                  "name": "Organic long-ferment sourdough (flour, water, salt)"
                }
              ],
              "info": "Lockie 2 slices, Margo 1, daily."
            },
            {
              "id": "potato",
              "inSeason": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              "name": "White potato",
              "qty": "1.4 kg/week",
              "options": [
                {
                  "gold": true,
                  "name": "White potato"
                }
              ],
              "info": "Peel and cook."
            },
            {
              "id": "basmati",
              "name": "White basmati rice",
              "qty": "200 g dry/week",
              "options": [
                {
                  "gold": true,
                  "name": "Indian/Pakistani or Californian white basmati"
                }
              ],
              "info": "Rinse, boil in plenty of water, drain. Plus 150 g per cacciatore night."
            },
            {
              "id": "rice-penne",
              "name": "Organic brown rice penne",
              "qty": "170 g dry/week",
              "options": [
                {
                  "gold": true,
                  "name": "San Remo Organic Brown Rice Penne (100% brown rice)"
                }
              ],
              "info": "Plus 180 g per slow cooker ragu."
            },
            {
              "id": "rice-noodles",
              "name": "Organic rice noodles",
              "qty": "160 g dry/week",
              "options": [
                {
                  "gold": true,
                  "name": "Nutritionist Choice unbleached organic rice noodles",
                  "note": "$10.59/200 g · WholeLife Milton"
                }
              ],
              "info": "Pho night."
            }
          ]
        },
        {
          "id": "fruit-veg",
          "title": "Fruit & veg",
          "items": [
            {
              "id": "blackberries",
              "inSeason": [12, 1, 2, 3],
              "frozenOk": true,
              "name": "Organic blackberries",
              "qty": "910 g/week",
              "options": [
                {
                  "gold": true,
                  "name": "Organic blackberries"
                }
              ],
              "info": "Fresh or frozen."
            },
            {
              "id": "blueberries",
              "inSeason": [7, 8, 9, 10, 11, 12],
              "name": "Organic blueberries",
              "qty": "630 g/week",
              "options": [
                {
                  "gold": true,
                  "name": "Organic blueberries"
                }
              ],
              "info": "Fresh or frozen."
            },
            {
              "id": "strawberries",
              "inSeason": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              "name": "Organic strawberries",
              "qty": "560 g/week"
            },
            {
              "id": "raspberries",
              "inSeason": [12, 1, 2, 3],
              "frozenOk": true,
              "name": "Organic raspberries",
              "qty": "560 g/week",
              "options": [
                {
                  "gold": true,
                  "name": "Organic raspberries"
                }
              ],
              "info": "Fresh or frozen."
            },
            {
              "id": "bananas",
              "inSeason": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              "name": "Bananas",
              "qty": "~13/week",
              "options": [
                {
                  "gold": true,
                  "name": "Bananas"
                }
              ],
              "info": "Morning snack, both."
            },
            {
              "id": "gold-kiwifruit",
              "inSeason": [4, 5, 6, 7, 8, 9, 10],
              "name": "Gold kiwifruit",
              "qty": "~7/week"
            },
            {
              "id": "avocados",
              "inSeason": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              "name": "Avocados",
              "qty": "~12/week"
            },
            {
              "id": "broccoli",
              "inSeason": [5, 6, 7, 8, 9, 10],
              "name": "Broccoli",
              "qty": "~5 heads/week",
              "options": [
                {
                  "gold": true,
                  "name": "Broccoli"
                }
              ],
              "info": "Cook, don't eat raw."
            },
            {
              "id": "cos",
              "inSeason": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              "name": "Cos lettuce",
              "qty": "~3 heads/week"
            },
            {
              "id": "cucumber",
              "inSeason": [10, 11, 12, 1, 2, 3, 4],
              "name": "Cucumber",
              "qty": "~7 Lebanese/week",
              "options": [
                {
                  "gold": true,
                  "name": "Cucumber"
                }
              ],
              "info": "Peel if not organic."
            },
            {
              "id": "tomato",
              "inSeason": [10, 11, 12, 1, 2, 3, 4],
              "name": "Organic tomatoes",
              "qty": "~11/week"
            },
            {
              "id": "capsicum",
              "inSeason": [10, 11, 12, 1, 2, 3, 4],
              "name": "Organic red capsicum",
              "qty": "~5/week",
              "options": [
                {
                  "gold": true,
                  "name": "Organic red capsicum"
                }
              ],
              "info": "Plus 2 per cacciatore."
            },
            {
              "id": "red-onion",
              "inSeason": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              "name": "Red onion",
              "qty": "~3/week",
              "options": [
                {
                  "gold": true,
                  "name": "Red onion"
                }
              ],
              "info": "Plus 2 per slow cooker night."
            },
            {
              "id": "carrots",
              "inSeason": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              "name": "Carrots",
              "qty": "~2/week",
              "options": [
                {
                  "gold": true,
                  "name": "Carrots"
                }
              ],
              "info": "Organic, or scrub/peel. Plus 3 per slow cooker chuck and 2 per ragu."
            },
            {
              "id": "garlic",
              "inSeason": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              "name": "Garlic",
              "qty": "1 bulb"
            },
            {
              "id": "dill",
              "name": "Fresh dill",
              "qty": "2 bunches/week"
            },
            {
              "id": "coriander",
              "name": "Fresh coriander",
              "qty": "1 bunch/week",
              "options": [
                {
                  "gold": true,
                  "name": "Fresh coriander"
                }
              ],
              "info": "Pho night."
            },
            {
              "id": "spring-onion",
              "name": "Spring onion",
              "qty": "1 bunch/week"
            },
            {
              "id": "lemons",
              "inSeason": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              "name": "Lemons",
              "qty": "~3/week"
            },
            {
              "id": "limes",
              "name": "Limes",
              "qty": "1/week",
              "options": [
                {
                  "gold": true,
                  "name": "Limes"
                }
              ],
              "info": "Pho night."
            }
          ]
        },
        {
          "id": "drinks",
          "title": "Drinks & broth",
          "items": [
            {
              "id": "orange-juice",
              "name": "Organic cold-pressed orange juice",
              "qty": "3.6 L/week",
              "options": [
                {
                  "gold": true,
                  "name": "Organic cold-pressed OJ, no preservatives, glass"
                }
              ],
              "info": "250 mL/day each."
            },
            {
              "id": "coconut-water",
              "name": "100% pure coconut water",
              "qty": "3.5 L/week",
              "options": [
                {
                  "gold": true,
                  "name": "Raw C Coconut Water"
                },
                {
                  "name": "Other 100% pure coconut water with nothing added"
                }
              ],
              "info": "250 mL/day each."
            },
            {
              "id": "pomegranate-juice",
              "name": "Pure pomegranate juice",
              "qty": "1–2 L/week",
              "options": [
                {
                  "gold": true,
                  "name": "Nuris Organic Wild Pomegranate Juice 1 L (glass, NFC)",
                  "note": "~$7.85 · Coles · coles.com.au"
                },
                {
                  "name": "Biona Organic Pomegranate Juice 1 L (NFC)",
                  "note": "$7.99 · healthnutsaustralia.com.au/products/biona-certified-organic-pomegranate-juice-200ml-or-1l-not-from-concentrate"
                },
                {
                  "name": "Delizum Bio Organic Pomegranate Juice 1 L (glass)",
                  "note": "$11.95 · naturitas.com.au/p/food/drinks/juices/organic-pomegranate-juice-1-l-pomegranate-delizum"
                }
              ],
              "info": "200 mL him, 150 mL her · pure, organic, not from concentrate, no added sugar."
            },
            {
              "id": "tart-cherry",
              "name": "Tart cherry concentrate",
              "qty": "473 mL every ~8 days",
              "options": [
                {
                  "gold": true,
                  "name": "Dynamic Health Organic Tart Cherry Concentrate 473 mL (glass)",
                  "note": "AU$31.24 · iHerb · au.iherb.com/pr/dynamic-health-tart-cherry-concentrate-16-fl-oz-473-ml/130758"
                },
                {
                  "name": "Dr Superfoods Tart Cherry Concentrate 473 mL (100% Montmorency, not certified organic)",
                  "note": "$34.95 · pharmacyonline.com.au/dr-superfoods-tart-cherry-concentrate-473ml"
                }
              ],
              "info": "30 mL each in 250 mL water, evening · organic Montmorency, no added sugar."
            },
            {
              "id": "bone-broth",
              "name": "Beef bone broth paste",
              "qty": "~1 jar every 2 weeks",
              "options": [
                {
                  "gold": true,
                  "name": "Best of the Bone Original beef bone broth concentrate, 390 g (39 mugs)",
                  "note": "$32.99 · code HOLISTICGUT15 · bestofthebone.com"
                }
              ],
              "info": "Morning snack mug each + slow cooker/pho · 1 heaped tsp in 250 mL hot (not boiling) water · refrigerate after opening. ~17 mugs/week for two."
            }
          ]
        },
        {
          "id": "pantry",
          "title": "Pantry, fats & sweeteners",
          "items": [
            {
              "id": "evoo",
              "name": "Australian extra virgin olive oil",
              "qty": "~150 mL/week",
              "options": [
                {
                  "gold": true,
                  "name": "Australian EVOO in dark glass or tin"
                }
              ],
              "info": "Raw only (dressings)."
            },
            {
              "id": "cooking-fat",
              "name": "Beef tallow or ghee",
              "options": [
                {
                  "gold": true,
                  "name": "Beef tallow (Best of the Bone)",
                  "note": "Code HOLISTICGUT15"
                },
                {
                  "name": "Ghee (grass-fed, glass jar)"
                }
              ]
            },
            {
              "id": "passata",
              "name": "Organic tomato passata (glass)",
              "qty": "300 g/week",
              "options": [
                {
                  "gold": true,
                  "name": "Organic tomato passata in glass"
                }
              ],
              "info": "Plus 300 g per slow cooker cacciatore or ragu."
            },
            {
              "id": "raw-honey",
              "name": "Raw Australian honey",
              "qty": "~250 g/week",
              "options": [
                {
                  "gold": true,
                  "name": "Raw Australian organic honey"
                }
              ],
              "info": "Morning snack: Lockie 1 tbsp, Margo 2 tsp."
            },
            {
              "id": "maple-syrup",
              "name": "Pure maple syrup",
              "qty": "~175 g/week",
              "options": [
                {
                  "gold": true,
                  "name": "Pure maple syrup in glass"
                }
              ],
              "info": "Yoghurt bowl."
            },
            {
              "id": "dark-chocolate",
              "name": "Dark chocolate 85%",
              "qty": "~2 × 80 g bars/week",
              "options": [
                {
                  "gold": true,
                  "name": "Alter Eco Organic Classic Blackout 85% (80 g)",
                  "note": "Organic, fair trade · about $8.60–$9.95 · Harris Farm, IGA, health food stores"
                },
                {
                  "name": "Loving Earth Organic 85% (80 g)",
                  "note": "Organic, coconut-nectar sweetened · about $6.90"
                },
                {
                  "name": "Pana Organic dark (85%)",
                  "note": "Organic · Australian-made"
                }
              ],
              "info": "Max 15 g/day Lockie, 10 g Margo, on the yoghurt bowl."
            },
            {
              "id": "ceylon-cinnamon",
              "name": "Ceylon cinnamon",
              "qty": "~30 g/week",
              "options": [
                {
                  "gold": true,
                  "name": "Ceylon cinnamon (not cassia), tested for lead"
                }
              ],
              "info": "Yoghurt bowl · tested brand."
            },
            {
              "id": "salt",
              "name": "Batch-tested salt",
              "options": [
                {
                  "gold": true,
                  "name": "Salt with batch heavy-metal testing"
                }
              ]
            },
            {
              "id": "chewing-gum",
              "name": "Natural chewing gum",
              "options": [
                {
                  "gold": true,
                  "name": "Natural chicle-based gum (no aspartame or artificial colours)"
                },
                {
                  "name": "Xylitol-sweetened natural gum"
                }
              ]
            }
          ]
        },
        {
          "id": "simmer-pot",
          "title": "Simmer pot",
          "items": [
            {
              "id": "simmer-orange",
              "name": "1 orange",
              "qty": "1/week",
              "options": [
                {
                  "gold": true,
                  "name": "Organic orange"
                },
                {
                  "name": "Lemon"
                },
                {
                  "name": "Lime"
                }
              ],
              "info": "Slice and simmer on the stove in a pot of water. Low-tox way to scent the house. Other options: lemon or lime."
            },
            {
              "id": "simmer-cinnamon",
              "name": "Cinnamon sticks",
              "options": [
                {
                  "gold": true,
                  "name": "Organic cinnamon sticks"
                }
              ],
              "info": "For the simmer pot. A pack lasts weeks."
            },
            {
              "id": "simmer-cloves",
              "name": "Whole cloves",
              "options": [
                {
                  "gold": true,
                  "name": "Organic whole cloves"
                }
              ],
              "info": "For the simmer pot. A small jar lasts months."
            },
            {
              "id": "simmer-vanilla",
              "name": "Vanilla extract (pure)",
              "options": [
                {
                  "gold": true,
                  "name": "Pure vanilla extract, no additives"
                }
              ],
              "info": "A splash in the simmer pot. Pure only: no sugar, glycerin or artificial flavour."
            },
            {
              "id": "simmer-rotation",
              "name": "Optional: rosemary, mint, ginger or star anise",
              "options": [
                {
                  "gold": true,
                  "name": "Fresh rosemary"
                },
                {
                  "name": "Fresh mint"
                },
                {
                  "name": "Fresh ginger"
                },
                {
                  "name": "Star anise"
                }
              ],
              "info": "Pick one to rotate scents. Other options: mint, ginger or star anise."
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
                "qty": "5 mL/day",
                "options": [
                  {
                    "gold": true,
                    "name": "Nordic Naturals Arctic Cod Liver Oil, orange, 473 mL · Pharmacy Online",
                    "note": "$87.95 · same product as Charley's list · pharmacyonline.com.au"
                  },
                  {
                    "name": "Nordic Naturals Arctic Cod Liver Oil, orange, 473 mL · Aus Health Nutrition",
                    "note": "$94.55 · Charley's link · Aus Health Nutrition"
                  },
                  {
                    "name": "Nordic Naturals Ultimate Omega, 180 caps",
                    "note": "Capsule backup · $129.95 · 2 softgels/day each with food · 45 days for two · Aus Health Nutrition"
                  }
                ],
                "info": "Shared bottle with Margo (473 mL lasts ~47 days for two). 1 tsp each, morning with Meal 1. Keep refrigerated, use within 3 months, check the lot number on nordic.com."
              },
              {
                "id": "creatine",
                "name": "Creatine monohydrate",
                "qty": "5 g/day",
                "options": [
                  {
                    "gold": true,
                    "name": "Just Creatine micronised monohydrate (200 mesh), 1 kg pouch",
                    "note": "$33.90 · pure, unflavoured, lab-tested · justcreatine.com.au"
                  },
                  {
                    "name": "Protein Supplies Creatine Pure (micronised), 500 g",
                    "note": "$35.96 · Charley's list · code CHARLEY10"
                  },
                  {
                    "name": "VPA Creatine Monohydrate, 1 kg",
                    "note": "$48.00 · NMI tested · vpa.com.au"
                  }
                ],
                "info": "Any time, with water or the yoghurt bowl."
              },
              {
                "id": "vitamin-d3-k2",
                "name": "Vitamin D3 + K2 drops",
                "qty": "2 drops/day",
                "options": [
                  {
                    "gold": true,
                    "name": "Seeking Health D3 + K2 Drops, 30 mL (900 drops ≈ 300 days)",
                    "note": "$41.18 · iHerb AU"
                  }
                ],
                "info": "Shared bottle with Margo. Morning with a fat-containing meal, on food or under the tongue. Max 4 drops/day combined."
              },
              {
                "id": "whey",
                "name": "Unflavoured whey protein",
                "qty": "45 g/day",
                "options": [
                  {
                    "gold": true,
                    "name": "Protein Supplies Australia WPC Pure, Unflavoured, 3 × 1 kg bundle",
                    "note": "$157.39 sale (normally $209.85) · ~$3.41/day for two · choose Unflavoured · flavour with vanilla extract or cinnamon · proteinsuppliesaustralia.com.au"
                  },
                  {
                    "name": "Protein Supplies Australia WPC Pure, Unflavoured, 1 kg",
                    "note": "$69.95 · code CHARLEY10 · proteinsuppliesaustralia.com.au"
                  },
                  {
                    "name": "Chief Grass-fed Whey, Creamy Vanilla, 900 g",
                    "note": "$119.95 · cleanest flavoured (monk fruit, no lecithin) · treat option · wearechief.com"
                  },
                  {
                    "name": "Protein Supplies Australia WPC Vanilla, 1 kg",
                    "note": "$55.96 sale · contains stevia + sunflower lecithin (conflicts with avoid list)"
                  },
                  {
                    "name": "Professional Whey isolate, unflavoured",
                    "note": "Code HGH5"
                  }
                ],
                "info": "Shared tub with Margo. About 460 g/week for two (~3 kg every 6–7 weeks). Flavour with vanilla extract or cinnamon."
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
                "qty": "5 mL/day",
                "options": [
                  {
                    "gold": true,
                    "name": "Nordic Naturals Arctic Cod Liver Oil, orange, 473 mL · Pharmacy Online",
                    "note": "$87.95 · same product as Charley's list · pharmacyonline.com.au"
                  },
                  {
                    "name": "Nordic Naturals Arctic Cod Liver Oil, orange, 473 mL · Aus Health Nutrition",
                    "note": "$94.55 · Charley's link · Aus Health Nutrition"
                  },
                  {
                    "name": "Nordic Naturals Ultimate Omega, 180 caps",
                    "note": "Capsule backup · $129.95 · 2 softgels/day each with food · 45 days for two · Aus Health Nutrition"
                  }
                ],
                "info": "Shared bottle with Margo (473 mL lasts ~47 days for two). 1 tsp each, morning with Meal 1. Keep refrigerated, use within 3 months, check the lot number on nordic.com."
              },
              {
                "id": "m-vitamin-d3-k2",
                "name": "Vitamin D3 + K2 drops",
                "qty": "1 drop/day",
                "options": [
                  {
                    "gold": true,
                    "name": "Seeking Health D3 + K2 Drops, 30 mL (900 drops ≈ 300 days)",
                    "note": "$41.18 · iHerb AU"
                  }
                ],
                "info": "Shared bottle with Margo. Morning with a fat-containing meal, on food or under the tongue. Max 4 drops/day combined."
              },
              {
                "id": "m-whey",
                "name": "Unflavoured whey protein",
                "qty": "20 g/day",
                "options": [
                  {
                    "gold": true,
                    "name": "Protein Supplies Australia WPC Pure, Unflavoured, 3 × 1 kg bundle",
                    "note": "$157.39 sale (normally $209.85) · ~$3.41/day for two · choose Unflavoured · flavour with vanilla extract or cinnamon · proteinsuppliesaustralia.com.au"
                  },
                  {
                    "name": "Protein Supplies Australia WPC Pure, Unflavoured, 1 kg",
                    "note": "$69.95 · code CHARLEY10 · proteinsuppliesaustralia.com.au"
                  },
                  {
                    "name": "Chief Grass-fed Whey, Creamy Vanilla, 900 g",
                    "note": "$119.95 · cleanest flavoured (monk fruit, no lecithin) · treat option · wearechief.com"
                  },
                  {
                    "name": "Protein Supplies Australia WPC Vanilla, 1 kg",
                    "note": "$55.96 sale · contains stevia + sunflower lecithin (conflicts with avoid list)"
                  },
                  {
                    "name": "Professional Whey isolate, unflavoured",
                    "note": "Code HGH5"
                  }
                ],
                "info": "Shared tub with Margo. About 460 g/week for two (~3 kg every 6–7 weeks). Flavour with vanilla extract or cinnamon."
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
                "name": "Face moisturiser",
                "options": [
                  {
                    "gold": true,
                    "name": "MooGoo Full Cream Moisturiser (daily)",
                    "buy": [{"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/109383/moogoo-natural-full-cream-moisturiser-120g", "type": "in-store + online"}, {"store": "MooGoo (brand site)", "url": "https://moogoo.com.au/products/full-cream-moisturiser", "type": "online"}, {"store": "Priceline", "url": "https://www.priceline.com.au/brand/moogoo", "type": "in-store + online"}, {"store": "Healthy Bee (health food)", "url": "https://healthybee.com.au/product-detail.php?pd=moogoo-full-cream-moisturiser", "type": "in-store + online"}]
                  },
                  {
                    "name": "The Ordinary Natural Moisturizing Factors + HA (light, hot days)",
                    "buy": [{"store": "Adore Beauty", "url": "https://www.adorebeauty.com.au/b/the-ordinary.html", "type": "online"}, {"store": "Sephora", "url": "https://www.sephora.com.au/brands/the-ordinary", "type": "in-store + online"}, {"store": "Priceline", "url": "https://www.priceline.com.au/beauty/the-ordinary-product-guide", "type": "in-store + online"}]
                  }
                ]
              },
              {
                "id": "care-face-cleanser",
                "name": "Face cleanser",
                "options": [
                  {
                    "gold": true,
                    "name": "MooGoo creamy cleanser (blue bottle, daily)",
                    "buy": [{"store": "MooGoo (brand site)", "url": "https://moogoo.com.au/products/creamy-hydrating-face-cleanser-250ml", "type": "online"}, {"store": "Priceline", "url": "https://www.priceline.com.au/brand/moogoo", "type": "in-store + online"}]
                  },
                  {
                    "gold": true,
                    "name": "The Ordinary Squalane Cleanser (heavy-sunscreen nights)",
                    "buy": [{"store": "Adore Beauty", "url": "https://www.adorebeauty.com.au/p/the-ordinary/the-ordinary-squalane-cleanser-150ml.html", "type": "online"}, {"store": "Sephora", "url": "https://www.sephora.com.au/brands/the-ordinary/skincare/cleanser-and-exfoliator", "type": "in-store + online"}, {"store": "Myer", "url": "https://www.myer.com.au/p/the-ordinary-squalane-cleanser-50ml", "type": "in-store + online"}, {"store": "Lookfantastic", "url": "https://lookfantastic.com.au/products/the-ordinary-squalane-cleanser-150ml", "type": "online"}, {"store": "The Ordinary (brand site)", "url": "https://theordinary.com/en-au/squalane-cleanser-face-cleanser-100613.html", "type": "online"}]
                  }
                ]
              },
              {
                "id": "care-body-moisturiser",
                "name": "Body moisturiser",
                "options": [
                  {
                    "gold": true,
                    "name": "MooGoo Full Cream Moisturiser (daily)",
                    "buy": [{"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/109383/moogoo-natural-full-cream-moisturiser-120g", "type": "in-store + online"}, {"store": "MooGoo (brand site)", "url": "https://moogoo.com.au/products/full-cream-moisturiser", "type": "online"}, {"store": "Priceline", "url": "https://www.priceline.com.au/brand/moogoo", "type": "in-store + online"}, {"store": "Healthy Bee (health food)", "url": "https://healthybee.com.au/product-detail.php?pd=moogoo-full-cream-moisturiser", "type": "in-store + online"}]
                  },
                  {
                    "name": "The Ordinary Natural Moisturizing Factors + Inulin (light, hot days)",
                    "buy": [{"store": "Adore Beauty", "url": "https://www.adorebeauty.com.au/b/the-ordinary.html", "type": "online"}, {"store": "Sephora", "url": "https://www.sephora.com.au/brands/the-ordinary", "type": "in-store + online"}, {"store": "The Ordinary (brand site)", "url": "https://theordinary.com/en-au/", "type": "online"}]
                  }
                ]
              },
              {
                "id": "care-body-wash",
                "name": "Body wash",
                "options": [
                  {
                    "gold": true,
                    "name": "Thankyou Lemon Myrtle & Oat Milk",
                    "buy": [{"store": "Woolworths", "url": "https://www.woolworths.com.au/shop/productdetails/303986/thankyou-body-wash-botanical-lemon-myrtle-oat-milk-pump", "type": "in-store + online"}, {"store": "Coles", "url": "https://shophop.au/product/14834", "type": "in-store + online"}, {"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/128095/thankyou-body-wash-botanical-lemon-myrtle-oat-milk-1l", "type": "in-store + online"}]
                  },
                  {
                    "name": "Sukin",
                    "buy": [{"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/64425/sukin-signature-botanical-body-wash-500ml", "type": "in-store + online"}, {"store": "Woolworths", "url": "https://www.woolworths.com.au/shop/productdetails/147400/sukin-signature-botanical-body-wash", "type": "in-store + online"}, {"store": "Discount Chemist", "url": "https://discountchemist.com.au/sukin-botanical-body-wash-500ml/", "type": "online"}]
                  }
                ]
              },
              {
                "id": "care-hand-wash",
                "name": "Hand wash",
                "options": [
                  {
                    "gold": true,
                    "name": "Thankyou Lemon Myrtle & Oat Milk Hand & Body Wash 1 L refill",
                    "buy": [{"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/128101/thankyou-hand-body-wash-botanical-lemon-myrtle-oat-milk-refill-1l", "type": "in-store + online"}, {"store": "Woolworths", "url": "https://shophop.au/product/14834", "type": "in-store + online"}, {"store": "Coles", "url": "https://shophop.au/product/14834", "type": "in-store + online"}]
                  },
                  {
                    "name": "ecostore Ultra Sensitive Hand Wash",
                    "buy": [{"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/138806/ecostore-ultra-sensitive-hand-wash-300ml", "type": "in-store + online"}, {"store": "Go Eco Store", "url": "https://www.goecostore.com.au/products/copy-of-hand-wash-rose-geranium-425ml-2", "type": "online"}, {"store": "IGA (some stores)", "url": "https://igacorowa.myfoodlink.com/lines/ecostore-h-wash-ultra-sens-425ml", "type": "in-store"}]
                  }
                ]
              },
              {
                "id": "care-shampoo",
                "name": "Shampoo",
                "options": [
                  {
                    "gold": true,
                    "name": "MooGoo Milk Shampoo",
                    "buy": [{"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/110285/moogoo-natural-milk-shampoo-500ml", "type": "in-store + online"}, {"store": "MooGoo (brand site)", "url": "https://moogoo.com.au/", "type": "online"}]
                  }
                ]
              },
              {
                "id": "care-conditioner",
                "name": "Conditioner",
                "options": [
                  {
                    "gold": true,
                    "name": "MooGoo Cream Conditioner",
                    "buy": [{"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/110283/moogoo-natural-cream-conditioner-500ml", "type": "in-store + online"}, {"store": "MooGoo (brand site)", "url": "https://moogoo.com.au/", "type": "online"}]
                  }
                ]
              },
              {
                "id": "care-hair-styling",
                "name": "Hair styling",
                "options": [
                  {
                    "gold": true,
                    "name": "PrimalPantry Tallow Hair Clay (trialling)",
                    "buy": [{"store": "PrimalPantry (brand site, ships from NZ)", "url": "https://primalpantry.com.au/products/tallow-hair-clay", "type": "online"}]
                  }
                ]
              },
              {
                "id": "care-toothbrush",
                "name": "Toothbrush",
                "options": [
                  {
                    "gold": true,
                    "name": "Toxin Dodger soft horsehair toothbrush",
                    "buy": [{"store": "Toxin Dodger", "url": "https://toxindodger.com/products/boar-bristle-toothbrush", "type": "online"}]
                  }
                ]
              },
              {
                "id": "care-dental-floss",
                "name": "Dental floss",
                "options": [
                  {
                    "gold": true,
                    "name": "Toxin Dodger silk floss",
                    "buy": [{"store": "Toxin Dodger", "url": "https://toxindodger.com/products/zero-plastic-silk-floss", "type": "online"}]
                  },
                  {
                    "name": "Turtle Tribe silk floss",
                    "buy": [{"store": "The Turtle Tribe (brand site)", "url": "https://theturtletribe.com.au/products/the-turtle-tribe-silk-floss-30m", "type": "online"}, {"store": "Clean & Pure", "url": "https://cleanandpure.com.au/products/the-turtle-tribe-silk-floss-30m", "type": "online"}, {"store": "The Wellness Grove", "url": "https://www.thewellnessgrove.com.au/product/ttt-dental-floss-silk-mint-flavour-30m/HSVMTJ7WF4SVD4JW7SQ4NAAF", "type": "in-store + online"}]
                  },
                  {
                    "name": "RADIUS Pure Silk",
                    "buy": [{"store": "Amazon AU", "url": "https://www.amazon.com.au/Radius-Natural-Biodegradable-Silk-Floss/dp/B001BBNS7E", "type": "online"}]
                  }
                ]
              },
              {
                "id": "care-toothpaste",
                "name": "Toothpaste",
                "options": [
                  {
                    "gold": true,
                    "name": "Grants hydroxyapatite whitening",
                    "buy": [{"store": "Woolworths", "url": "https://www.woolworths.com.au/shop/productdetails/6055328/grants-whitening-ha-toothpaste", "type": "in-store + online"}, {"store": "BIG W (Healthylife)", "url": "https://www.bigw.com.au/product/grants-whitening-with-ha-natural-toothpaste-110g/p/9900713014", "type": "online"}, {"store": "Norwood Health Foods", "url": "https://norwoodhealthfoods.com.au/product/grants-whitening-ha-natural-toothpaste-110g/", "type": "in-store + online"}]
                  },
                  {
                    "name": "MooGoo hydroxyapatite",
                    "buy": [{"store": "MooGoo (brand site)", "url": "https://moogoo.com.au/products/natural-toothpaste-fluoride-free-100g", "type": "online"}, {"store": "Chemist Direct", "url": "https://www.chemistdirect.com.au/moogoo-moothpaste-fluoride-free-100g", "type": "online"}, {"store": "Pharmacy Online", "url": "https://www.pharmacyonline.com.au/moogoo-moothpaste-fluoride-free-100g", "type": "online"}]
                  },
                  {
                    "name": "Grin Pro Enamel Care + Nano-Hydroxyapatite",
                    "buy": [{"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/150635/grin-toothpaste-pro-enamel-care-nano-hydroxyapatite-fluoride-free-113g", "type": "in-store + online"}, {"store": "Woolworths (online, Healthylife)", "url": "https://www.woolworths.com.au/shop/productdetails/1123912387/grin-pro-enamel-care-toothpaste-with-nano-hydroxyapatite-113g", "type": "online"}, {"store": "Healthylife", "url": "https://www.healthylife.com.au/products/grin-pro-enamel-care-toothpaste-with-nano-hydroxyapatite-113g", "type": "online"}, {"store": "Clean Nectarine", "url": "https://cleannectarine.com.au/products/grin-pro-toothpaste-enamel-care-with-nano-hydroxyapatite", "type": "online"}]
                  },
                  {
                    "name": "Red Seal Baking Soda + Hydroxyapatite",
                    "buy": [{"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/164219/red-seal-toothpaste-baking-soda-ha-100g", "type": "in-store + online"}, {"store": "Red Seal (brand site)", "url": "https://www.redseal.global/au/our-products/oral-care/red-seal-baking-soda-hydroxyapatite-toothpaste-100g/", "type": "online"}]
                  }
                ]
              },
              {
                "id": "care-deodorant",
                "name": "Deodorant",
                "options": [
                  {
                    "gold": true,
                    "name": "1. MooGoo Sensitive & Fragrance-Free (daily; all MooGoo deodorants OK)",
                    "note": "Cleanest: no fragrance, no bicarb",
                    "buy": [{"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/124267/moogoo-natural-fresh-cream-deodorant-sensitive-60ml", "type": "in-store + online"}, {"store": "Woolworths (online)", "url": "https://www.woolworths.com.au/shop/productdetails/1118255595/moogoo-fresh-cream-deodorant-sensitive-60ml", "type": "online"}, {"store": "MooGoo (brand site)", "url": "https://moogoo.com.au/products/deodorant-sensitive-60ml", "type": "online"}, {"store": "OzHerbs", "url": "https://ozherbs.com.au/products/moogoo-deodorant-sensitive-60ml", "type": "online"}]
                  },
                  {
                    "name": "2. Woohoo Mellow or Tango (no bicarb)",
                    "note": "Get Mellow (no bicarb, no scent) or Tango",
                    "buy": [{"store": "Chemist Direct", "url": "https://www.chemistdirect.com.au/brands/woohoo", "type": "online"}, {"store": "Woohoo (brand site + stockist map)", "url": "https://www.woohoobody.com.au/pages/stockists", "type": "online"}]
                  },
                  {
                    "name": "3. TEST by XVLABS",
                    "note": "Only 3 essential oils, simple",
                    "buy": [{"store": "TEST by XVLABS (brand site)", "url": "https://testbyxvlabs.com/products/test-deodorant", "type": "online"}]
                  },
                  {
                    "name": "4. Tuttofare",
                    "note": "Tallow + bicarb, 2 oils",
                    "buy": [{"store": "Clean Nectarine", "url": "https://cleannectarine.com.au/products/tuttofare-natural-deodorant", "type": "online"}, {"store": "Natural Supply Co (Geelong)", "url": "https://naturalsupplyco.com/products/tuttofare-natural-deodorant", "type": "in-store + online"}, {"store": "Heartwood (WA)", "url": "https://heartwoodco.com.au/collections/tuttofare/deodorant", "type": "in-store + online"}]
                  },
                  {
                    "name": "5. KIND-LY Lime & Frankincense (Chemist Warehouse)",
                    "note": "Bicarb-heavy, 4 citrus/herb oils",
                    "buy": [{"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/100291/kind-ly-natural-deodorant-lime-frankincense", "type": "in-store + online"}, {"store": "KIND-LY (brand site)", "url": "https://kind-ly.com.au/products/lime-frankincense-natural-deodorant", "type": "online"}, {"store": "Amama", "url": "https://www.amama.com.au/kind-ly-natural-deodorant-lime-frankincense", "type": "online"}]
                  },
                  {
                    "name": "6. Noosa Basics",
                    "note": "Bicarb + benzyl alcohol, 4 oils",
                    "buy": [{"store": "Priceline", "url": "https://www.priceline.com.au/brand/noosa-basics", "type": "in-store + online"}, {"store": "Woolworths (online, Healthylife)", "url": "https://www.woolworths.com.au/shop/productdetails/1122404359", "type": "online"}, {"store": "Noosa Basics (brand site)", "url": "https://www.noosabasics.com/", "type": "online"}]
                  },
                  {
                    "name": "7. Two Dudes (Woolies)",
                    "note": "Bicarb + vague 'fragrance'",
                    "buy": [{"store": "Woolworths", "url": "https://shophop.au/product/564799", "type": "in-store + online"}, {"store": "Two Dudes (brand site)", "url": "https://twodudesproject.com/products/deodorant", "type": "online"}]
                  },
                  {
                    "name": "8. Patricks ND1",
                    "note": "Undisclosed fragrance + allergens",
                    "buy": [{"store": "Patricks (brand site)", "url": "https://www.patricks.com.au/products/travel-nd1-natural-deodorant-32g-copy", "type": "online"}, {"store": "David Jones", "url": "https://www.davidjones.com/product/patricks-nd1-%60-natural-deodorant-75g-25853671", "type": "in-store + online"}, {"store": "NOAH (Melbourne)", "url": "https://noah.com.au/products/patricks-nd1-natural-deodorant-75g", "type": "in-store + online"}]
                  }
                ]
              }
            ]
          },
          {
            "id": "care-optional",
            "title": "Optional",
            "items": [
              {
                "id": "care-opt-the-ordinary-multi-peptide-copper-peptid",
                "name": "Peptide serum",
                "options": [
                  {
                    "gold": true,
                    "name": "The Ordinary Multi-Peptide + Copper Peptides",
                    "buy": [{"store": "The Ordinary (brand site)", "url": "https://theordinary.com/en-au/multi-peptide-copper-peptides-1-serum-769915233179.html", "type": "online"}, {"store": "Adore Beauty", "url": "https://www.adorebeauty.com.au/b/the-ordinary.html", "type": "online"}, {"store": "Sephora", "url": "https://www.sephora.com.au/brands/the-ordinary", "type": "in-store + online"}]
                  }
                ]
              },
              {
                "id": "care-opt-the-ordinary-squalane",
                "name": "Squalane",
                "options": [
                  {
                    "gold": true,
                    "name": "The Ordinary squalane",
                    "buy": [{"store": "The Ordinary (brand site)", "url": "https://theordinary.com/en-au/100-plant-derived-squalane-face-oil-100398.html", "type": "online"}, {"store": "Adore Beauty", "url": "https://www.adorebeauty.com.au/b/the-ordinary.html", "type": "online"}, {"store": "Sephora", "url": "https://www.sephora.com.au/brands/the-ordinary", "type": "in-store + online"}]
                  }
                ]
              },
              {
                "id": "care-opt-sylvawell-fragrance",
                "name": "Natural fragrance (later)",
                "options": [
                  {
                    "gold": true,
                    "name": "Sylvawell Discovery Set ($59), test Sanctum or Sylva first",
                    "buy": [{"store": "Sylvawell (brand site)", "url": "https://sylvawell.com/products/discovery-set", "type": "online"}]
                  }
                ]
              },
              {
                "id": "care-opt-lactic-acid",
                "name": "Lactic acid (keratosis pilaris)",
                "options": [
                  {
                    "gold": true,
                    "name": "The Ordinary Lactic Acid 5% + HA",
                    "buy": [{"store": "The Ordinary (brand site)", "url": "https://theordinary.com/en-au/lactic-acid-5-ha-exfoliator-100427.html", "type": "online"}, {"store": "Adore Beauty", "url": "https://www.adorebeauty.com.au/b/the-ordinary.html", "type": "online"}, {"store": "Sephora", "url": "https://www.sephora.com.au/brands/the-ordinary", "type": "in-store + online"}]
                  }
                ]
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
                "name": "Body wash",
                "options": [
                  {
                    "gold": true,
                    "name": "Thankyou Lemon Myrtle & Oat Milk",
                    "buy": [{"store": "Woolworths", "url": "https://www.woolworths.com.au/shop/productdetails/303986/thankyou-body-wash-botanical-lemon-myrtle-oat-milk-pump", "type": "in-store + online"}, {"store": "Coles", "url": "https://shophop.au/product/14834", "type": "in-store + online"}, {"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/128095/thankyou-body-wash-botanical-lemon-myrtle-oat-milk-1l", "type": "in-store + online"}]
                  },
                  {
                    "name": "Sukin",
                    "buy": [{"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/64425/sukin-signature-botanical-body-wash-500ml", "type": "in-store + online"}, {"store": "Woolworths", "url": "https://www.woolworths.com.au/shop/productdetails/147400/sukin-signature-botanical-body-wash", "type": "in-store + online"}, {"store": "Discount Chemist", "url": "https://discountchemist.com.au/sukin-botanical-body-wash-500ml/", "type": "online"}]
                  }
                ],
                "info": "Shared with Lockie."
              },
              {
                "id": "m-care-hand-wash",
                "name": "Hand wash",
                "options": [
                  {
                    "gold": true,
                    "name": "Thankyou Lemon Myrtle & Oat Milk Hand & Body Wash 1 L refill",
                    "buy": [{"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/128101/thankyou-hand-body-wash-botanical-lemon-myrtle-oat-milk-refill-1l", "type": "in-store + online"}, {"store": "Woolworths", "url": "https://shophop.au/product/14834", "type": "in-store + online"}, {"store": "Coles", "url": "https://shophop.au/product/14834", "type": "in-store + online"}]
                  },
                  {
                    "name": "ecostore Ultra Sensitive Hand Wash",
                    "buy": [{"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/138806/ecostore-ultra-sensitive-hand-wash-300ml", "type": "in-store + online"}, {"store": "Go Eco Store", "url": "https://www.goecostore.com.au/products/copy-of-hand-wash-rose-geranium-425ml-2", "type": "online"}, {"store": "IGA (some stores)", "url": "https://igacorowa.myfoodlink.com/lines/ecostore-h-wash-ultra-sens-425ml", "type": "in-store"}]
                  }
                ],
                "info": "Shared with Lockie."
              },
              {
                "id": "m-care-toothpaste",
                "name": "Toothpaste",
                "options": [
                  {
                    "gold": true,
                    "name": "Grants hydroxyapatite whitening",
                    "buy": [{"store": "Woolworths", "url": "https://www.woolworths.com.au/shop/productdetails/6055328/grants-whitening-ha-toothpaste", "type": "in-store + online"}, {"store": "BIG W (Healthylife)", "url": "https://www.bigw.com.au/product/grants-whitening-with-ha-natural-toothpaste-110g/p/9900713014", "type": "online"}, {"store": "Norwood Health Foods", "url": "https://norwoodhealthfoods.com.au/product/grants-whitening-ha-natural-toothpaste-110g/", "type": "in-store + online"}]
                  },
                  {
                    "name": "MooGoo hydroxyapatite",
                    "buy": [{"store": "MooGoo (brand site)", "url": "https://moogoo.com.au/products/natural-toothpaste-fluoride-free-100g", "type": "online"}, {"store": "Chemist Direct", "url": "https://www.chemistdirect.com.au/moogoo-moothpaste-fluoride-free-100g", "type": "online"}, {"store": "Pharmacy Online", "url": "https://www.pharmacyonline.com.au/moogoo-moothpaste-fluoride-free-100g", "type": "online"}]
                  },
                  {
                    "name": "Grin Pro Enamel Care + Nano-Hydroxyapatite",
                    "buy": [{"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/150635/grin-toothpaste-pro-enamel-care-nano-hydroxyapatite-fluoride-free-113g", "type": "in-store + online"}, {"store": "Woolworths (online, Healthylife)", "url": "https://www.woolworths.com.au/shop/productdetails/1123912387/grin-pro-enamel-care-toothpaste-with-nano-hydroxyapatite-113g", "type": "online"}, {"store": "Healthylife", "url": "https://www.healthylife.com.au/products/grin-pro-enamel-care-toothpaste-with-nano-hydroxyapatite-113g", "type": "online"}, {"store": "Clean Nectarine", "url": "https://cleannectarine.com.au/products/grin-pro-toothpaste-enamel-care-with-nano-hydroxyapatite", "type": "online"}]
                  },
                  {
                    "name": "Red Seal Baking Soda + Hydroxyapatite",
                    "buy": [{"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/164219/red-seal-toothpaste-baking-soda-ha-100g", "type": "in-store + online"}, {"store": "Red Seal (brand site)", "url": "https://www.redseal.global/au/our-products/oral-care/red-seal-baking-soda-hydroxyapatite-toothpaste-100g/", "type": "online"}]
                  }
                ],
                "info": "Shared with Lockie."
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
      "sections": [
        {
          "id": "cleaning-main",
          "items": [
            {
              "id": "clean-general-surfaces-kitchen",
              "name": "General surfaces/kitchen",
              "options": [
                {
                  "gold": true,
                  "name": "Koh Universal Cleaner",
                  "buy": [{"store": "Woolworths", "url": "https://www.woolworths.com.au/shop/productdetails/907520/koh-universal-cleaner", "type": "in-store + online"}, {"store": "Amazon AU", "url": "https://www.amazon.com.au/Koh-Universal-Cleaner-2-Ingredient-Multi-Purpose/dp/B0DNP29X63", "type": "online"}, {"store": "Koh (store list)", "url": "https://help.koh.com/en-US/koh-in-store-stockists-738159", "type": "online"}]
                },
                {
                  "name": "ecostore Ultra Sensitive Multi-Purpose",
                  "buy": [{"store": "ecostore (brand site)", "url": "https://ecostore.com/en-au/products/ultra-sensitive-multi-purpose-cleaner-500ml", "type": "online"}, {"store": "Nourished Life", "url": "https://www.nourishedlife.com.au/products/ecostore-multi-purpose-cleaner-ultra-sensitive", "type": "online"}, {"store": "Go Eco Store", "url": "https://www.goecostore.com.au/products/copy-of-multi-purpose-kitchen-cleaner-orange-thyme-500ml", "type": "online"}]
                }
              ]
            },
            {
              "id": "clean-targeted-disinfection",
              "name": "Targeted disinfection",
              "options": [
                {
                  "gold": true,
                  "name": "Hydro-E HOCl Hospital Grade Disinfectant",
                  "buy": [{"store": "Hydro-E (brand site)", "url": "https://www.hydro-e.com.au/products/hydro-e-hocl-hospital-grade-disinfectant-500ml-trigger-spray", "type": "online"}, {"store": "Enviro Chemicals", "url": "https://envirochemicals.com.au/product/hydro-e/", "type": "online"}, {"store": "Majac Medical", "url": "https://majacmedical.com.au/products/hydro-e-natural-hospital-grade-disinfectant-non-toxic/", "type": "online"}]
                }
              ]
            },
            {
              "id": "clean-laundry-detergent",
              "name": "Laundry detergent",
              "options": [
                {
                  "gold": true,
                  "name": "Resparkle Fragrance-Free Laundry Powder",
                  "buy": [{"store": "Resparkle (brand site, online only)", "url": "https://resparkle.com.au/products/natural-laundry-powder", "type": "online"}]
                },
                {
                  "name": "Herbon Fragrance-Free",
                  "buy": [{"store": "Herbon (brand site + store locator)", "url": "https://herbon.com.au/", "type": "online"}, {"store": "Cleaners Gallery", "url": "https://cleanersgallery.com.au/products/herbon-laundry-liquid-fragrance-free-1-25-lt-2lt-20lt", "type": "online"}, {"store": "Michael's Chemist", "url": "https://michaelschemist.com.au/products/herbon-laundry-liquid-fragrance-free-125l", "type": "online"}, {"store": "IGA (some stores)", "type": "in-store"}]
                },
                {
                  "name": "Abode Zero Laundry Powder",
                  "buy": [{"store": "Woolworths (online, Healthylife)", "url": "https://www.woolworths.com.au/shop/productdetails/1122172663/abode-laundry-powder-zero-1kg", "type": "online"}, {"store": "BIG W (online)", "url": "https://www.bigw.com.au/product/abode-laundry-powder-zero-1kg/p/9900694629", "type": "online"}]
                }
              ]
            },
            {
              "id": "clean-laundry-soaker-stain",
              "name": "Laundry soaker/stain",
              "options": [
                {
                  "gold": true,
                  "name": "Hudstone Soaker",
                  "buy": [{"store": "Hudstone (brand site)", "url": "https://hudstonehome.com/products/hudstone-pre-soaker-2kg-80-soaks-per-bag", "type": "online"}, {"store": "Hudstone refill (Taren Point NSW)", "url": "https://hudstonehome.com/pages/refill", "type": "in-store"}]
                },
                {
                  "name": "Kin Kin Laundry Soaker",
                  "buy": [{"store": "Shop Naturally", "url": "https://www.shopnaturally.com.au/product/kinkin-laundry-soaker/", "type": "online"}, {"store": "Market Organics", "url": "https://shop.marketorganics.com.au/lines/kin-kin-naturals-laundry-soaker-stain-rem-lime-euc-1-2kg-1g", "type": "online"}]
                },
                {
                  "name": "MiEco sodium percarbonate",
                  "buy": [{"store": "MiEco (brand site)", "url": "https://mieco.com.au/product/mieco-oxygen-bleach-900g/", "type": "online"}, {"store": "Santos Organics", "url": "https://santosorganics.com.au/products/oxygen-bleach-900g-mieco", "type": "in-store + online"}, {"store": "Earth Wholefoods", "url": "https://earthwholefood.com.au/product/mieco-oxygen-bleach-900g/", "type": "in-store + online"}, {"store": "Manna Wholefoods (WA)", "url": "https://shop.mannawholefoods.com.au/lines/mieco-oxygen-bleach-900g", "type": "in-store + online"}]
                }
              ]
            },
            {
              "id": "clean-dishwasher",
              "name": "Dishwasher",
              "options": [
                {
                  "gold": true,
                  "name": "Hudstone Dishwashing Powder",
                  "buy": [{"store": "Hudstone (brand site)", "url": "https://hudstonehome.com/products/dishwashing-powder", "type": "online"}, {"store": "The Fill Market", "url": "https://www.thefillmarket.com/brands/hudstone-cleaning-products", "type": "online"}]
                },
                {
                  "name": "Kin Kin Dishwasher Powder",
                  "buy": [{"store": "Woolworths (online, Healthylife)", "url": "https://www.woolworths.com.au/shop/productdetails/1122347493", "type": "online"}, {"store": "BIG W (online)", "url": "https://www.bigw.com.au/product/kin-kin-naturals-eco-dishwash-powder-lime-and-lemon-myrtle-2-5kg/p/9900695196", "type": "online"}]
                }
              ]
            },
            {
              "id": "clean-hand-dishwashing",
              "name": "Hand dishwashing",
              "options": [
                {
                  "gold": true,
                  "name": "Earth Choice Sensitive Concentrated",
                  "buy": [{"store": "Earth Choice (brand site)", "url": "https://earthchoice.com.au/products/sensitive-concentrated-dishwashing-liquid-500ml", "type": "online"}, {"store": "IGA", "url": "https://www.igashop.com.au/product/earth-choice-concentrated-dishwashing-liquid-sensitive-180000007371", "type": "in-store + online"}, {"store": "Chemist Warehouse", "type": "in-store + online"}]
                },
                {
                  "name": "ecostore Ultra Sensitive Dish",
                  "buy": [{"store": "Woolworths", "url": "https://www.woolworths.com.au/shop/productdetails/742382/ecostore-dish-liquid-ultrasensitive", "type": "in-store + online"}, {"store": "ecostore (brand site)", "url": "https://ecostore.com/en-au/products/ultra-sensitive-dish-liquid-500ml", "type": "online"}]
                },
                {
                  "name": "Abode Zero Dish Liquid",
                  "buy": [{"store": "Woolworths (online, Healthylife)", "url": "https://www.woolworths.com.au/shop/productdetails/1122169583/abode-dishwashing-liquid-concentrate-zero", "type": "online"}]
                }
              ]
            },
            {
              "id": "clean-bathroom",
              "name": "Bathroom",
              "options": [
                {
                  "gold": true,
                  "name": "SimplyClean HealthyClean Bathroom",
                  "buy": [{"store": "SimplyClean (brand site)", "url": "https://www.simplyclean.com.au/products/healthyclean-bathroom-500ml", "type": "online"}, {"store": "BIG W", "url": "https://www.bigw.com.au/product/simplyclean-healthyclean-bathroom-500ml/p/9906759408", "type": "online"}, {"store": "Vitalia", "url": "https://www.vitalia.com.au/simply-clean-Healthy-Clean-Bathroom-500ml", "type": "online"}, {"store": "Your Health Store", "url": "https://www.yourhealthstore.net.au/simply-clean-healthy-clean-bathroom-500ml", "type": "in-store + online"}]
                },
                {
                  "name": "ecostore Bathroom Concentrate",
                  "buy": [{"store": "Woolworths", "url": "https://www.woolworths.com.au/shop/productdetails/162051/ecostore-bathroom-shower-cleaner-refill-concentrate", "type": "in-store + online"}, {"store": "ecostore (brand site)", "url": "https://ecostore.com/en-au/products/bathroom-shower-cleaner-refill-concentrate-50ml", "type": "online"}, {"store": "Flora & Fauna", "url": "https://www.floraandfauna.com.au/products/ecostore-bathroom-shower-cleaner-citrus", "type": "online"}]
                }
              ]
            },
            {
              "id": "clean-toilet",
              "name": "Toilet",
              "options": [
                {
                  "gold": true,
                  "name": "Abode Rosemary & Mint Toilet Gel",
                  "buy": [{"store": "Healthylife (also via Woolworths online)", "url": "https://www.healthylife.com.au/products/abode-toilet-gel-rosemary-mint-750ml", "type": "online"}, {"store": "BIG W (online)", "url": "https://www.bigw.com.au/product/abode-toilet-gel-rosemary-mint/p/9904185922", "type": "online"}]
                }
              ]
            },
            {
              "id": "clean-mould",
              "name": "Mould",
              "options": [
                {
                  "gold": true,
                  "name": "SimplyClean Simply NO Mould",
                  "buy": [{"store": "SimplyClean (brand site)", "url": "https://www.simplyclean.com.au/", "type": "online"}, {"store": "Woolworths", "type": "online"}, {"store": "Amazon AU", "type": "online"}, {"store": "Nourished Life", "type": "online"}]
                }
              ]
            },
            {
              "id": "clean-descaling",
              "name": "Descaling",
              "options": [
                {
                  "gold": true,
                  "name": "Citric acid (any brand)",
                  "buy": [{"store": "Woolworths", "url": "https://www.woolworths.com.au/shop/productdetails/344/mckenzies-acid-citric", "type": "in-store + online"}, {"store": "Coles", "url": "https://www.grocerize.com.au/product/7471437054035/mckenzie-s-citric-acid-75g", "type": "in-store + online"}]
                }
              ]
            },
            {
              "id": "clean-multipurpose-wipes",
              "name": "Multipurpose wipes",
              "options": [
                {
                  "gold": true,
                  "name": "CleanLIFE Surface Vinegar Wipes (trial)",
                  "buy": [{"store": "Chemist Warehouse", "url": "https://www.chemistwarehouse.com.au/buy/163550/cleanlife-surface-vinegar-wipes-100-pack", "type": "in-store + online"}, {"store": "Officeworks", "url": "https://www.officeworks.com.au/shop/officeworks/p/cleanlife-vinegar-cleaning-wipes-100-pack-mhcls00105", "type": "in-store + online"}, {"store": "Harris Farm", "url": "https://www.harrisfarm.com.au/products/clife-surface-biodegradable-vinegar-wipes-x100-100631", "type": "in-store + online"}, {"store": "CleanLIFE (store list)", "url": "https://cleanlife.com.au/stockists/", "type": "online"}]
                }
              ]
            },
            {
              "id": "clean-hand-sanitiser",
              "name": "Hand sanitiser",
              "options": [
                {
                  "gold": true,
                  "name": "PURELL Antiseptic Hand Foam 72%",
                  "buy": [{"store": "RapidClean Gold Coast", "url": "https://rapidgc.com.au/products/prod-5791-04-aus00", "type": "in-store + online"}, {"store": "Sydney Cleaning Supplies", "url": "https://sydneycleaningsupplies.com.au/shop/chemicals/hand-sanitiser/purell-antiseptic-hand-foam-535ml/", "type": "online"}, {"store": "Hanleys", "url": "https://www.hanleys.com.au/purell-5791-antiseptic-sanitising-hand-foam-pump-bottle-535ml", "type": "online"}]
                }
              ]
            }
          ]
        },
        {
          "id": "cleaning-optional",
          "title": "Optional",
          "items": [
            {
              "id": "clean-opt-koala-eco-fragrance-free-laundry-stain-s",
              "name": "Laundry stain spray",
              "options": [
                {
                  "gold": true,
                  "name": "Koala Eco Fragrance-Free Laundry Stain Spray",
                  "buy": [{"store": "Koala Eco (brand site)", "url": "https://koala.eco/products/laundry-stain-spray", "type": "online"}]
                }
              ]
            },
            {
              "id": "clean-opt-koala-eco-fragrance-free-oxygenated-blea",
              "name": "Oxygen bleach",
              "options": [
                {
                  "gold": true,
                  "name": "Koala Eco Fragrance-Free Oxygenated Bleach",
                  "buy": [{"store": "Koala Eco (brand site)", "url": "https://koala.eco/products/oxygenated-bleach-brighten-whiten", "type": "online"}]
                }
              ]
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
