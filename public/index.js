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
    let recipeArray = [];

    getRecipesBtn.addEventListener("click", () => {
        resultsContent.innerHTML = " ";
        fetchRecipeApi();
    })

    searchInput.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            resultsContent.innerHTML = " ";
            fetchRecipeApi();
        }
    })

    function fetchRecipeApi() {
        let searchInputValue = searchInput.value;

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.meals)
                recipeArray = data.meals.map((recipe) => {
                    return {
                        meal: recipe.strMeal,
                        image: recipe.strMealThumb,
                        instructions: recipe.strInstructions,
                        // ingredients: {
                        //     1: String,
                        //     2: String,
                        //     3: String,
                        //     4: String,
                        //     5: String,
                        //     6: String,
                        //     7: String,
                        //     8: String,
                        //     9: String,
                        //     10: String,
                        //     11: String,
                        //     12: String,
                        //     13: String,
                        //     14: String,
                        //     15: String,
                        //     16: String,
                        //     17: String,
                        //     18: String,
                        //     19: String,
                        //     20: String,
                        // },
                        // measurements: {
                        //     1: String,
                        //     2: String,
                        //     3: String,
                        //     4: String,
                        //     5: String,
                        //     6: String,
                        //     7: String,
                        //     8: String,
                        //     9: String,
                        //     10: String,
                        //     11: String,
                        //     12: String,
                        //     13: String,
                        //     14: String,
                        //     15: String,
                        //     16: String,
                        //     17: String,
                        //     18: String,
                        //     19: String,
                        //     20: String,
                        // },
                        tutorial: recipe.strYoutube,
                        try: false,
                        made: false,
                        favorite: false,
                    }

                })
            })
            .catch((error) => {
                console.error(error);
            });
    }


})(window);