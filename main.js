// Recipe Box 

// Recipe Array
let recipeInfo = recipes();

function recipes() {
  let storedRecipeStr = localStorage.getItem("recipes");
  if (storedRecipeStr) {
    return JSON.parse(storedRecipeStr);
  } else {
    return [{
      recipeName: "recipeName",
      mealType: "mealType",
      difficulty: "difficulty",
      prepTime: "prepTime",
      ingredients: ["i1", "i2", "i3"],
      steps: ["s1", "s2", "s3"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem "
    }];
  }
}

// Main Function (Click Handler for Page)
document.addEventListener("click", clickHandler);

function clickHandler(event) {
  if (event.target.nodeName == "BUTTON") {
    console.log(event.target.id);

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
      displayPage("title-card");
      ("recipeCont");

      // Side Bar (Find Recipe)
    } else if (event.target.id == "searchRecipe") {
      clearAll();
      displayPage("title-card");
      displayPage("recipeCont");
      document.getElementById("recipeCont").innerHTML = "";
      for (let i = 0; i < recipeInfo.length; i++) {
        document.getElementById("recipeCont").append(recipePrev(recipeInfo[i]));
      }

      // Categories
    // } else if (document.getElementsByTagName("button").value == "breakfast") {
    //   alert("nerd");
    //   clearAll();
    //   displayPage("recipeCont");
    //   document.getElementById("recipeCont").innerHTML = "";
    //   for (let i = 0; i < recipeInfo.length; i++) {
    //     if (recip) {
    //       document.getElementById("recipeCont").append(recipePrev());
    //     }
    //   }

      // Side Bar (Random Recipe)
    } else if (event.target.id == "getLucky") {
      clearAll();
      displayPage("mrDiv");
      document.getElementById("mrDiv").innerHTML = "";
      document.getElementById("mrDiv").append(MainRecipe(recipeInfo[Math.floor(Math.random() * recipeInfo.length)]));

      // Side Bar (About)
    } else if (event.target.id == "about") {
      clearAll();
      displayPage("mrDiv");
      document.getElementById("mrDiv").innerHTML = "";
      document.getElementById("mrDiv").append(MainRecipe(recipeInfo[0]));
    }

    // Making Sidepanel pop back in
    if ((event.target.parentElement.id == "mySidepanel" && event.target.id != "mainCategory") || (event.target.parentElement.id == "meal-dropdown" || event.target.parentElement.id == "difficulty-dropdown")) {
      document.getElementById("mySidepanel").style.width = "0px";
    }
  } 
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
    description: descrip
  });
  console.log(recipeInfo);

  localStorage.setItem("recipes", JSON.stringify(recipeInfo));

  let inputEls = document.querySelectorAll(".clear");

  for (let i = 0; i < inputEls.length; i++) {
    inputEls[i].value = "";
  }
}

// Main Recipe Create Function 
function MainRecipe(aRecipe) {
  let mrDiv = document.createElement('div');

  mrDiv.innerHTML = `
  <h1 class="recipeName">${aRecipe.recipeName}</h1>
  <p>${aRecipe.description}</p>
  <div class="subRecipeMenu">
    <div class="textCont">
      <h3 class="subh3">Meal Type:</h3><p class="subP">${aRecipe.mealType}</p>
    </div>
    <div class="textCont">
      <h3 class="subh3">Difficulty:</h3><p class="subP">${aRecipe.difficulty}</p>
    </div>
    <div class="textCont">
      <h3 class="subh3">Prep Time:</h3><p class="subP">${aRecipe.prepTime}</p>
    </div>
  </div>
  <h2 class="MainRecipeH2">Ingredients</h2>`

  // Main Recipe Container
  mrDiv.classList.add("mainRecipe");

  // Ingredients 
  let ulEl = document.createElement('ul');
  for (let i = 0; i < aRecipe.ingredients.length; i++) {
    let liEl = document.createElement('li');
    liEl.innerHTML = aRecipe.ingredients[i];
    ulEl.append(liEl);
  }
  mrDiv.append(ulEl)

  // Instructions
  let h2El = document.createElement('h2');
  h2El.innerHTML = "Instructions";
  h2El.classList.add("MainRecipeH2");
  mrDiv.append(h2El);

  let olEl = document.createElement('ol');
  for (let i = 0; i < aRecipe.steps.length; i++) {
    let liEl = document.createElement('li');
    liEl.innerHTML = aRecipe.steps[i];
    olEl.append(liEl);
  }
  mrDiv.append(olEl)

  return mrDiv;
}

// Recipe Preview Create Function
function recipePrev(aRecipe) {
  let rcDiv = document.createElement('div');
  rcDiv.classList.add("recipeCard");
  
  let titleDiv = document.createElement('div');
  titleDiv.innerHTML = `<h2><a onclick="prevDiv()" href='#'>${aRecipe.recipeName}</a></h2>`
  rcDiv.append(titleDiv);

  let infoDiv = document.createElement('div');
  infoDiv.innerHTML = `
  <p><strong>Meal Type: </strong>${aRecipe.mealType}</p>
  <p><strong>Difficulty: </strong>${aRecipe.difficulty}</p>
  <p class="pOverflow"><strong>Description: </strong>${aRecipe.description}</p>`
  rcDiv.append(infoDiv);

  return rcDiv;
}

function prevDiv() {
  alert("loser");
  // for (let i = 0; i < recipeInfo.length; i++) {
  //   if (aRecipe.mealType ==) {
  //     document.getElementById("mrDiv").append(MainRecipe(recipeInfo[i]));
  //   }
  // }
}