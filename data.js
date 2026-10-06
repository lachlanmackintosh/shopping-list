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
      sections: [
        {
          id: "dairy-protein",
          title: "Dairy & protein",
          items: [
            {
              id: "greek-yoghurt",
              name: "Greek yoghurt",
              qty: "2.1 kg/week",
              options: [
                { gold: true, name: "Jalna Organic Farm to Pot Greek yoghurt (full-fat)" },
                { name: "Other full-fat Greek yoghurt" },
                { name: "Full-fat Skyr" }
              ]
            },
            {
              id: "whey",
              name: "Whey protein (unflavoured)",
              qty: "350 g/week",
              options: [
                { gold: true, name: "Chief Whey", note: "Code HGH10" },
                { name: "Professional Whey isolate", note: "Code HGH5" },
                { name: "Protein Supplies whey", note: "Code CHARLEY10" }
              ]
            },
            {
              id: "eggs",
              name: "Eggs",
              qty: "28/week",
              options: [{ gold: true, name: "Pasture-raised eggs" }]
            },
            {
              id: "cottage-cheese",
              name: "Cottage cheese",
              qty: "700 g/week",
              options: [{ gold: true, name: "Full-fat cottage cheese" }]
            },
            {
              id: "milk",
              name: "Milk",
              qty: "1.75 L/week",
              options: [
                { gold: true, name: "Raw organic grass-fed cow's milk" },
                { name: "Cold-pressed milk" },
                { name: "Raw A2 milk" },
                { name: "Organic full-fat A2 (pasteurised)" },
                { name: "Organic full-fat pasteurised" },
                { name: "Kefir" },
                { name: "Goat's milk" },
                { name: "Raw goat's milk" }
              ]
            },
            {
              id: "cheese",
              name: "Cheese",
              qty: "140 g/week",
              options: [
                { gold: true, name: "Cheddar" },
                { name: "Parmesan" },
                { name: "Gorgonzola" }
              ]
            }
          ]
        },
        {
          id: "meat-fish",
          title: "Meat & fish",
          note: "Third meal protein, ~180 g raw per day.",
          aside: "No sardines, ever.",
          items: [
            {
              id: "main-protein",
              name: "Main protein",
              qty: "~1.26 kg/week",
              options: [
                { gold: true, name: "Grass-fed grass-finished lean beef mince" },
                { name: "Bison" },
                { name: "Venison" },
                { name: "Chicken thigh" },
                { name: "Salmon (wild-caught, when affordable)" },
                { name: "Grass-fed grass-finished steak (steak plate)" }
              ]
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
              qty: "~14 slices/week",
              note: "2 per day",
              options: [{ gold: true, name: "Organic sourdough" }]
            },
            {
              id: "carb-base",
              name: "Carb base",
              options: [
                { gold: true, name: "Orange sweet potato (~350 g cooked per day; usual pick)" },
                { name: "Organic white rice (~100 g dry per day; heavy gym days)" }
              ]
            }
          ]
        },
        {
          id: "fruit-veg",
          title: "Fruit & veg",
          items: [
            {
              id: "berries",
              name: "Berries",
              qty: "1.4 kg/week",
              options: [
                { gold: true, name: "Organic mixed (strawberries/blueberries/raspberries)" },
                { name: "Frozen organic berries" }
              ]
            },
            {
              id: "avocados",
              name: "Avocados",
              qty: "~7/week",
              note: "½ in the egg meal and ½ in the bowl, daily"
            },
            { id: "broccoli", name: "Broccoli", qty: "~1.05 kg/week" },
            { id: "rocket", name: "Rocket", qty: "210 g/week" },
            { id: "red-onion", name: "Red onion", qty: "350 g/week" },
            {
              id: "carrots",
              name: "Carrots",
              qty: "700 g/week",
              note: "One a day as a snack"
            },
            { id: "gold-kiwifruit", name: "Gold kiwifruit", qty: "7/week" },
            { id: "seasonal-fruit", name: "Seasonal fruit", qty: "700 g/week" },
            {
              id: "orange-juice",
              name: "Orange juice",
              qty: "~1.05 L/week",
              note: "150 mL/day",
              options: [{ gold: true, name: "Organic cold-pressed OJ" }]
            },
            {
              id: "coconut-water",
              name: "Coconut water",
              options: [
                { gold: true, name: "Raw C Coconut Water" },
                { name: "Other 100% pure coconut water with nothing added" }
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
              options: [{ gold: true, name: "Australian EVOO" }]
            },
            {
              id: "sweetener",
              name: "Sweetener",
              options: [
                { gold: true, name: "Pure maple syrup" },
                { name: "Raw honey" }
              ]
            },
            { id: "ceylon-cinnamon", name: "Ceylon cinnamon", note: "Optional" },
            { id: "bee-pollen", name: "Bee pollen", note: "Optional" },
            {
              id: "cooking-fat",
              name: "Cooking fat",
              options: [
                { gold: true, name: "Beef tallow (Best of the Bone)", note: "Code HOLISTICGUT15" },
                { name: "Ghee" }
              ]
            },
            {
              id: "salt",
              name: "Salt",
              options: [{ gold: true, name: "Salt with batch heavy-metal testing" }]
            },
            {
              id: "herbs",
              name: "Herbs",
              note: "Garlic, rosemary, thyme · optional"
            },
            {
              id: "ferments",
              name: "Ferments",
              note: "Optional",
              options: [
                { gold: true, name: "Sauerkraut" },
                { name: "Kimchi" },
                { name: "Pickles" }
              ]
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
        },
        {
          id: "optional-rotation",
          title: "Optional / rotation",
          items: [
            { id: "bone-broth", name: "Bone broth" },
            { id: "coffee-tea", name: "Coffee / green tea / yerba mate" },
            { id: "pom-juice", name: "Pomegranate or tart-cherry juice" }
          ]
        }
      ]
    },
    {
      id: "supplements",
      label: "Supplements",
      note: "Only for real gaps.",
      sections: [
        {
          id: "supplements-list",
          items: [
            {
              id: "omega-3",
              name: "Omega-3",
              options: [
                { gold: true, name: "Nordic Naturals Ultimate Omega" },
                { name: "Nordic Naturals cod liver oil" }
              ]
            },
            {
              id: "magnesium",
              name: "Magnesium",
              note: "Only if food comes up short",
              options: [
                { gold: true, name: "Magnesium glycinate (Life Extension or Now Foods)" }
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
