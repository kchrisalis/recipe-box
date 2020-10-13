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
    }
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

function MainRecipe(array) {
  let mrDiv = document.createElement('div');
  let elsR = {
    div: document.createElement('div'),
    title: document.createElement('h1'),
    p: document.createElement('p'),
    elLi: document.createElement('li')
    }

  elsR.title.innerHTML = `${array.recipeName}`;
  mrDiv.append(elsR.p);

  elsR.p.innerHTML = `${array.description}`;
  mrDiv.append(elsR.p);

  mrDiv.append(elsR.div);
  elsR.div.append(elsR.p.innerHTML = `Meal Type: ${array.mealType}`);
  elsR.div.append(elsR.p.innerHTML =  `Difficulty: ${array.difficulty}`)
  elsR.div.append(elsR.p.innerHTML = `Prep Time: ${array.prepTime}`)

  for (let i = 0; i < array.ingredients.length; i++) {
    elsR.elLi.appendChild(`${array.ingredients[i]}`);
  }
  mrDiv.append(elsR.elLi);

  for (let i = 0; i < array.steps.length; i++) {
    elsR.stepsLi.appendChild(`${array.ingredients[i]}`);
  }
  mrDiv.append(elsR.elLi);

  return mrDiv;
}

MainRecipe(recipeInfo);