// // Recipe Box 

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
      document.getElementById("recipeCont").style.display = "none";
      document.getElementById("title-card").style.display = "none";
      document.getElementById("form").style.display = "block";

    } else if (event.target.id == "searchRecipe") {
      document.getElementById("title-card").style.display = "none";
    }
  }
}


// Dropdown Category Function
function element(elementId) {
  if (document.getElementById(elementId).style.display == "none") {
    document.getElementById(elementId).style.display = "block";
  } else {
    document.getElementById(elementId).style.display = "none";
  }
}