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