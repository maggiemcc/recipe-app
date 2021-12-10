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
                        ingredients: {
                            1: recipe.strIngredient1,
                            2: recipe.strIngredient2,
                            3: recipe.strIngredient3,
                            4: recipe.strIngredient4,
                            5: recipe.strIngredient5,
                            6: recipe.strIngredient6,
                            7: recipe.strIngredient7,
                            8: recipe.strIngredient8,
                            9: recipe.strIngredient9,
                            10: recipe.strIngredient10,
                            11: recipe.strIngredient11,
                            12: recipe.strIngredient12,
                            13: recipe.strIngredient13,
                            14: recipe.strIngredient14,
                            15: recipe.strIngredient15,
                            16: recipe.strIngredient16,
                            17: recipe.strIngredient17,
                            18: recipe.strIngredient18,
                            19: recipe.strIngredient19,
                            20: recipe.strIngredient20,
                        },
                        measurements: {
                            1: recipe.strMeasure1,
                            2: recipe.strMeasure2,
                            3: recipe.strMeasure3,
                            4: recipe.strMeasure4,
                            5: recipe.strMeasure5,
                            6: recipe.strMeasure6,
                            7: recipe.strMeasure7,
                            8: recipe.strMeasure8,
                            9: recipe.strMeasure9,
                            10: recipe.strMeasure10,
                            11: recipe.strMeasure11,
                            12: recipe.strMeasure12,
                            13: recipe.strMeasure13,
                            14: recipe.strMeasure14,
                            15: recipe.strMeasure15,
                            16: recipe.strMeasure16,
                            17: recipe.strMeasure17,
                            18: recipe.strMeasure18,
                            19: recipe.strMeasure19,
                            20: recipe.strMeasure20,
                        },
                        tutorial: recipe.strYoutube,
                        try: false,
                        made: false,
                        favorite: false,
                    }
                })
                console.log("array >", recipeArray);
            })
            .catch((error) => {
                console.error(error);
            });
    }


})(window);