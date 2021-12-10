(function (window) {

// Food Card Dropdowns
document.querySelector(".results-dropdown").addEventListener("click", toggleSearchResults)
function toggleSearchResults() {
    let content = document.querySelector(".results-list");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

document.querySelector(".instructions-dropdown").addEventListener("click", toggleInstructions)
function toggleInstructions() {
    let content = document.querySelector("#instructions");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

document.querySelector(".ingredients-dropdown").addEventListener("click", toggleIngredients)
function toggleIngredients() {
    let content = document.querySelector("#ingredients");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

// Category Dropdowns
document.querySelector(".want-to-try-dropdown").addEventListener("click", toggleWant)
function toggleWant() {
    let content = document.querySelector(".want-list");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

document.querySelector(".made-dropdown").addEventListener("click", toggleMade)
function toggleMade() {
    let content = document.querySelector(".made-list");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

document.querySelector(".favorites-dropdown").addEventListener("click", toggleFavorites)
function toggleFavorites() {
    let content = document.querySelector(".favorites-list");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}


// SEARCH SECTION
const searchInput = document.querySelector("input");
const resultsContent = document.querySelector(".results-list");
const getRecipesBtn = document.querySelector(".getRecipes");

getRecipesBtn.addEventListener("click", () => {
    resultsContent.innerHTML = " ";
    fetchRecipeApi();
})

searchInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        resultsContent.innerHTML = " ";
        fetchBooksApi();
    }
})


})(window);