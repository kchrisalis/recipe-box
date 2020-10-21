// Helper Functions

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

// Preview Recipe -> Main Div
function prevDiv(rName) {
    for (let i = 0; i < recipeInfo.length; i++) {
      if (rName == recipeInfo[i].recipeName) {
        clearAll();
        document.getElementById("content").append(MainRecipe(recipeInfo[i]));
      }
    }
  }