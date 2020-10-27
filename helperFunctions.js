// Helper Functions

// Display Functions

// Dropdown Category Function
function element(elementId) {
  if (document.getElementById(elementId).style.display == "block") {
    document.getElementById(elementId).style.display = "none";
  } else {
    document.getElementById(elementId).style.display = "block";
  }
}

// Clear Page
function clearAll() {
  for (i = 0; i < document.getElementById("content").children.length; i++) {
    document.getElementById("content").children[i].style.display = "none";
  }
}

// Display Page
function displayPage(divId) {
  document.getElementById(divId).style.display = "flex";
}

// Preview Recipe -> Main Div
function prevDiv(rName) {
  for (let i = 0; i < recipeInfo.length; i++) {
    if (rName == recipeInfo[i].recipeName) {
      clearAll();
      document.getElementById("content").append(MainRecipe(recipeInfo[i]));
    }
  }
}


// Formatting Recipe Information 

// Split Text for Recipe Form
function splitText() {
  ingFunc = function () {
    let ingredients = document.getElementById("ingredients").value;
    let ingredientsArray = ingredients.split("\n");
    return ingredientsArray;
  }

  stepFunc = function () {
    let steps = document.getElementById("steps").value;
    let stepsArray = steps.split("\n");
    return stepsArray;
  }

  descripFunc = function () {
    let description = document.getElementById("description").value;
    let descriptionArray = description.split("\n");
    return descriptionArray;
  }
}

// Creating Divs

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
    <button id="favourites" class="faveR">Add To Favourites</button>
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
  titleDiv.innerHTML = `<h2><a onclick="prevDiv('${aRecipe.recipeName}')" href='#'>${aRecipe.recipeName}</a></h2>`
  rcDiv.append(titleDiv);

  let infoDiv = document.createElement('div');
  infoDiv.innerHTML = `
    <p><strong>Meal Type: </strong>${aRecipe.mealType}</p>
    <p><strong>Difficulty: </strong>${aRecipe.difficulty}</p>
    <p class="pOverflow"><strong>Description: </strong>${aRecipe.description}</p>`
  rcDiv.append(infoDiv);

  return rcDiv;
}