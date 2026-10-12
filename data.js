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
              qty: "460 g/week (~3 kg every 6–7 weeks)",
              note: "Lockie 45 g/day, Margo 20 g/day",
              options: [
                { gold: true, name: "Protein Supplies Australia WPC Pure, Unflavoured, 3 × 1 kg bundle", note: "$157.39 sale (normally $209.85) · ~$3.41/day for two · choose Unflavoured · flavour with vanilla extract or cinnamon · proteinsuppliesaustralia.com.au/products/australian-whey-protein-bundle" },
                { name: "Protein Supplies Australia WPC Pure, Unflavoured, 1 kg", note: "$69.95 · code CHARLEY10 · proteinsuppliesaustralia.com.au/products/australian-whey-powder-wpc-pure" },
                { name: "Chief Grass-fed Whey, Creamy Vanilla, 900 g", note: "$119.95 · cleanest flavoured (monk fruit, no lecithin) · treat option · wearechief.com" },
                { name: "Protein Supplies Australia WPC Vanilla, 1 kg", note: "$55.96 sale · contains stevia + sunflower lecithin (conflicts with avoid list)" },
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
                { gold: true, name: "Best of the Bone Original beef bone broth concentrate, 390 g (39 mugs)", note: "$32.99 · code HOLISTICGUT15 · bestofthebone.com" }
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
                { gold: true, name: "Nordic Naturals Arctic Cod Liver Oil, orange, 473 mL · Pharmacy Online", note: "$87.95 · same product as Charley's list · pharmacyonline.com.au/nordic-naturals-arctic-cod-liver-oil-orange-flavour-473ml" },
                { name: "Nordic Naturals Arctic Cod Liver Oil, orange, 473 mL · Aus Health Nutrition", note: "$94.55 · Charley's link · Aus Health Nutrition" },
                { name: "Nordic Naturals Ultimate Omega, 180 caps", note: "Capsule backup · $129.95 · 2 softgels/day each with food · 45 days for two · Aus Health Nutrition" }
              ]
            },
            {
              id: "creatine",
              name: "Creatine monohydrate",
              qty: "1 kg ≈ 200 days (Lockie, 5 g/day)",
              note: "5 g/day, any time, with water or the yoghurt bowl",
              options: [
                { gold: true, name: "Just Creatine micronised monohydrate (200 mesh), 1 kg pouch", note: "$33.90 · pure, unflavoured, lab-tested · justcreatine.com.au" },
                { name: "Protein Supplies Creatine Pure (micronised), 500 g", note: "$35.96 · Charley's list · code CHARLEY10" },
                { name: "VPA Creatine Monohydrate, 1 kg", note: "$48.00 · NMI tested · vpa.com.au" }
              ]
            },
            {
              id: "vitamin-d3-k2",
              name: "Vitamin D3 + K2",
              qty: "3 drops/day combined",
              note: "Lockie 2 drops, Margo 1, morning with a fat-containing meal · on food or under the tongue · max 4/day (not 10)",
              options: [
                { gold: true, name: "Seeking Health D3 + K2 Drops, 30 mL (900 drops ≈ 300 days)", note: "$41.18 · iHerb AU" }
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
          id: "care-main",
          items: [
            {
              id: "care-face-moisturiser",
              name: "Face moisturiser",
              options: [
                { gold: true, name: "The Ordinary Natural Moisturizing Factors + HA" },
                { name: "MooGoo Full Cream Moisturiser" }
              ]
            },
            {
              id: "care-face-cleanser",
              name: "Face cleanser",
              options: [
                { gold: true, name: "The Ordinary Squalane Cleanser" },
                { name: "MooGoo cleanser (variant TBC)" }
              ]
            },
            {
              id: "care-body-moisturiser",
              name: "Body moisturiser",
              options: [
                { gold: true, name: "The Ordinary Natural Moisturizing Factors + Inulin" },
                { name: "MooGoo Full Cream Moisturiser" }
              ]
            },
            {
              id: "care-body-wash",
              name: "Body wash",
              options: [
                { gold: true, name: "Thankyou Lemon Myrtle & Oat Milk" },
                { name: "Sukin" }
              ]
            },
            {
              id: "care-hand-wash",
              name: "Hand wash",
              options: [
                { gold: true, name: "Thankyou Lemon Myrtle & Oat Milk Hand & Body Wash 1 L refill" },
                { name: "ecostore Ultra Sensitive Hand Wash" }
              ]
            },
            {
              id: "care-shampoo",
              name: "Shampoo",
              options: [
                { gold: true, name: "MooGoo Milk Shampoo" }
              ]
            },
            {
              id: "care-conditioner",
              name: "Conditioner",
              options: [
                { gold: true, name: "MooGoo Cream Conditioner" }
              ]
            },
            {
              id: "care-hair-styling",
              name: "Hair styling",
              options: [
                { gold: true, name: "PrimalPantry Tallow Hair Clay (trialling)" }
              ]
            },
            {
              id: "care-toothbrush",
              name: "Toothbrush",
              options: [
                { gold: true, name: "Toxin Dodger soft horsehair toothbrush" }
              ]
            },
            {
              id: "care-dental-floss",
              name: "Dental floss",
              options: [
                { gold: true, name: "Toxin Dodger silk floss" },
                { name: "Turtle Tribe silk floss" },
                { name: "RADIUS Pure Silk" }
              ]
            },
            {
              id: "care-toothpaste",
              name: "Toothpaste",
              options: [
                { gold: true, name: "Grants hydroxyapatite whitening" },
                { name: "MooGoo hydroxyapatite" },
                { name: "Grin Pro Enamel Care + Nano-Hydroxyapatite" },
                { name: "Red Seal Baking Soda + Hydroxyapatite" }
              ]
            },
            {
              id: "care-deodorant",
              name: "Deodorant",
              options: [
                { gold: true, name: "MooGoo" },
                { name: "Noosa Basics" },
                { name: "KIND-LY Lime & Frankincense" },
                { name: "Woohoo" },
                { name: "Patricks" },
                { name: "Two Dudes" }
              ]
            }
          ]
        },
        {
          id: "care-optional",
          title: "Optional",
          items: [
            {
              id: "care-opt-the-ordinary-multi-peptide-copper-peptid",
              name: "Skincare",
              options: [
                { gold: true, name: "The Ordinary Multi-Peptide + Copper Peptides" }
              ]
            },
            {
              id: "care-opt-the-ordinary-squalane",
              name: "Skincare",
              options: [
                { gold: true, name: "The Ordinary squalane" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "cleaning",
      label: "Cleaning",
      note: "Laundry rule: no fabric softener or scent boosters.",
      sections: [
        {
          id: "cleaning-main",
          items: [
            {
              id: "clean-general-surfaces-kitchen",
              name: "General surfaces/kitchen",
              options: [
                { gold: true, name: "Koh Universal Cleaner" },
                { name: "ecostore Ultra Sensitive Multi-Purpose" }
              ]
            },
            {
              id: "clean-targeted-disinfection",
              name: "Targeted disinfection",
              options: [
                { gold: true, name: "Hydro-E HOCl Hospital Grade Disinfectant" }
              ]
            },
            {
              id: "clean-laundry-detergent",
              name: "Laundry detergent",
              options: [
                { gold: true, name: "Resparkle Fragrance-Free Laundry Powder" },
                { name: "Herbon Fragrance-Free" },
                { name: "Abode Zero Laundry Powder" }
              ]
            },
            {
              id: "clean-laundry-soaker-stain",
              name: "Laundry soaker/stain",
              options: [
                { gold: true, name: "Hudstone Soaker" },
                { name: "Kin Kin Laundry Soaker" },
                { name: "MiEco sodium percarbonate" }
              ]
            },
            {
              id: "clean-dishwasher",
              name: "Dishwasher",
              options: [
                { gold: true, name: "Hudstone Dishwashing Powder" },
                { name: "Kin Kin Dishwasher Powder" }
              ]
            },
            {
              id: "clean-hand-dishwashing",
              name: "Hand dishwashing",
              options: [
                { gold: true, name: "Earth Choice Sensitive Concentrated" },
                { name: "ecostore Ultra Sensitive Dish" },
                { name: "Abode Zero Dish Liquid" }
              ]
            },
            {
              id: "clean-bathroom",
              name: "Bathroom",
              options: [
                { gold: true, name: "SimplyClean HealthyClean Bathroom" },
                { name: "ecostore Bathroom Concentrate" }
              ]
            },
            {
              id: "clean-toilet",
              name: "Toilet",
              options: [
                { gold: true, name: "Abode Rosemary & Mint Toilet Gel" }
              ]
            },
            {
              id: "clean-mould",
              name: "Mould",
              options: [
                { gold: true, name: "SimplyClean Simply NO Mould" }
              ]
            },
            {
              id: "clean-descaling",
              name: "Descaling",
              options: [
                { gold: true, name: "Citric acid (any brand)" }
              ]
            },
            {
              id: "clean-multipurpose-wipes",
              name: "Multipurpose wipes",
              options: [
                { gold: true, name: "CleanLIFE Surface Vinegar Wipes (trial)" }
              ]
            },
            {
              id: "clean-hand-sanitiser",
              name: "Hand sanitiser",
              options: [
                { gold: true, name: "PURELL Antiseptic Hand Foam 72%" }
              ]
            }
          ]
        },
        {
          id: "cleaning-optional",
          title: "Optional",
          items: [
            {
              id: "clean-opt-koala-eco-fragrance-free-laundry-stain-s",
              name: "Laundry stain spray",
              options: [
                { gold: true, name: "Koala Eco Fragrance-Free Laundry Stain Spray" }
              ]
            },
            {
              id: "clean-opt-koala-eco-fragrance-free-oxygenated-blea",
              name: "Oxygen bleach",
              options: [
                { gold: true, name: "Koala Eco Fragrance-Free Oxygenated Bleach" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
