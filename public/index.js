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
                // console.log(data.meals);
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
                resultsContent.innerHTML = "Sorry, could not find a recipe. Try another.";

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

                    <div id="ingredients">
                        <p>${recipe.measurements.one} ${recipe.ingredients.one},</p>
                        <p>${recipe.measurements.two} ${recipe.ingredients.two},</p>
                        <p>${recipe.measurements.three} ${recipe.ingredients.three},</p>
                        <p>${recipe.measurements.four} ${recipe.ingredients.four},</p>
                        <p>${recipe.measurements.five} ${recipe.ingredients.five},</p>
                        <p>${recipe.measurements.six} ${recipe.ingredients.six},</p>
                        <p>${recipe.measurements.seven} ${recipe.ingredients.seven},</p>
                        <p>${recipe.measurements.eight} ${recipe.ingredients.eight},</p>
                        <p>${recipe.measurements.nine} ${recipe.ingredients.nine},</p>
                        <p>${recipe.measurements.ten} ${recipe.ingredients.ten},</p>
                        <p>${recipe.measurements.eleven} ${recipe.ingredients.eleven},</p>
                        <p>${recipe.measurements.twelve} ${recipe.ingredients.twelve},</p>
                        <p>${recipe.measurements.thirteen} ${recipe.ingredients.thirteen},</p>
                        <p>${recipe.measurements.fourteen} ${recipe.ingredients.fourteen},</p>
                        <p>${recipe.measurements.fifteen} ${recipe.ingredients.fifteen},</p>
                        <p>${recipe.measurements.sixteen} ${recipe.ingredients.sixteen},</p>
                        <p>${recipe.measurements.seventeen} ${recipe.ingredients.seventeen},</p>
                        <p>${recipe.measurements.eighteen} ${recipe.ingredients.eighteen},</p>
                        <p>${recipe.measurements.nineteen} ${recipe.ingredients.nineteen},</p>
                        <p>${recipe.measurements.twenty} ${recipe.ingredients.twenty},</p>
                    </div>
                </div>

                <div class="youtube-video">
                    <a href="${recipe.tutorial}" class="card-link" style="text-decoration: none;">Watch Youtube Tutorial</a>
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
    const madeResults = document.querySelector(".made-list");
    const favoriteResults = document.querySelector(".favorites-list");

    // adding click event for want to try or made
    document.addEventListener("click", (e) => {
        if (e.target.id === "wantBtn") addRecipeToTry(e);
        else if (e.target.id === "madeBtn") addRecipeToMade(e);
        else if (e.target.id === "favBtn") addRecipeToFav(e);
        else if (e.target.id === "deleteTryBtn") deleteTryRecipe(e);
        else if (e.target.id === "deleteMadeBtn") deleteMadeRecipe(e);
        else if (e.target.id === "removeBtn") removeFavoriteRecipe(e);
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
    
                        <div id="ingredients">
                        <p>${recipe.measurements.one} ${recipe.ingredients.one},</p>
                        <p>${recipe.measurements.two} ${recipe.ingredients.two},</p>
                        <p>${recipe.measurements.three} ${recipe.ingredients.three},</p>
                        <p>${recipe.measurements.four} ${recipe.ingredients.four},</p>
                        <p>${recipe.measurements.five} ${recipe.ingredients.five},</p>
                        <p>${recipe.measurements.six} ${recipe.ingredients.six},</p>
                        <p>${recipe.measurements.seven} ${recipe.ingredients.seven},</p>
                        <p>${recipe.measurements.eight} ${recipe.ingredients.eight},</p>
                        <p>${recipe.measurements.nine} ${recipe.ingredients.nine},</p>
                        <p>${recipe.measurements.ten} ${recipe.ingredients.ten},</p>
                        <p>${recipe.measurements.eleven} ${recipe.ingredients.eleven},</p>
                        <p>${recipe.measurements.twelve} ${recipe.ingredients.twelve},</p>
                        <p>${recipe.measurements.thirteen} ${recipe.ingredients.thirteen},</p>
                        <p>${recipe.measurements.fourteen} ${recipe.ingredients.fourteen},</p>
                        <p>${recipe.measurements.fifteen} ${recipe.ingredients.fifteen},</p>
                        <p>${recipe.measurements.sixteen} ${recipe.ingredients.sixteen},</p>
                        <p>${recipe.measurements.seventeen} ${recipe.ingredients.seventeen},</p>
                        <p>${recipe.measurements.eighteen} ${recipe.ingredients.eighteen},</p>
                        <p>${recipe.measurements.nineteen} ${recipe.ingredients.nineteen},</p>
                        <p>${recipe.measurements.twenty} ${recipe.ingredients.twenty},</p>
                    </div>
                </div>
    
                    <div class="youtube-video">
                        <a href="${recipe.tutorial}" target="_blank" class="card-link" style="text-decoration: none;">Watch Youtube Tutorial</a>
                    </div>
    
                    <div class="card-buttons">
                        <button id="madeBtn">Have Made</button>
                        <button id="deleteTryBtn">Delete</button>
                    </div>
                </div>
            </div>
            `;

                tryResults.insertAdjacentHTML("beforeend", recipeCard);
            }
        });
    }

    // Have Made Recipes
    function addRecipeToMade(e) {
        let recipeID = e.target.parentElement.parentElement.parentElement.id;
        console.log("added to Made:", recipeID);
        let recipe = recipeArray.find((recipe) => { return Number(recipe.id) === Number(recipeID); });
        if (!recipe.made) {
            recipe.made = true;
            recipe.toTry = false;
        }
        else recipe.made = false;

        displayRecipesMade();
    }

    function displayRecipesMade() {
        // tryResults.innerHTML = "";

        recipeArray.find((recipe) => {
            if (recipe.made) {
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
    
                        <div id="ingredients">
                        <p>${recipe.measurements.one} ${recipe.ingredients.one},</p>
                        <p>${recipe.measurements.two} ${recipe.ingredients.two},</p>
                        <p>${recipe.measurements.three} ${recipe.ingredients.three},</p>
                        <p>${recipe.measurements.four} ${recipe.ingredients.four},</p>
                        <p>${recipe.measurements.five} ${recipe.ingredients.five},</p>
                        <p>${recipe.measurements.six} ${recipe.ingredients.six},</p>
                        <p>${recipe.measurements.seven} ${recipe.ingredients.seven},</p>
                        <p>${recipe.measurements.eight} ${recipe.ingredients.eight},</p>
                        <p>${recipe.measurements.nine} ${recipe.ingredients.nine},</p>
                        <p>${recipe.measurements.ten} ${recipe.ingredients.ten},</p>
                        <p>${recipe.measurements.eleven} ${recipe.ingredients.eleven},</p>
                        <p>${recipe.measurements.twelve} ${recipe.ingredients.twelve},</p>
                        <p>${recipe.measurements.thirteen} ${recipe.ingredients.thirteen},</p>
                        <p>${recipe.measurements.fourteen} ${recipe.ingredients.fourteen},</p>
                        <p>${recipe.measurements.fifteen} ${recipe.ingredients.fifteen},</p>
                        <p>${recipe.measurements.sixteen} ${recipe.ingredients.sixteen},</p>
                        <p>${recipe.measurements.seventeen} ${recipe.ingredients.seventeen},</p>
                        <p>${recipe.measurements.eighteen} ${recipe.ingredients.eighteen},</p>
                        <p>${recipe.measurements.nineteen} ${recipe.ingredients.nineteen},</p>
                        <p>${recipe.measurements.twenty} ${recipe.ingredients.twenty},</p>
                    </div>
                </div>
    
                    <div class="youtube-video">
                        <a href="${recipe.tutorial}" target="_blank" class="card-link" style="text-decoration: none;">Watch Youtube Tutorial</a>
                    </div>
    
                    <div class="card-buttons">
                        <button id="favBtn">Favorite</button>
                        <button id="deleteMadeBtn">Delete</button>
                    </div>
                </div>
            </div>
            `;

                madeResults.insertAdjacentHTML("beforeend", recipeCard);
            }
        });
    }


    // Favorite Recipes
    function addRecipeToFav(e) {
        let recipeID = e.target.parentElement.parentElement.parentElement.id;
        console.log("added to favorites:", recipeID);
        let recipe = recipeArray.find((recipe) => { return Number(recipe.id) === Number(recipeID); });
        if (!recipe.favorite) recipe.favorite = true;
        else recipe.favorite = false;

        displayRecipesFav();
    }

    function displayRecipesFav() {
        // tryResults.innerHTML = "";

        recipeArray.find((recipe) => {
            if (recipe.made) {
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
    
                        <div id="ingredients">
                        <p>${recipe.measurements.one} ${recipe.ingredients.one},</p>
                        <p>${recipe.measurements.two} ${recipe.ingredients.two},</p>
                        <p>${recipe.measurements.three} ${recipe.ingredients.three},</p>
                        <p>${recipe.measurements.four} ${recipe.ingredients.four},</p>
                        <p>${recipe.measurements.five} ${recipe.ingredients.five},</p>
                        <p>${recipe.measurements.six} ${recipe.ingredients.six},</p>
                        <p>${recipe.measurements.seven} ${recipe.ingredients.seven},</p>
                        <p>${recipe.measurements.eight} ${recipe.ingredients.eight},</p>
                        <p>${recipe.measurements.nine} ${recipe.ingredients.nine},</p>
                        <p>${recipe.measurements.ten} ${recipe.ingredients.ten},</p>
                        <p>${recipe.measurements.eleven} ${recipe.ingredients.eleven},</p>
                        <p>${recipe.measurements.twelve} ${recipe.ingredients.twelve},</p>
                        <p>${recipe.measurements.thirteen} ${recipe.ingredients.thirteen},</p>
                        <p>${recipe.measurements.fourteen} ${recipe.ingredients.fourteen},</p>
                        <p>${recipe.measurements.fifteen} ${recipe.ingredients.fifteen},</p>
                        <p>${recipe.measurements.sixteen} ${recipe.ingredients.sixteen},</p>
                        <p>${recipe.measurements.seventeen} ${recipe.ingredients.seventeen},</p>
                        <p>${recipe.measurements.eighteen} ${recipe.ingredients.eighteen},</p>
                        <p>${recipe.measurements.nineteen} ${recipe.ingredients.nineteen},</p>
                        <p>${recipe.measurements.twenty} ${recipe.ingredients.twenty},</p>
                    </div>
                </div>
    
                    <div class="youtube-video">
                        <a href="${recipe.tutorial}" target="_blank" class="card-link" style="text-decoration: none;">Watch Youtube Tutorial</a>
                    </div>
    
                    <div class="card-buttons">
                        <button id="removeBtn">Remove Favorite</button>
                    </div>
                </div>
            </div>
            `;

                favoriteResults.insertAdjacentHTML("beforeend", recipeCard);
            }
        });
    }


        // Delete Recipes
        function deleteTryRecipe(e) {
            let recipeID = e.target.parentElement.parentElement.parentElement.id;
            let recipeRemove = e.target.parentElement.parentElement.parentElement;
            recipeRemove.remove();

            let recipe = recipeArray.find((recipe) => { return Number(recipe.id) === Number(recipeID); });
            if (!recipe.toTry) recipe.toTry = false;
            else recipe.toTry = false;
    
            displayRecipesToTry();
        }

        function deleteMadeRecipe(e) {
            let recipeID = e.target.parentElement.parentElement.parentElement.id;
            let recipeRemove = e.target.parentElement.parentElement.parentElement;
            recipeRemove.remove();

            let recipe = recipeArray.find((recipe) => { return Number(recipe.id) === Number(recipeID); });
            if (!recipe.made) recipe.made = false;
            else recipe.made = false;
    
            displayRecipesMade();
        }


        function removeFavoriteRecipe(e) {
            let recipeID = e.target.parentElement.parentElement.parentElement.id;
            let recipeRemove = e.target.parentElement.parentElement.parentElement;
            recipeRemove.remove();

            let recipe = recipeArray.find((recipe) => { return Number(recipe.id) === Number(recipeID); });
            if (!recipe.favorite) recipe.favorite = false;
            else recipe.favorite = false;
    
            // displayRecipesFav();
        }

})(window);
