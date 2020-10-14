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
      displayPage("form")

    } else if (event.target.id == "searchRecipe") {
      clearAll();
      displayPage("title-card");

    } else if (event.target.id == "returnHome") {
      clearAll();
      displayPage("title-card");
      displayPage("recipeCont");

    } else if (event.target.id == "toRecipe") {
      clearAll();
      displayPage("mainRecipe");

    } else if (event.target.id == "about")
      clearAll();
      MainRecipe(recipeInfo[1]);
  }
}

// Recipe Form Function
document.getElementById("submitBtn").addEventListener("click", submitForm);

let recipeInfo = [];

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
  let elsR = {
    div: document.createElement('div'),
    title: document.createElement('h1'),
    h2: document.createElement('h2'),
    h3: document.createElement('h3'),
    p: document.createElement('p'),
    button: document.createElement('button'),
    ol: document.createElement('ol'),
    ul: document.createElement('ul')
  }

  // Main Recipe Container
  mrDiv.classList.add("mainRecipe");

  // Recipe Name
  elsR.title.innerHTML = `${aRecipe.recipeName}`;
  elsR.title.classList.add("recipeName");
  mrDiv.append(elsR.p);

  // Quick Description 
  elsR.p.innerHTML = `${aRecipe.description}`;
  mrDiv.append(elsR.p);

  // Main Recipe Sub Box
  elsR.div.classList.add("textCont");
  elsR.p.classList.add("subP");
  elsR.h3.classList.add("subH3");

  els.h3.innerHTML = "Meal Type:";
  elsR.div.append(elsR.p.innerHTML = `${aRecipe.mealType}`);
  els.h3.innerHTML = "Difficulty:";
  elsR.div.append(elsR.p.innerHTML = `${aRecipe.difficulty}`);
  els.h3.innerHTML = "Prep Time:";
  elsR.div.append(elsR.p.innerHTML = `${aRecipe.prepTime}`);
  elsR.div.append(elsR.button.innerHTML = "Favourite This Recipe");
  mrDiv.append(elsR.div);

  // Ingredients (unordered)
  els.h2.classList.add("MainRecipeH2");
  mrDiv.append(els.h2.innerHTML = "Ingredients");
  for (let i = 0; i < aRecipe.ingredients.length; i++) {
    let li = document.createElement('li')
    li.innerHTML = `${aRecipe.ingredients[i]}`;
    els.ol.append();
  }
  mrDiv.append(els.ol);

  // Instructions (ordered)
  mrDiv.append(els.h2.innerHTML = "Instructions");
  for (let i = 0; i < aRecipe.steps.length; i++) {
    let li = document.createElement('li')
    li.innerHTML = `${aRecipe.steps[i]}`;
    els.ul.append();
  }
  mrDiv.append(elsR.ul);

  return mrDiv;
}