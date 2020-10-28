// Recipe Box 

// Recipe Array
let recipeInfo = recipes();

// Loading information into the array 
function recipes() {
  let storedRecipeStr = localStorage.getItem("recipes");
  if (storedRecipeStr) {
    return JSON.parse(storedRecipeStr);
  } else {
    return [{
      recipeName: "insertName",
      mealType: "Dinner",
      difficulty: "Difficult",
      prepTime: "prepTime",
      ingredients: ["i1", "i2", "i3"],
      steps: ["s1", "s2", "s3"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ",
      fave: false
    }, {
      recipeName: "Banana Bread",
      mealType: "Breakfast",
      difficulty: "Intermediate",
      prepTime: "something",
      ingredients: ["2 cups all-purpose flour",
        "1 teaspoon baking soda",
        "¼ teaspoon salt", "½ cup butter", "¾ cup brown sugar", "2 eggs, beaten", "2 ⅓ cups mashed overripe bananas"
      ],
      steps: ["Preheat oven to 350 degrees F (175 degrees C). Lightly grease a 9x5 inch loaf pan.", "In a large bowl, combine flour, baking soda and salt. In a separate bowl, cream together butter and brown sugar. Stir in eggs and mashed bananas until well blended. Stir banana mixture into flour mixture; stir just to moisten. Pour batter into prepared loaf pan.", "Bake in preheated oven for 60 to 65 minutes, until a toothpick inserted into center of the loaf comes out clean. Let bread cool in pan for 10 minutes, then turn out onto a wire rack."],
      description: "This banana bread is moist and delicious with loads of banana flavor! Friends and family love my recipe and say it's by far the best",
      fave: false
    }, {
      recipeName: "Chocolate Chip Cookies",
      mealType: "Dessert",
      difficulty: "Simple",
      prepTime: "1 hour",
      ingredients: ["1 cup butter, softened", "1 cup white sugar", "1 cup packed brown sugar", "2 eggs", "2 teaspoons vanilla extract", "1 teaspoon baking soda", "2 teaspoons hot water", "½ teaspoon salt", "3 cups all-purpose flour", "2 cups semisweet chocolate chips", "1 cup chopped walnuts"],
      steps: ["Preheat oven to 350 degrees F (175 degrees C).", "Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.", "Bake for about 10 minutes in the preheated oven, or until edges are nicely browned."],
      description: "Crisp edges, chewy middles.",
      fave: false
    }];
  }
}

// Main Function (Click Handler for Page)
document.addEventListener("click", clickHandler);

function clickHandler(event) {
  console.log(event.target.id);
  if (event.target.nodeName == "BUTTON") {


    // Collapsible Side Bar
    if (event.target.id == "exploreBtn") {
      document.getElementById("mySidepanel").style.width = "250px";

      // Side Bar - Drop Down Categories
    } else if (event.target.id == "mainCategory") {
      element('category-dropdown');
    } else if (event.target.id == "meal-category") {
      element('meal-dropdown');
    } else if (event.target.id == "difficulty-category") {
      element('difficulty-dropdown');

      // Submit Recipe Form
    } else if (event.target.id == "submitRecipe") {
      clearAll();
      displayPage("form");

      // Recipe Box Home Button
    } else if (event.target.id == "returnHome") {
      clearAll();
      displayPage("homePage")
      // document.body.background = "title.jpg";

      // Side Bar (Find Recipe)
    } else if (event.target.id == "searchRecipe") {
      clearAll();
      displayPage("title-card");
      displayPage("recipeCont");
      document.getElementById("header").innerHTML = "Search"
      document.getElementById("recipeCont").innerHTML = "";
      for (let i = 0; i < recipeInfo.length; i++) {
        document.getElementById("recipeCont").append(recipePrev(recipeInfo[i]));
      }

      // Categories
    } else if (event.target.parentElement.id == "meal-dropdown" || event.target.parentElement.id == "difficulty-dropdown") {

      clearAll();
      displayPage("recipeCont");
      document.getElementById("recipeCont").innerHTML = "";

      console.log(event.target.innerHTML);

      displayPage("title-card");
      document.getElementById('header').innerHTML = event.target.innerHTML;

      for (let i = 0; i < recipeInfo.length; i++) {
        if (event.target.innerHTML == recipeInfo[i].mealType) {
          document.getElementById("recipeCont").append(recipePrev(recipeInfo[i]));

        } else if (event.target.innerHTML == recipeInfo[i].difficulty) {
          document.getElementById("recipeCont").append(recipePrev(recipeInfo[i]));
        }
      }

      // Side Bar (Random Recipe)
    } else if (event.target.id == "getLucky") {
      clearAll();
      displayPage("mrDiv");
      document.getElementById("mrDiv").innerHTML = "";
      document.getElementById("mrDiv").append(MainRecipe(recipeInfo[Math.floor(Math.random() * recipeInfo.length)]));

      // Favourite Recipes
    } else if (event.target.id == "favRecipes") {
      clearAll();
      displayPage("recipeCont");
      document.getElementById("recipeCont").innerHTML = "";

      for (let i = 0; i < recipeInfo.length; i++) {
        if (recipeInfo[i].fave == true) {
          document.getElementById("recipeCont").append(recipePrev(recipeInfo[i]));
        }
      }
    } 

    // Making Sidepanel pop back in
    if ((event.target.parentElement.id == "mySidepanel" && event.target.id != "mainCategory") || (event.target.parentElement.id == "meal-dropdown" || event.target.parentElement.id == "difficulty-dropdown")) {
      document.getElementById("mySidepanel").style.width = "0px";
    }
  } else if (event.target.id == "recipeSearch") {
    document.getElementById('recipeSearch').addEventListener('keyup', searchRecipes);

  }
}

function searchRecipes() {
  console.log('works');
  let searchTerm = document.getElementById('recipeSearch').value;
  searchTerm = searchTerm.toLowerCase();

  document.getElementById('recipeCont').innerHTML = "";

  if (searchTerm == "") {
    for (let i = 0; i < recipeInfo.length; i++) {
      document.getElementById("recipeCont").append(recipePrev(recipeInfo[i]));
    }
  } else {

    for (let i = 0; i < recipeInfo.length; i++) {
      if (checkResults(searchTerm, recipeInfo[i])) {
        document.getElementById("recipeCont").append(recipePrev(recipeInfo[i]));
      }
    }
  }
}

function checkResults(searchVal, theObject) {
  let matches = Object.values(theObject);
  for (let i = 0; i < matches.length; i++) {
    if (typeof (matches[i]) == "string") {
      let value = matches[i].toLowerCase();
      if (value.includes(searchVal)) {
        return true;
      }
    } else if (typeof (matches[i]) == "object") {
      for (let m = 0; m < matches[i].length; m++) {
        let value = matches[i][m].toLowerCase();
        if (value.includes(searchVal)) {
          return true;
        }
      }
    }
  }
  return false;
}



// Recipe Form Function
document.getElementById("submitBtn").addEventListener("click", submitForm);

function submitForm() {
  splitText();
  let ing = ingFunc();
  let step = stepFunc();
  let descrip = descripFunc();

  recipeInfo.push({
    recipeName: document.getElementById("recipeName").value,
    mealType: document.getElementById("mealType").value,
    difficulty: document.getElementById("difficulty").value,
    prepTime: document.getElementById("prepTime").value,
    ingredients: ing,
    steps: step,
    description: descrip,
    fave: false
  });

  localStorage.setItem("recipes", JSON.stringify(recipeInfo));

  let inputEls = document.querySelectorAll(".clear");

  for (let i = 0; i < inputEls.length; i++) {
    inputEls[i].value = "";
  }
}