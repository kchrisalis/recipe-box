// Recipe Box 

// Add Recipe Form

// Search Page

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

var dropdown = document.getElementsByClassName("dropdownBtn");
var i;

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// Search Recipes

document.getElementById("searchRecipe").addEventListener("click", resetPage);

function resetPage() {
  document.getElementById("recipeCont").innerHTML = "";
}


// Submit Recipe Function 
document.getElementById("submit").addEventListener("click", formSheet);

function formSheet() {
  document.getElementById("recipeCont").style.display = "none";
  document.getElementById("title-card").style.display = "none";
  document.getElementById("form").style.display = "block";

}


// Find Recipe
document.getElementById('searchRecipe').addEventListener("click", recipePage);

function recipePage() {
  document.getElementById("title-card").style.display = "none";
  document.getElementById("mySidepanel").style.width = "0";
}