(function (window) {
    // Food Card Dropdowns
    document
        .querySelector(".results-dropdown")
        .addEventListener("click", toggleSearchResults);
    function toggleSearchResults() {
        let content = document.querySelector(".results-list");
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    }

    // document.querySelector(".instructions-dropdown").addEventListener("click", toggleInstructions)
    // function toggleInstructions() {
    //     let content = document.querySelector("#instructions");
    //     if (content.style.display === "none") {
    //         content.style.display = "block";
    //     } else {
    //         content.style.display = "none";
    //     }
    // }

    // document.querySelector(".ingredients-dropdown").addEventListener("click", toggleIngredients)
    // function toggleIngredients() {
    //     let content = document.querySelector("#ingredients");
    //     if (content.style.display === "none") {
    //         content.style.display = "block";
    //     } else {
    //         content.style.display = "none";
    //     }
    // }

    // Category Dropdowns
    document
        .querySelector(".want-to-try-dropdown")
        .addEventListener("click", toggleWant);
    function toggleWant() {
        let content = document.querySelector(".want-list");
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    }

    document
        .querySelector(".made-dropdown")
        .addEventListener("click", toggleMade);
    function toggleMade() {
        let content = document.querySelector(".made-list");
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    }

    document
        .querySelector(".favorites-dropdown")
        .addEventListener("click", toggleFavorites);
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
    });

    searchInput.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            resultsContent.innerHTML = " ";
            fetchRecipeApi();
        }
    });

    function fetchRecipeApi() {
        let searchInputValue = searchInput.value;

        fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data.meals);
                recipeArray = data.meals.map((recipe) => {
                    return {
                        meal: recipe.strMeal,
                        id: recipe.idMeal,
                        image: recipe.strMealThumb,
                        instructions: recipe.strInstructions,
                        ingredients: {
                            one: recipe.strIngredient1,
                            two: recipe.strIngredient2,
                            three: recipe.strIngredient3,
                            four: recipe.strIngredient4,
                            five: recipe.strIngredient5,
                            six: recipe.strIngredient6,
                            seven: recipe.strIngredient7,
                            eight: recipe.strIngredient8,
                            nine: recipe.strIngredient9,
                            ten: recipe.strIngredient10,
                            eleven: recipe.strIngredient11,
                            twelve: recipe.strIngredient12,
                            thirteen: recipe.strIngredient13,
                            fourteen: recipe.strIngredient14,
                            fifteen: recipe.strIngredient15,
                            sixteen: recipe.strIngredient16,
                            seventeen: recipe.strIngredient17,
                            eighteen: recipe.strIngredient18,
                            nineteen: recipe.strIngredient19,
                            twenty: recipe.strIngredient20,
                        },
                        measurements: {
                            one: recipe.strMeasure1,
                            two: recipe.strMeasure2,
                            three: recipe.strMeasure3,
                            four: recipe.strMeasure4,
                            five: recipe.strMeasure5,
                            six: recipe.strMeasure6,
                            seven: recipe.strMeasure7,
                            eight: recipe.strMeasure8,
                            nine: recipe.strMeasure9,
                            ten: recipe.strMeasure10,
                            eleven: recipe.strMeasure11,
                            twelve: recipe.strMeasure12,
                            thirteen: recipe.strMeasure13,
                            fourteen: recipe.strMeasure14,
                            fifteen: recipe.strMeasure15,
                            sixteen: recipe.strMeasure16,
                            seventeen: recipe.strMeasure17,
                            eighteen: recipe.strMeasure18,
                            nineteen: recipe.strMeasure19,
                            twenty: recipe.strMeasure20,
                        },
                        tutorial: recipe.strYoutube,
                        toTry: false,
                        made: false,
                        favorite: false,
                    };
                });
                displayRecipes();

                console.log("array ->", recipeArray);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // displaying content in results
    function displayRecipes() {
        recipeArray.forEach((recipe) => {
            let recipeCard = `
            <div class="card" id="${recipe.id}">
            <img src="${recipe.image}" class="card-img-top" alt="temporary">
            <div class="card-body">
                <h5 class="card-title">${recipe.meal}</h5>
                <div>
                    <div class="instructions-dropdown">
                        <h6>Cooking Instructions</h6>
                        <i class="fas fa-caret-down"></i>
                    </div>

                    <div id="instructions">
                        <p>${recipe.instructions}</p>
                    </div>
                </div>

                <div>
                    <div class="ingredients-dropdown">
                        <h6>Ingredients</h6>
                        <i class="fas fa-caret-down"></i>
                    </div>

                    <ul class="list-group list-group-flush" id="ingredients">
                        <li class="list-group-item">${recipe.ingredients.one}</li>
                        <li class="list-group-item">${recipe.ingredients.two}</li>
                        <li class="list-group-item">${recipe.ingredients.three}</li>
                        <li class="list-group-item">${recipe.ingredients.four}</li>
                        <li class="list-group-item">${recipe.ingredients.five}</li>
                        <li class="list-group-item">${recipe.ingredients.six}</li>
                        <li class="list-group-item">${recipe.ingredients.seven}</li>
                        <li class="list-group-item">${recipe.ingredients.eight}</li>
                        <li class="list-group-item">${recipe.ingredients.nine}</li>
                        <li class="list-group-item">${recipe.ingredients.ten}</li>
                        <li class="list-group-item">${recipe.ingredients.eleven}</li>
                        <li class="list-group-item">${recipe.ingredients.twelve}</li>
                        <li class="list-group-item">${recipe.ingredients.thirteen}</li>
                        <li class="list-group-item">${recipe.ingredients.fourteen}</li>
                        <li class="list-group-item">${recipe.ingredients.fifteen}</li>
                        <li class="list-group-item">${recipe.ingredients.sixteen}</li>
                        <li class="list-group-item">${recipe.ingredients.seventeen}</li>
                        <li class="list-group-item">${recipe.ingredients.eighteen}</li>
                        <li class="list-group-item">${recipe.ingredients.nineteen}</li>
                        <li class="list-group-item">${recipe.ingredients.twenty}</li>
                    </ul>
                </div>

                <div class="youtube-video">
                    <a href="${recipe}" class="card-link" style="text-decoration: none;">Watch Youtube Tutorial</a>
                </div>

                <div class="card-buttons">
                    <button class="want-to-try" id="wantBtn">Want to Try</button>
                    <button id="madeBtn">Have Made</button>
                </div>
            </div>
        </div>
      `;

            resultsContent.insertAdjacentHTML("beforeend", recipeCard);
        });
    }

    const tryResults = document.querySelector(".want-list");

    // adding click event for want to try or made
    document.addEventListener("click", (e) => {
        if (e.target.id === "wantBtn") addRecipeToTry(e);
        else if (e.target.id === "madeBtn") addRecipeToMade(e);
    });

    // Want To Try list
    function addRecipeToTry(e) {
        let recipeID = e.target.parentElement.parentElement.parentElement.id;
        console.log("added to try:", recipeID);
        let recipe = recipeArray.find((recipe) => { return Number(recipe.id) === Number(recipeID); });
        if (!recipe.toTry) recipe.toTry = true;
        else recipe.toTry = false;

        displayRecipesToTry();
    }

    function displayRecipesToTry() {
        // tryResults.innerHTML = "";

        recipeArray.find((recipe) => {
            if (recipe.toTry) {
                let recipeCard = `
                <div class="card" id="${recipe.id}">
                <img src="${recipe.image}" class="card-img-top" alt="temporary">
                <div class="card-body">
                    <h5 class="card-title">${recipe.meal}</h5>
                    <div>
                        <div class="instructions-dropdown">
                            <h6>Cooking Instructions</h6>
                            <i class="fas fa-caret-down"></i>
                        </div>
    
                        <div id="instructions">
                            <p>${recipe.instructions}</p>
                        </div>
                    </div>
    
                    <div>
                        <div class="ingredients-dropdown">
                            <h6>Ingredients</h6>
                            <i class="fas fa-caret-down"></i>
                        </div>
    
                        <ul class="list-group list-group-flush" id="ingredients">
                            <li class="list-group-item">${recipe.ingredients.one}</li>
                            <li class="list-group-item">${recipe.ingredients.two}</li>
                            <li class="list-group-item">${recipe.ingredients.three}</li>
                            <li class="list-group-item">${recipe.ingredients.four}</li>
                            <li class="list-group-item">${recipe.ingredients.five}</li>
                            <li class="list-group-item">${recipe.ingredients.six}</li>
                            <li class="list-group-item">${recipe.ingredients.seven}</li>
                            <li class="list-group-item">${recipe.ingredients.eight}</li>
                            <li class="list-group-item">${recipe.ingredients.nine}</li>
                            <li class="list-group-item">${recipe.ingredients.ten}</li>
                            <li class="list-group-item">${recipe.ingredients.eleven}</li>
                            <li class="list-group-item">${recipe.ingredients.twelve}</li>
                            <li class="list-group-item">${recipe.ingredients.thirteen}</li>
                            <li class="list-group-item">${recipe.ingredients.fourteen}</li>
                            <li class="list-group-item">${recipe.ingredients.fifteen}</li>
                            <li class="list-group-item">${recipe.ingredients.sixteen}</li>
                            <li class="list-group-item">${recipe.ingredients.seventeen}</li>
                            <li class="list-group-item">${recipe.ingredients.eighteen}</li>
                            <li class="list-group-item">${recipe.ingredients.nineteen}</li>
                            <li class="list-group-item">${recipe.ingredients.twenty}</li>
                        </ul>
                    </div>
    
                    <div class="youtube-video">
                        <a href="${recipe}" class="card-link" style="text-decoration: none;">Watch Youtube Tutorial</a>
                    </div>
    
                    <div class="card-buttons">
                        <button id="madeBtn">Have Made</button>
                        <button id="favBtn">Favorite</button>
                        <button id="deleteBtn">Delete</button>
                    </div>
                </div>
            </div>
            `;

                tryResults.insertAdjacentHTML("beforeend", recipeCard);
            }
        });
    }
})(window);
