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
              "name": "Organic strawberries",
              "qty": "560 g/week"
            },
            {
              "id": "raspberries",
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
              "name": "Gold kiwifruit",
              "qty": "~7/week"
            },
            {
              "id": "avocados",
              "name": "Avocados",
              "qty": "~12/week"
            },
            {
              "id": "broccoli",
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
              "name": "Cos lettuce",
              "qty": "~3 heads/week"
            },
            {
              "id": "cucumber",
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
              "name": "Organic tomatoes",
              "qty": "~11/week"
            },
            {
              "id": "capsicum",
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
                    "name": "The Ordinary Natural Moisturizing Factors + HA"
                  },
                  {
                    "name": "MooGoo Full Cream Moisturiser"
                  }
                ]
              },
              {
                "id": "care-face-cleanser",
                "name": "Face cleanser",
                "options": [
                  {
                    "gold": true,
                    "name": "The Ordinary Squalane Cleanser"
                  },
                  {
                    "name": "MooGoo cleanser (variant TBC)"
                  }
                ]
              },
              {
                "id": "care-body-moisturiser",
                "name": "Body moisturiser",
                "options": [
                  {
                    "gold": true,
                    "name": "The Ordinary Natural Moisturizing Factors + Inulin"
                  },
                  {
                    "name": "MooGoo Full Cream Moisturiser"
                  }
                ]
              },
              {
                "id": "care-body-wash",
                "name": "Body wash",
                "options": [
                  {
                    "gold": true,
                    "name": "Thankyou Lemon Myrtle & Oat Milk"
                  },
                  {
                    "name": "Sukin"
                  }
                ]
              },
              {
                "id": "care-hand-wash",
                "name": "Hand wash",
                "options": [
                  {
                    "gold": true,
                    "name": "Thankyou Lemon Myrtle & Oat Milk Hand & Body Wash 1 L refill"
                  },
                  {
                    "name": "ecostore Ultra Sensitive Hand Wash"
                  }
                ]
              },
              {
                "id": "care-shampoo",
                "name": "Shampoo",
                "options": [
                  {
                    "gold": true,
                    "name": "MooGoo Milk Shampoo"
                  }
                ]
              },
              {
                "id": "care-conditioner",
                "name": "Conditioner",
                "options": [
                  {
                    "gold": true,
                    "name": "MooGoo Cream Conditioner"
                  }
                ]
              },
              {
                "id": "care-hair-styling",
                "name": "Hair styling",
                "options": [
                  {
                    "gold": true,
                    "name": "PrimalPantry Tallow Hair Clay (trialling)"
                  }
                ]
              },
              {
                "id": "care-toothbrush",
                "name": "Toothbrush",
                "options": [
                  {
                    "gold": true,
                    "name": "Toxin Dodger soft horsehair toothbrush"
                  }
                ]
              },
              {
                "id": "care-dental-floss",
                "name": "Dental floss",
                "options": [
                  {
                    "gold": true,
                    "name": "Toxin Dodger silk floss"
                  },
                  {
                    "name": "Turtle Tribe silk floss"
                  },
                  {
                    "name": "RADIUS Pure Silk"
                  }
                ]
              },
              {
                "id": "care-toothpaste",
                "name": "Toothpaste",
                "options": [
                  {
                    "gold": true,
                    "name": "Grants hydroxyapatite whitening"
                  },
                  {
                    "name": "MooGoo hydroxyapatite"
                  },
                  {
                    "name": "Grin Pro Enamel Care + Nano-Hydroxyapatite"
                  },
                  {
                    "name": "Red Seal Baking Soda + Hydroxyapatite"
                  }
                ]
              },
              {
                "id": "care-deodorant",
                "name": "Deodorant",
                "options": [
                  {
                    "gold": true,
                    "name": "MooGoo"
                  },
                  {
                    "name": "Noosa Basics"
                  },
                  {
                    "name": "KIND-LY Lime & Frankincense"
                  },
                  {
                    "name": "Woohoo"
                  },
                  {
                    "name": "Patricks"
                  },
                  {
                    "name": "Two Dudes"
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
                    "name": "The Ordinary Multi-Peptide + Copper Peptides"
                  }
                ]
              },
              {
                "id": "care-opt-the-ordinary-squalane",
                "name": "Squalane",
                "options": [
                  {
                    "gold": true,
                    "name": "The Ordinary squalane"
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
                    "name": "Thankyou Lemon Myrtle & Oat Milk"
                  },
                  {
                    "name": "Sukin"
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
                    "name": "Thankyou Lemon Myrtle & Oat Milk Hand & Body Wash 1 L refill"
                  },
                  {
                    "name": "ecostore Ultra Sensitive Hand Wash"
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
                    "name": "Grants hydroxyapatite whitening"
                  },
                  {
                    "name": "MooGoo hydroxyapatite"
                  },
                  {
                    "name": "Grin Pro Enamel Care + Nano-Hydroxyapatite"
                  },
                  {
                    "name": "Red Seal Baking Soda + Hydroxyapatite"
                  }
                ],
                "info": "Shared with Lockie."
              }
            ]
          },
          {
            "id": "care-m-optional",
            "title": "Margo to add",
            "note": "Margo to add her own face, hair and deodorant picks. Use \"Add a one-off\" below.",
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
                  "name": "Koh Universal Cleaner"
                },
                {
                  "name": "ecostore Ultra Sensitive Multi-Purpose"
                }
              ]
            },
            {
              "id": "clean-targeted-disinfection",
              "name": "Targeted disinfection",
              "options": [
                {
                  "gold": true,
                  "name": "Hydro-E HOCl Hospital Grade Disinfectant"
                }
              ]
            },
            {
              "id": "clean-laundry-detergent",
              "name": "Laundry detergent",
              "options": [
                {
                  "gold": true,
                  "name": "Resparkle Fragrance-Free Laundry Powder"
                },
                {
                  "name": "Herbon Fragrance-Free"
                },
                {
                  "name": "Abode Zero Laundry Powder"
                }
              ]
            },
            {
              "id": "clean-laundry-soaker-stain",
              "name": "Laundry soaker/stain",
              "options": [
                {
                  "gold": true,
                  "name": "Hudstone Soaker"
                },
                {
                  "name": "Kin Kin Laundry Soaker"
                },
                {
                  "name": "MiEco sodium percarbonate"
                }
              ]
            },
            {
              "id": "clean-dishwasher",
              "name": "Dishwasher",
              "options": [
                {
                  "gold": true,
                  "name": "Hudstone Dishwashing Powder"
                },
                {
                  "name": "Kin Kin Dishwasher Powder"
                }
              ]
            },
            {
              "id": "clean-hand-dishwashing",
              "name": "Hand dishwashing",
              "options": [
                {
                  "gold": true,
                  "name": "Earth Choice Sensitive Concentrated"
                },
                {
                  "name": "ecostore Ultra Sensitive Dish"
                },
                {
                  "name": "Abode Zero Dish Liquid"
                }
              ]
            },
            {
              "id": "clean-bathroom",
              "name": "Bathroom",
              "options": [
                {
                  "gold": true,
                  "name": "SimplyClean HealthyClean Bathroom"
                },
                {
                  "name": "ecostore Bathroom Concentrate"
                }
              ]
            },
            {
              "id": "clean-toilet",
              "name": "Toilet",
              "options": [
                {
                  "gold": true,
                  "name": "Abode Rosemary & Mint Toilet Gel"
                }
              ]
            },
            {
              "id": "clean-mould",
              "name": "Mould",
              "options": [
                {
                  "gold": true,
                  "name": "SimplyClean Simply NO Mould"
                }
              ]
            },
            {
              "id": "clean-descaling",
              "name": "Descaling",
              "options": [
                {
                  "gold": true,
                  "name": "Citric acid (any brand)"
                }
              ]
            },
            {
              "id": "clean-multipurpose-wipes",
              "name": "Multipurpose wipes",
              "options": [
                {
                  "gold": true,
                  "name": "CleanLIFE Surface Vinegar Wipes (trial)"
                }
              ]
            },
            {
              "id": "clean-hand-sanitiser",
              "name": "Hand sanitiser",
              "options": [
                {
                  "gold": true,
                  "name": "PURELL Antiseptic Hand Foam 72%"
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
                  "name": "Koala Eco Fragrance-Free Laundry Stain Spray"
                }
              ]
            },
            {
              "id": "clean-opt-koala-eco-fragrance-free-oxygenated-blea",
              "name": "Oxygen bleach",
              "options": [
                {
                  "gold": true,
                  "name": "Koala Eco Fragrance-Free Oxygenated Bleach"
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
