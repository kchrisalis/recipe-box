// Recipe Box 

// Main Function (Click Handler for Page)
document.addEventListener("click", clickHandler);

function clickHandler(event) {
  if (event.target.nodeName == "BUTTON") {
    console.log(event.target.id);

    // Collapsible Side Bar
    if (event.target.id == "exploreBtn") {
      document.getElementById("mySidepanel").style.width = "250px";
    } else if (event.target.id == "closeBtn") {
      document.getElementById("mySidepanel").style.width = "0px";

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

    } else if (event.target.id == "searchRecipe") {
      clearAll();
      displayPage("title-card");
      displayPage("recipeCont");
      document.getElementById("recipeCont").innerHTML = "";
      for (let i = 0; i < recipeInfo.length; i++) {
        document.getElementById("recipeCont").append(recipePrev(recipeInfo[i]));
      }

    } else if (event.target.id == "returnHome") {
      clearAll();
      displayPage("title-card");
      ("recipeCont");

    } else if (event.target.id == "toRecipe") {
      clearAll();
      displayPage("mainRecipe");

    } else if (event.target.id == "about") {
      clearAll();
      displayPage("mrDiv");
      document.getElementById("mrDiv").innerHTML = "";
      document.getElementById("mrDiv").append(MainRecipe(recipeInfo[0]));
    }
  }
}

// Recipe Form Function
document.getElementById("submitBtn").addEventListener("click", submitForm);

let recipeInfo = [{
  recipeName: "recipeName",
  mealType: "mealType",
  difficulty: "difficulty",
  prepTime: "prepTime",
  ingredients: ["i1", "i2", "i3"],
  steps: ["s1", "s2", "s3"],
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem "
}];

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
}

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

function recipePrev(aRecipe) {
  let rcDiv = document.createElement('div');
  rcDiv.classList.add("recipeCard");

  let h2El = document.createElement('h2');
  h2El.innerHTML = aRecipe.recipeName;
  rcDiv.append(h2El);

  let infoDiv = document.createElement('div');
  infoDiv.innerHTML = `
  <p><strong>Meal Type: </strong>${aRecipe.mealType}</p>
  <p><strong>Difficulty: </strong>${aRecipe.difficulty}</p>
  <p class="pOverflow"><strong>Description: </strong>${aRecipe.description}</p>`
  rcDiv.append(infoDiv);

  return rcDiv;
}