const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactrecipes"
);

const recipeSeed = [
  {
    thumbnail: "",
    href: "http://www.recipezaar.com/Baked-Turkey-Sausage-Penne-327796",
    ingredients: [
      "mozzarella cheese",
      "red pepper flakes",
      "tomato",
      "basil",
      "oregano",
      "thyme",
      "penne",
      "garlic",
      "green pepper",
      "black pepper",
      "kosher salt",
      "olive oil",
      "pasta sauce",
      "red onions",
      "red pepper",
      "turkey sausage"
    ],
    title: "Baked Turkey Sausage Penne "
  },
  {
    thumbnail: "",
    href:
      "http://allrecipes.com/Recipe/Homemade-Italian-Turkey-Sausage/Detail.aspx",
    ingredients: [
      "oregano",
      "fennel seed",
      "garlic powder",
      "turkey",
      "black pepper",
      "salt",
      "sugar"
    ],
    title: "Homemade Italian Turkey Sausage "
  },
  {
    thumbnail: "http://img.recipepuppy.com/3130.jpg",
    href: "http://allrecipes.com/Recipe/Turkey-Sausage-Breakfast/Detail.aspx",
    ingredients: [
      "cheddar cheese",
      "eggs",
      "green onion",
      "milk",
      "turkey sausage"
    ],
    title: "Turkey Sausage Breakfast "
  },
  {
    thumbnail: "",
    href: "http://allrecipes.com/Recipe/Tuscan-Turkey-Sausage-Soup/Detail.aspx",
    ingredients: [
      "caraway seed",
      "fennel seed",
      "italian seasoning",
      "turkey sausage",
      "leek",
      "onions",
      "chicken broth",
      "seasoning"
    ],
    title: "Tuscan Turkey Sausage Soup "
  },
  {
    thumbnail: "",
    href: "http://allrecipes.com/Recipe/Turkey-Sausage-Pie/Detail.aspx",
    ingredients: ["green pepper", "olive oil", "onions", "turkey sausage"],
    title: "Turkey Sausage Pie "
  },
  {
    thumbnail: "http://img.recipepuppy.com/234741.jpg",
    href:
      "http://www.grouprecipes.com/74096/turkey-sausage-stuffed-zucchini.html",
    ingredients: [
      "bread crumbs",
      "chicken broth",
      "garlic",
      "turkey",
      "onions",
      "tomato",
      "parmesan cheese",
      "fennel seed",
      "basil",
      "olive oil",
      "red pepper flakes",
      "salt",
      "poultry seasoning",
      "thyme",
      "sage",
      "oregano",
      "black pepper",
      "garlic powder",
      "zucchini"
    ],
    title: "Turkey Sausage Stuffed Zucchini Recipe "
  },
  {
    thumbnail: "",
    href:
      "http://allrecipes.com/Recipe/Potato-and-Turkey-Sausage-Soup/Detail.aspx",
    ingredients: [
      "celery",
      "half and half",
      "margarine",
      "onions",
      "potato",
      "salt",
      "water"
    ],
    title: "Potato and Turkey Sausage Soup "
  },
  {
    thumbnail: "http://img.recipepuppy.com/8496.jpg",
    href:
      "http://allrecipes.com/Recipe/Moms-Turkey-Sausage-Patties/Detail.aspx",
    ingredients: [
      "black pepper",
      "cayenne",
      "sage",
      "ginger",
      "salt",
      "turkey"
    ],
    title: "Mom's Turkey Sausage Patties "
  },
  {
    thumbnail: "http://img.recipepuppy.com/128166.jpg",
    href:
      "http://www.epicurious.com/recipes/food/views/Turkey-Sausage-Patties-350914",
    ingredients: [
      "cayenne",
      "cinnamon",
      "cloves",
      "bread crumbs",
      "turkey",
      "egg yolks",
      "milk",
      "nutmeg",
      "onions",
      "olive oil"
    ],
    title: "Turkey Sausage Patties "
  },
  {
    thumbnail: "",
    href: "http://www.grouprecipes.com/24920/bears-turkey-sausage.html",
    ingredients: [
      "fish sauce",
      "cornstarch",
      "eggs",
      "green beans",
      "green onion",
      "olive oil",
      "serrano pepper",
      "sugar",
      "turkey"
    ],
    title: "Bears Turkey Sausage Recipe "
  },
  {
    thumbnail: "http://img.recipepuppy.com/685.jpg",
    href: "http://allrecipes.com/Recipe/Country-Potato-Pancakes/Detail.aspx",
    ingredients: [
      "baking powder",
      "eggs",
      "flour",
      "onions",
      "potato",
      "salt",
      "vegetable oil"
    ],
    title: "Country Potato Pancakes "
  },
  {
    thumbnail: "http://img.recipepuppy.com/379906.jpg",
    href: "http://www.grouprecipes.com/20346/blender-potato-pancakes.html",
    ingredients: ["eggs", "flour", "onions", "potato", "baking powder", "salt"],
    title: "Blender Potato Pancakes Recipe "
  },
  {
    thumbnail: "",
    href: "http://allrecipes.com/Recipe/Sweet-Potato-Pancakes-2/Detail.aspx",
    ingredients: [
      "cinnamon",
      "molasses",
      "egg whites",
      "eggs",
      "olive oil",
      "yogurt",
      "rolled oat",
      "vanilla extract"
    ],
    title: "Sweet Potato Pancakes "
  },
  {
    thumbnail: "http://img.recipepuppy.com/37717.jpg",
    href:
      "http://www.recipezaar.com/Rievkooche-or-Reibekuchen-Cologne-Style-Potato-Pancakes-173315",
    ingredients: [
      "applesauce",
      "eggs",
      "lemon juice",
      "milk",
      "potato",
      "salt",
      "vegetable oil",
      "water"
    ],
    title: "Rievkooche or Reibekuchen (Cologne Style Potato Pancakes) "
  },
  {
    thumbnail: "http://img.recipepuppy.com/44062.jpg",
    href: "http://www.recipezaar.com/Potato-Pancakes-With-Smoked-Salmon-211538",
    ingredients: [
      "baking powder",
      "brown sugar",
      "butter",
      "eggs",
      "fennel seed",
      "flour",
      "dill weed",
      "black pepper",
      "vegetable oil",
      "salt",
      "salmon",
      "sour cream",
      "onions",
      "white potato"
    ],
    title: "Potato Pancakes With Smoked Salmon "
  },
  {
    thumbnail: "",
    href:
      "http://www.epicurious.com/recipes/food/views/Bird-Flanagan-Potato-Pancakes-104867",
    ingredients: [
      "cheddar cheese",
      "eggs",
      "canadian bacon",
      "onions",
      "parsley",
      "black pepper",
      "potato",
      "salt",
      "vegetable oil"
    ],
    title: "Bird Flanagan Potato Pancakes "
  },
  {
    thumbnail: "",
    href: "http://allrecipes.com/Recipe/Sweet-Potato-Pancakes/Detail.aspx",
    ingredients: [
      "baking powder",
      "brown sugar",
      "cumin",
      "curry powder",
      "eggs",
      "flour",
      "milk",
      "sweet potato",
      "vegetable oil",
      "sugar"
    ],
    title: "Sweet Potato Pancakes "
  },
  {
    thumbnail: "http://img.recipepuppy.com/212.jpg",
    href:
      "http://allrecipes.com/Recipe/Old-Fashioned-Potato-Pancakes/Detail.aspx",
    ingredients: ["eggs", "flour", "onions", "potato", "black pepper", "salt"],
    title: "Old-Fashioned Potato Pancakes "
  },
  {
    thumbnail: "",
    href: "http://allrecipes.com/Recipe/Confetti-Potato-Pancakes/Detail.aspx",
    ingredients: [
      "vegetable oil",
      "carrot",
      "basil",
      "eggs",
      "flour",
      "garlic",
      "onions",
      "potato",
      "salt",
      "sugar",
      "zucchini"
    ],
    title: "Confetti Potato Pancakes "
  },
  {
    thumbnail: "http://img.recipepuppy.com/688.jpg",
    href: "http://allrecipes.com/Recipe/Authentic-Potato-Pancakes/Detail.aspx",
    ingredients: [
      "bread crumbs",
      "carrot",
      "parsley",
      "flour",
      "garlic",
      "lemon juice",
      "olive oil",
      "onions",
      "potato",
      "salt"
    ],
    title: "Authentic Potato Pancakes "
  },
  {
    thumbnail: "http://img.recipepuppy.com/29216.jpg",
    href:
      "http://allrecipes.com/Recipe/Taqueria-Style-Tacos---Carne-Asada/Detail.aspx",
    ingredients: [
      "black pepper",
      "chili powder",
      "cotija cheese",
      "cumin",
      "chilies",
      "oregano",
      "sirloin steak",
      "garlic",
      "garlic powder",
      "jalapeno",
      "lime",
      "olive oil",
      "paprika",
      "salt",
      "soy sauce",
      "tomato",
      "onions",
      "white pepper",
      "white vinegar"
    ],
    title: "Taqueria Style Tacos - Carne Asada "
  },
  {
    thumbnail: "",
    href: "http://www.recipezaar.com/Amazing-Salmon-Tacos-133959",
    ingredients: [
      "chili powder",
      "cumin",
      "tomato",
      "cilantro",
      "green onion",
      "lime",
      "olive oil",
      "salmon",
      "yellow onions"
    ],
    title: "Amazing Salmon Tacos "
  },
  {
    thumbnail: "",
    href: "http://www.recipezaar.com/Chicken-Tacos-the-Tahiti-Way-94613",
    ingredients: [
      "black pepper",
      "chicken",
      "cilantro",
      "corn tortillas",
      "garlic",
      "onions",
      "pepperoncini pepper"
    ],
    title: "Chicken Tacos - the Tahiti Way "
  },
  {
    thumbnail: "",
    href: "http://www.recipezaar.com/Chili-Tacos-47685",
    ingredients: [
      "cheese",
      "corn tortillas",
      "hamburger",
      "lettuce",
      "onions",
      "picante sauce",
      "sour cream",
      "tomato",
      "vegetable oil",
      "chili"
    ],
    title: "Chili Tacos "
  },
  {
    thumbnail: "http://img.recipepuppy.com/351288.jpg",
    href: "http://www.grouprecipes.com/81244/the-taco-rack-seafood-tacos.html",
    ingredients: [
      "imitation crabmeat",
      "taco shells",
      "lemon",
      "cocktail sauce",
      "cheddar cheese",
      "shrimp",
      "sea scallops",
      "seafood",
      "butter"
    ],
    title: "The Taco Rack Seafood Tacos Recipe "
  },
  {
    thumbnail: "",
    href:
      "http://allrecipes.com/Recipe/Slow-Cooker-Shredded-Venison-for-Tacos/Detail.aspx",
    ingredients: ["cayenne", "flour", "vegetable oil", "venison", "water"],
    title: "Slow Cooker Shredded Venison for Tacos "
  },
  {
    thumbnail: "",
    href:
      "http://allrecipes.com/Recipe/Chipotle-Tilapia-Tacos-with-Mango-Cilantro-Salsa/Detail.aspx",
    ingredients: [
      "vegetable oil",
      "chipotle peppers",
      "cilantro",
      "spanish rice",
      "cracked black pepper",
      "garlic",
      "garlic powder",
      "jalapeno",
      "lime juice",
      "mango",
      "mayonnaise",
      "red onions",
      "salt",
      "tilapia fillets"
    ],
    title: "Chipotle Tilapia Tacos with Mango-Cilantro Salsa "
  },
  {
    thumbnail: "http://img.recipepuppy.com/30458.jpg",
    href: "http://allrecipes.com/Recipe/Oaxacan-Tacos/Detail.aspx",
    ingredients: [
      "cilantro",
      "jalapeno",
      "lime",
      "onions",
      "salt",
      "sirloin steak",
      "vegetable oil"
    ],
    title: "Oaxacan Tacos "
  },
  {
    thumbnail: "",
    href: "http://allrecipes.com/Recipe/Pie-Iron-Tacos/Detail.aspx",
    ingredients: [
      "ground beef",
      "lettuce",
      "monterey jack cheese",
      "onions",
      "tomato"
    ],
    title: "Pie Iron Tacos "
  },
  {
    thumbnail: "http://img.recipepuppy.com/40579.jpg",
    href: "http://www.recipezaar.com/Spicy-Beef-Tacos-139608",
    ingredients: [
      "beef",
      "beef broth",
      "cheddar cheese",
      "chili powder",
      "black pepper",
      "garlic",
      "cumin",
      "lettuce",
      "onions",
      "paprika",
      "flour",
      "salt",
      "sour cream",
      "stuffed green olive",
      "taco shells",
      "tomato"
    ],
    title: "Spicy Beef Tacos "
  },
  {
    thumbnail: "",
    href: "http://www.recipezaar.com/Cajun-Hamburger-Steak-122095",
    ingredients: [
      "bacon",
      "green pepper",
      "black pepper",
      "cayenne",
      "cajun seasoning",
      "steak sauce",
      "eggs",
      "garlic",
      "green onion",
      "ground beef",
      "liquid smoke flavoring",
      "onions",
      "salt",
      "sausage",
      "soy sauce",
      "water",
      "worcestershire sauce"
    ],
    title: "Cajun Hamburger Steak "
  },
  {
    thumbnail: "http://img.recipepuppy.com/42381.jpg",
    href:
      "http://www.recipezaar.com/Hamburger-or-Sandwich-Buns-or-Hot-Dog-Buns-94993",
    ingredients: [
      "eggs",
      "flour",
      "vegetable oil",
      "salt",
      "sugar",
      "water",
      "yeast"
    ],
    title: "Hamburger or Sandwich Buns or Hot Dog Buns "
  },
  {
    thumbnail: "http://img.recipepuppy.com/134632.jpg",
    href:
      "http://www.grouprecipes.com/73371/arabic-bread-loaf-or-hamburger-buns.html",
    ingredients: [
      "brown sugar",
      "eggs",
      "flour",
      "yeast",
      "salt",
      "vegetable oil"
    ],
    title: "Arabic Bread Loaf Or Hamburger Buns Recipe "
  },
  {
    thumbnail: "http://img.recipepuppy.com/219478.jpg",
    href: "http://www.recipezaar.com/Hamburger-and-Kidney-Beans-103316",
    ingredients: [
      "red kidney beans",
      "garlic salt",
      "ground beef",
      "black pepper",
      "salt"
    ],
    title: "Hamburger and Kidney Beans "
  },
  {
    thumbnail: "http://img.recipepuppy.com/349253.jpg",
    href: "http://www.grouprecipes.com/44639/hamburger-soup-corchef-style.html",
    ingredients: [
      "bay leaf",
      "ketchup",
      "barley",
      "water",
      "carrot",
      "celery",
      "hamburger",
      "onions",
      "beef bouillon granules",
      "basil",
      "salt"
    ],
    title: "Hamburger Soup Corchef Style Recipe "
  },
  {
    thumbnail: "http://img.recipepuppy.com/360322.jpg",
    href: "http://www.recipezaar.com/Deviled-Beef-Hamburger-Patties-277747",
    ingredients: [
      "chili sauce",
      "eggs",
      "ground beef",
      "onions",
      "black pepper",
      "horseradish",
      "mustard",
      "salt",
      "worcestershire sauce"
    ],
    title: "Deviled Beef Hamburger Patties "
  },
  {
    thumbnail: "http://img.recipepuppy.com/510287.jpg",
    href: "http://www.recipezaar.com/Easy-and-Tasty-Hamburger-Gravy-253447",
    ingredients: [
      "cream of mushroom soup",
      "garlic",
      "ground beef",
      "onions",
      "sour cream"
    ],
    title: "Easy  and Tasty  Hamburger Gravy "
  },
  {
    thumbnail: "http://img.recipepuppy.com/611705.jpg",
    href: "http://www.recipezaar.com/Nanas-Favorite-Hamburger-Gravy-139492",
    ingredients: [
      "flour",
      "black pepper",
      "green pepper",
      "ground beef",
      "milk",
      "onions",
      "salt",
      "water"
    ],
    title: "Nana's Favorite Hamburger Gravy "
  },
  {
    thumbnail: "http://img.recipepuppy.com/3694.jpg",
    href: "http://allrecipes.com/Recipe/Hamburger-Soup-V/Detail.aspx",
    ingredients: [
      "barley",
      "ground beef",
      "carrot",
      "celery",
      "parsley",
      "cabbage",
      "potato",
      "salt",
      "water"
    ],
    title: "Hamburger Soup V "
  },
  {
    thumbnail: "http://img.recipepuppy.com/9720.jpg",
    href: "http://allrecipes.com/Recipe/Hamburger-Casserole/Detail.aspx",
    ingredients: ["ground beef", "celery", "egg noodles", "onions", "salsa"],
    title: "Hamburger Casserole "
  },
  {
    thumbnail: "http://img.recipepuppy.com/14502.jpg",
    href:
      "http://allrecipes.com/Recipe/Homemade-Crispy-Seasoned-French-Fries/Detail.aspx",
    ingredients: [
      "flour",
      "garlic salt",
      "onion powder",
      "paprika",
      "potato",
      "salt",
      "vegetable oil",
      "water"
    ],
    title: "Homemade Crispy Seasoned French Fries "
  },
  {
    thumbnail: "",
    href:
      "http://www.recipezaar.com/Cauliflower-That-Tastes-Like-French-Fries-116591",
    ingredients: ["cauliflower", "black pepper", "olive oil", "sea salt"],
    title: "Cauliflower That Tastes Like French Fries "
  },
  {
    thumbnail: "",
    href: "http://www.grouprecipes.com/70293/masala-french-fries.html",
    ingredients: [
      "black pepper",
      "citric acid",
      "corn starch",
      "mint",
      "oil to fry",
      "red pepper flakes",
      "potato",
      "salt"
    ],
    title: "Masala French Fries Recipe "
  },
  {
    thumbnail: "http://img.recipepuppy.com/281932.jpg",
    href: "http://www.grouprecipes.com/68899/french-fries.html",
    ingredients: ["vegetable oil", "potato", "kosher salt", "black pepper"],
    title: "French Fries Recipe "
  },
  {
    thumbnail: "",
    href: "http://allrecipes.com/Recipe/Yuca-French-Fries/Detail.aspx",
    ingredients: ["salt", "vegetable oil", "yuca"],
    title: "Yuca French Fries "
  },
  {
    thumbnail: "http://img.recipepuppy.com/29428.jpg",
    href: "http://allrecipes.com/Recipe/Cilantro-French-Fries/Detail.aspx",
    ingredients: ["vegetable oil", "potato", "salt"],
    title: "Cilantro French Fries "
  },
  {
    thumbnail: "http://img.recipepuppy.com/44079.jpg",
    href: "http://www.recipezaar.com/Frozen-French-Fries-52058",
    ingredients: ["cajun seasoning", "olive oil", "potato"],
    title: "Frozen French Fries "
  },
  {
    thumbnail: "",
    href: "http://www.recipezaar.com/Buffalo-Fries-333244",
    ingredients: ["french fries", "garlic", "hot sauce", "margarine", "salt"],
    title: "Buffalo French Fries "
  },
  {
    thumbnail: "http://img.recipepuppy.com/29430.jpg",
    href:
      "http://allrecipes.com/Recipe/Tail-Burner-Firehouse-French-Fries/Detail.aspx",
    ingredients: [
      "black pepper",
      "butter",
      "chili powder",
      "red pepper",
      "garlic powder",
      "lemon pepper"
    ],
    title: "Tail Burner Firehouse French Fries "
  },
  {
    thumbnail: "http://img.recipepuppy.com/40614.jpg",
    href: "http://www.recipezaar.com/Oven-French-Fries-29704",
    ingredients: ["olive oil", "nonstick cooking spray", "salt", "potato"],
    title: "Oven French Fries "
  },
  {
    thumbnail: "",
    href: "http://www.grouprecipes.com/66391/fruity-quinoa-salad.html",
    ingredients: [
      "mint",
      "quinoa",
      "apple",
      "lemon juice",
      "cider vinegar",
      "olive oil",
      "almonds",
      "salt",
      "black pepper"
    ],
    title: "Fruity Quinoa Salad Recipe "
  },
  {
    thumbnail: "http://img.recipepuppy.com/344415.jpg",
    href:
      "http://www.recipezaar.com/Curried-Quinoa-Salad-With-Cranberries-122057",
    ingredients: [
      "celery",
      "cider vinegar",
      "red pepper flakes",
      "curry powder",
      "cranberries",
      "green pepper",
      "honey",
      "quinoa",
      "red pepper",
      "soy sauce",
      "water"
    ],
    title: "Curried Quinoa Salad With Cranberries "
  },
  {
    thumbnail: "",
    href: "http://www.recipezaar.com/Basic-Quinoa-235534",
    ingredients: ["quinoa", "water"],
    title: "Basic Quinoa "
  },
  {
    thumbnail: "",
    href:
      "http://allrecipes.com/Recipe/Quinoa-Salad-with-Dried-Fruit-and-Nuts/Detail.aspx",
    ingredients: [
      "cayenne",
      "celery",
      "white vinegar",
      "green onion",
      "lemon juice",
      "pecan",
      "quinoa",
      "raisins",
      "salt",
      "vegetable oil",
      "water"
    ],
    title: "Quinoa Salad with Dried Fruit and Nuts "
  },
  {
    thumbnail: "http://img.recipepuppy.com/7231.jpg",
    href: "http://allrecipes.com/Recipe/Quinoa-with-Mushrooms/Detail.aspx",
    ingredients: [
      "butter",
      "chicken broth",
      "garlic",
      "olive oil",
      "onions",
      "parmesan cheese",
      "quinoa"
    ],
    title: "Quinoa with Mushrooms "
  },
  {
    thumbnail: "http://img.recipepuppy.com/16323.jpg",
    href: "http://allrecipes.com/Recipe/Tomato-Mint-Quinoa-Salad/Detail.aspx",
    ingredients: [
      "almonds",
      "cucumber",
      "cumin",
      "lime juice",
      "onions",
      "quinoa",
      "radish",
      "raisins",
      "salt",
      "vegetable oil",
      "tomato",
      "water"
    ],
    title: "Tomato-Mint Quinoa Salad "
  },
  {
    thumbnail: "",
    href: "http://allrecipes.com/Recipe/Veggie-Quinoa/Detail.aspx",
    ingredients: [
      "broccoli",
      "tofu",
      "garlic",
      "mushroom",
      "olive oil",
      "quinoa",
      "vegetable broth"
    ],
    title: "Veggie Quinoa "
  },
  {
    thumbnail: "http://img.recipepuppy.com/33726.jpg",
    href: "http://www.recipezaar.com/Quinoa-Salad-331992",
    ingredients: [
      "black beans",
      "cherry tomato",
      "cumin",
      "olive oil",
      "cilantro",
      "green onion",
      "lime",
      "quinoa",
      "red pepper flakes",
      "salt",
      "water"
    ],
    title: "Quinoa Salad "
  },
  {
    thumbnail: "http://img.recipepuppy.com/39174.jpg",
    href:
      "http://www.recipezaar.com/Five-Or-More-Ingredient-Garlic-Quinoa-121064",
    ingredients: ["carrot", "garlic", "quinoa", "sea salt", "onions", "water"],
    title: "Five (Or More!) Ingredient Garlic Quinoa "
  },
  {
    thumbnail: "http://img.recipepuppy.com/43199.jpg",
    href: "http://www.recipezaar.com/Quinoa-Pilaf-103775",
    ingredients: [
      "peas",
      "water",
      "garlic",
      "mushroom",
      "olive oil",
      "onions",
      "quinoa",
      "salt"
    ],
    title: "Quinoa Pilaf "
  },
  {
    thumbnail: "http://img.recipepuppy.com/267093.jpg",
    href: "http://www.grouprecipes.com/11241/home-fried-chicken.html",
    ingredients: ["milk", "bacon grease", "flour", "potato", "chicken"],
    title: "Home Fried Chicken Recipe "
  },
  {
    thumbnail: "",
    href:
      "http://www.recipezaar.com/Chicken-in-a-Pot-Plus-Stock-or-Dumplings-115070",
    ingredients: [
      "allspice",
      "bay leaf",
      "carrot",
      "celery",
      "thyme",
      "onions",
      "parsley",
      "black pepper",
      "salt",
      "water",
      "chicken"
    ],
    title: "Chicken in a Pot Plus Stock or Dumplings "
  },
  {
    thumbnail: "",
    href: "http://allrecipes.com/Recipe/Tipsy-Chicken/Detail.aspx",
    ingredients: [
      "beer",
      "cayenne",
      "chili powder",
      "cumin",
      "curry powder",
      "garlic powder",
      "wood chips",
      "onion powder",
      "paprika",
      "black pepper",
      "salt",
      "water"
    ],
    title: "Tipsy Chicken "
  },
  {
    thumbnail: "http://img.recipepuppy.com/45904.jpg",
    href:
      "http://www.recipezaar.com/2-in-1-Herbed-Chicken-Leftover-Chicken-Salad-108955",
    ingredients: [
      "chicken",
      "garlic",
      "margarine",
      "marjoram",
      "onions",
      "black pepper",
      "rosemary",
      "sage",
      "salt",
      "thyme"
    ],
    title: "2 in 1 - Herbed Chicken & Leftover Chicken Salad "
  },
  {
    thumbnail: "",
    href: "http://www.recipezaar.com/Beer-Can-Chicken-312508",
    ingredients: ["beer", "brown sugar", "salt", "seasoning", "chicken"],
    title: "Beer Can Chicken "
  },
  {
    thumbnail: "http://img.recipepuppy.com/223405.jpg",
    href: "http://www.grouprecipes.com/67612/asian-chicken-noodle-soup.html",
    ingredients: [
      "spinach",
      "broth",
      "carrot",
      "chicken",
      "chicken broth",
      "mint",
      "garlic",
      "ginger",
      "radish",
      "lime",
      "udon noodles",
      "onions",
      "hot pepper",
      "peas",
      "soup",
      "lemon grass",
      "fish sauce",
      "vegetable oil",
      "green onion",
      "red pepper flakes",
      "dark sesame oil"
    ],
    title: "Asian Chicken Noodle Soup Recipe "
  },
  {
    thumbnail: "",
    href:
      "http://www.recipezaar.com/Chez-Panisse-Brine-for-Pork-Chicken-and-Turkey-131506",
    ingredients: [
      "allspice",
      "bay leaves",
      "water",
      "thyme",
      "garlic",
      "juniper berries",
      "kosher salt",
      "sugar"
    ],
    title: "Chez Panisse Brine for Pork, Chicken and Turkey "
  },
  {
    thumbnail: "",
    href:
      "http://www.recipezaar.com/Chicken-Breasts-Stuffed-With-Olives-and-Goat-Cheese-113177",
    ingredients: [
      "chicken",
      "red pepper flakes",
      "oregano",
      "white wine",
      "parsley",
      "goat cheese",
      "garlic",
      "kalamata olive",
      "milk",
      "olive oil",
      "salt"
    ],
    title: "Chicken Breasts Stuffed With Olives and Goat Cheese "
  },
  {
    thumbnail: "",
    href: "http://www.recipezaar.com/Ask-for-More-Chicken-332993",
    ingredients: [
      "onion soup mix",
      "carrot",
      "celery",
      "chicken",
      "chutney",
      "water",
      "vegetable oil",
      "mayonnaise",
      "onions",
      "potato"
    ],
    title: "Ask for More Chicken "
  },
  {
    thumbnail: "",
    href: "http://www.recipezaar.com/Chicken-Quesadillas-Homemade-200392",
    ingredients: [
      "chicken",
      "monterey jack cheese",
      "flour tortillas",
      "jalapeno",
      "mozzarella cheese",
      "onions",
      "tomato",
      "vegetable oil"
    ],
    title: "Chicken Quesadillas Homemade "
  },
  {
    thumbnail: "",
    href: "http://www.recipezaar.com/BBQ-Chicken-Pizza-144689",
    ingredients: [
      "chicken",
      "brown sugar",
      "cayenne",
      "garlic salt",
      "green pepper",
      "honey",
      "italian cheese blend",
      "salad dressing",
      "margarine",
      "molasses",
      "onions",
      "barbecue sauce",
      "black pepper",
      "prepared pizza crust",
      "provolone cheese",
      "ranch dressing",
      "salt"
    ],
    title: "BBQ Chicken Pizza "
  },
  {
    thumbnail: "",
    href: "http://www.grouprecipes.com/65487/basic-chicago-style-pizza.html",
    ingredients: [
      "pizza",
      "vegetable oil",
      "cornmeal",
      "water",
      "flour",
      "sausage",
      "provolone cheese",
      "olive oil",
      "tomato",
      "yeast",
      "pepperoni",
      "salt",
      "sugar",
      "basil",
      "oregano"
    ],
    title: "Basic Chicago-style Pizza Recipe "
  },
  {
    thumbnail: "http://img.recipepuppy.com/152332.jpg",
    href: "http://www.recipezaar.com/BBQd-Cheeseburger-Pizza-299376",
    ingredients: [
      "barbecue sauce",
      "cheddar cheese",
      "onions",
      "tomato",
      "dill pickle",
      "dill relish",
      "parsley",
      "french dressing",
      "garlic powder",
      "ground beef",
      "lettuce",
      "mayonnaise",
      "mozzarella cheese",
      "pizza dough",
      "mustard"
    ],
    title: "BBQ'd Cheeseburger Pizza "
  },
  {
    thumbnail: "http://img.recipepuppy.com/623733.jpg",
    href:
      "http://www.recipezaar.com/Healthy-Italian-Bread-Sticks-or-Pizza-Crust-252423",
    ingredients: [
      "brown sugar",
      "garlic powder",
      "italian seasoning",
      "olive oil",
      "onion powder",
      "salt",
      "flour",
      "water",
      "yeast"
    ],
    title: "Healthy Italian Bread Sticks or Pizza Crust "
  },
  {
    thumbnail: "",
    href: "http://www.recipezaar.com/Bacon-Cheeseburger-Pizza-205270",
    ingredients: [
      "bacon",
      "black pepper",
      "cheddar cheese",
      "garlic",
      "ground beef",
      "mozzarella cheese",
      "onions",
      "parmesan cheese",
      "pizza sauce",
      "salt"
    ],
    title: "Bacon Cheeseburger Pizza "
  },
  {
    thumbnail: "",
    href:
      "http://www.recipezaar.com/Cinnamon-Pizza-Sticks-With-Dipping-Glaze-167598",
    ingredients: ["butter", "cinnamon", "pizza dough", "sugar"],
    title: "Cinnamon Pizza Sticks With Dipping Glaze "
  },
  {
    thumbnail: "",
    href:
      "http://www.recipezaar.com/Gluten-Free-Pepperoni-Pizza-Quesadilla-302814",
    ingredients: [
      "mozzarella cheese",
      "nonstick cooking spray",
      "pizza sauce",
      "tortilla",
      "pepperoni"
    ],
    title: "Gluten Free Pepperoni Pizza Quesadilla "
  },
  {
    thumbnail: "",
    href: "http://allrecipes.com/Recipe/Italian-Escarole-Pizza/Detail.aspx",
    ingredients: [
      "garlic",
      "escarole",
      "mozzarella cheese",
      "olive oil",
      "pizza sauce",
      "salt"
    ],
    title: "Italian Escarole Pizza "
  },
  {
    thumbnail: "http://img.recipepuppy.com/8938.jpg",
    href:
      "http://allrecipes.com/Recipe/Goat-Cheese-Arugula-Pizza---No-Red-Sauce/Detail.aspx",
    ingredients: [
      "arugula",
      "garlic",
      "olive oil",
      "pesto",
      "roma tomato",
      "pizza crust"
    ],
    title: "Goat Cheese Arugula Pizza - No Red Sauce! "
  },
  {
    thumbnail: "http://img.recipepuppy.com/34541.jpg",
    href:
      "http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805",
    ingredients: [
      "bread flour",
      "yeast",
      "olive oil",
      "salt",
      "sugar",
      "water"
    ],
    title: "Easy Peezy Pizza Dough (Bread Machine Pizza Dough) "
  }
];

db.Recipe.remove({})
  .then(() => db.Recipe.collection.insertMany(recipeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
