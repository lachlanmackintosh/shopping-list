/* Lockie's shopping list — edit this file to change items.
   The first option is the gold standard and the default.
   qty and note are optional. An option note (discount code, and similar)
   shows when that option is chosen.
   Keep each id the same once it exists — ticks and choices are remembered by id.

   An item looks like:
     { id: "eggs", name: "Eggs", qty: "28/week", options: [ { name: "Pasture-raised eggs" } ] }
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
                { name: "Jalna Organic Farm to Pot Greek yoghurt (full-fat)" },
                { name: "Other full-fat Greek yoghurt" },
                { name: "Full-fat Skyr" }
              ]
            },
            {
              id: "whey",
              name: "Whey protein (unflavoured)",
              qty: "350 g/week",
              options: [
                { name: "Chief Whey", note: "Code HGH10" },
                { name: "Professional Whey isolate", note: "Code HGH5" },
                { name: "Protein Supplies whey", note: "Code CHARLEY10" }
              ]
            },
            {
              id: "eggs",
              name: "Eggs",
              qty: "28/week",
              options: [{ name: "Pasture-raised eggs" }]
            },
            {
              id: "cottage-cheese",
              name: "Cottage cheese",
              qty: "700 g/week",
              options: [{ name: "Full-fat cottage cheese" }]
            },
            {
              id: "milk",
              name: "Milk",
              qty: "1.75 L/week",
              options: [
                { name: "Organic full-fat pasteurised" },
                { name: "A2 full-fat" },
                { name: "Kefir" }
              ]
            },
            {
              id: "cheese",
              name: "Cheese",
              qty: "140 g/week",
              options: [
                { name: "Cheddar" },
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
                { name: "Grass-fed grass-finished lean beef mince" },
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
              options: [{ name: "Organic sourdough" }]
            },
            {
              id: "carb-base",
              name: "Carb base",
              options: [
                { name: "Orange sweet potato (~350 g cooked per day; usual pick)" },
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
                { name: "Organic mixed (strawberries/blueberries/raspberries)" },
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
              options: [{ name: "Organic cold-pressed OJ" }]
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
              options: [{ name: "Australian EVOO" }]
            },
            {
              id: "sweetener",
              name: "Sweetener",
              options: [
                { name: "Pure maple syrup" },
                { name: "Raw honey" }
              ]
            },
            { id: "ceylon-cinnamon", name: "Ceylon cinnamon", note: "Optional" },
            { id: "bee-pollen", name: "Bee pollen", note: "Optional" },
            {
              id: "cooking-fat",
              name: "Cooking fat",
              options: [
                { name: "Beef tallow (Best of the Bone)", note: "Code HOLISTICGUT15" },
                { name: "Ghee" }
              ]
            },
            {
              id: "salt",
              name: "Salt",
              options: [{ name: "Salt with batch heavy-metal testing" }]
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
                { name: "Sauerkraut" },
                { name: "Kimchi" },
                { name: "Pickles" }
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
                { name: "Nordic Naturals Ultimate Omega" },
                { name: "Nordic Naturals cod liver oil" }
              ]
            },
            {
              id: "magnesium",
              name: "Magnesium",
              note: "Only if food comes up short",
              options: [
                { name: "Magnesium glycinate (Life Extension or Now Foods)" }
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
                { name: "Koh Universal Cleaner" },
                { name: "Ecostore Ultra Sensitive Multi-Purpose Cleaner" }
              ]
            },
            {
              id: "disinfectant",
              name: "Disinfectant",
              note: "Raw meat, illness, or a high-risk bathroom only",
              options: [
                { name: "Hydro-E HOCl Hospital Grade Disinfectant" },
                { name: "SimplyClean Simply NO Mould / HOCl-style disinfectant" }
              ]
            },
            {
              id: "bathroom",
              name: "Bathroom",
              note: "Soap scum and scale",
              options: [
                { name: "SimplyClean HealthyClean Bathroom" },
                { name: "Ecostore Bathroom & Shower Cleaner Concentrate" }
              ]
            },
            {
              id: "dishwasher",
              name: "Dishwasher",
              options: [
                { name: "Kin Kin Dishwasher Powder" },
                { name: "Hudstone Dishwashing Powder" }
              ]
            },
            {
              id: "dish-liquid",
              name: "Dish liquid",
              options: [
                { name: "Ecostore Ultra Sensitive Dish Liquid" },
                { name: "Earth Choice Sensitive Concentrated Dishwashing Liquid" }
              ]
            },
            {
              id: "laundry",
              name: "Laundry",
              options: [
                { name: "Resparkle Fragrance-Free Laundry Powder" },
                { name: "Abode Zero Laundry Powder / Liquid" }
              ]
            },
            {
              id: "stain-remover",
              name: "Stain remover / soaker",
              note: "Blood, sweat, sunscreen, whites",
              options: [
                { name: "Hudstone Pre Soaker / Stain Remover" },
                { name: "Kin Kin Laundry Soaker & Stain Remover" }
              ]
            },
            {
              id: "hand-wash",
              name: "Hand wash",
              options: [
                { name: "Ecostore Ultra Sensitive Hand Wash" },
                { name: "Abode Sensitive / fragrance-free hand wash" }
              ]
            },
            {
              id: "toilet",
              name: "Toilet",
              options: [
                { name: "Citric acid powder + toilet brush" },
                { name: "Abode Toilet Gel" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
