(function (window) {
    // Food Card Dropdowns
    document
        .querySelector(".results-dropdown")
        .addEventListener("click", toggleSearchResults);
    function toggleSearchResults() {
        let content = document.querySelector(".results-list");
        if (content.style.display === "none") {
            content.style.display = "flex";
        } else {
            content.style.display = "none";
        }
    }

    // Category Dropdowns
    document
        .querySelector(".want-to-try-dropdown")
        .addEventListener("click", toggleWant);
    function toggleWant() {
        let content = document.querySelector(".want-list");
        if (content.style.display === "none") {
            content.style.display = "flex";
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
            content.style.display = "flex";
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
            content.style.display = "flex";
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
                recipeArray = data.meals.map((recipe) => {
                    return {
                        meal: recipe.strMeal,
                        identity: recipe.idMeal,
                        image: recipe.strMealThumb,
                        instructions: recipe.strInstructions,
                        ingredientOne: recipe.strIngredient1,
                        ingredientTwo: recipe.strIngredient2,
                        ingredientThree: recipe.strIngredient3,
                        ingredientFour: recipe.strIngredient4,
                        ingredientFive: recipe.strIngredient5,
                        ingredientSix: recipe.strIngredient6,
                        ingredientSeven: recipe.strIngredient7,
                        ingredientEight: recipe.strIngredient8,
                        ingredientNine: recipe.strIngredient9,
                        ingredientTen: recipe.strIngredient10,
                        ingredientEleven: recipe.strIngredient11,
                        ingredientTwelve: recipe.strIngredient12,
                        ingredientThirteen: recipe.strIngredient13,
                        ingredientFourteen: recipe.strIngredient14,
                        ingredientFifteen: recipe.strIngredient15,
                        ingredientSixteen: recipe.strIngredient16,
                        ingredientSeventeen: recipe.strIngredient17,
                        ingredientEighteen: recipe.strIngredient18,
                        ingredientNineteen: recipe.strIngredient19,
                        ingredientTwenty: recipe.strIngredient20,
                        measureOne: recipe.strMeasure1,
                        measureTwo: recipe.strMeasure2,
                        measureThree: recipe.strMeasure3,
                        measureFour: recipe.strMeasure4,
                        measureFive: recipe.strMeasure5,
                        measureSix: recipe.strMeasure6,
                        measureSeven: recipe.strMeasure7,
                        measureEight: recipe.strMeasure8,
                        measureNine: recipe.strMeasure9,
                        measureTen: recipe.strMeasure10,
                        measureEleven: recipe.strMeasure11,
                        measureTwelve: recipe.strMeasure12,
                        measureThirteen: recipe.strMeasure13,
                        measureFourteen: recipe.strMeasure14,
                        measureFifteen: recipe.strMeasure15,
                        measureSixteen: recipe.strMeasure16,
                        measureSeventeen: recipe.strMeasure17,
                        measureEighteen: recipe.strMeasure18,
                        measureNineteen: recipe.strMeasure19,
                        measureTwenty: recipe.strMeasure20,
                        tutorial: recipe.strYoutube,
                        toTry: false,
                        made: false,
                        favorite: false,
                    };
                });
                displayRecipes();
            })
            .catch((error) => {
                console.error(error);
                resultsContent.innerHTML =
                    "Sorry, could not find a recipe. Try another.";
            });
    }

    // displaying content in results
    function displayRecipes() {
        recipeArray.forEach((recipe) => {
            let recipeCard = `
            <div class="card" id="${recipe.identity}">
            <img src="${recipe.image}" class="card-img-top" alt="temporary">
            <div class="card-body">
                <h5 class="card-title">${recipe.meal}</h5>
                <div>
                        <h6 class="instructions-dropdown" >Cooking Instructions</h6>

                    <div id="instructions">
                        <p>${recipe.instructions}</p>
                    </div>
                </div>

                <div>
                    <h6 class="ingredients-dropdown">Ingredients</h6>

                    <div id="ingredients">
                        <p>${recipe.measureOne} ${recipe.ingredientOne},</p>
                        <p>${recipe.measureTwo} ${recipe.ingredientTwo},</p>
                        <p>${recipe.measureThree} ${recipe.ingredientThree},</p>
                        <p>${recipe.measureFour} ${recipe.ingredientFour},</p>
                        <p>${recipe.measureFive} ${recipe.ingredientFive},</p>
                        <p>${recipe.measureSix} ${recipe.ingredientSix},</p>
                        <p>${recipe.measureSeven} ${recipe.ingredientSeven},</p>
                        <p>${recipe.measureEight} ${recipe.ingredientEight},</p>
                        <p>${recipe.measureNine} ${recipe.ingredientNine},</p>
                        <p>${recipe.measureTen} ${recipe.ingredientTen},</p>
                        <p>${recipe.measureEleven} ${recipe.ingredientEleven},</p>
                        <p>${recipe.measureTwelve} ${recipe.ingredientTwelve},</p>
                        <p>${recipe.measureThirteen} ${recipe.ingredientThirteen},</p>
                        <p>${recipe.measureFourteen} ${recipe.ingredientFourteen},</p>
                        <p>${recipe.measureFifteen} ${recipe.ingredientFifteen},</p>
                        <p>${recipe.measureSixteen} ${recipe.ingredientSixteen},</p>
                        <p>${recipe.measureSeventeen} ${recipe.ingredientSeventeen},</p>
                        <p>${recipe.measureEighteen} ${recipe.ingredientEighteen},</p>
                        <p>${recipe.measureNineteen} ${recipe.ingredientNineteen},</p>
                        <p>${recipe.measureTwenty} ${recipe.ingredientTwenty},</p>
                    </div>
                </div>

                <div class="youtube-video">
                    <a href="${recipe.tutorial}" target="_blank" class="card-link" style="text-decoration: none;">Watch Youtube Tutorial</a>
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
        // else if (e.target.id === "instructionsdropdown") toggle(e);
    });

    // Want To Try list
    function addRecipeToTry(e) {
        let recipeID = e.target.parentElement.parentElement.parentElement.id;
        let recipeSelected = recipeArray.find((recipe) => {
            return recipe.identity === recipeID;
        });
        console.log("added to try:", recipeSelected);

        if (!recipeSelected.toTry) {
            recipeSelected.toTry = true;
            alert(`${recipeSelected.meal} was added to your list.`)
        } else if (recipeSelected.toTry) {
            return (recipeSelected.toTry = false);
        } else {
            alert("there was an error.");
        }

        displayRecipesToTry();

        fetch("/recipes/add", {
            method: "POST",
            body: JSON.stringify({
                meal: `${recipeSelected.meal}`,
                identity: `${recipeSelected.identity}`,
                image: `${recipeSelected.image}`,
                instructions: `${recipeSelected.instructions}`,
                tutorial: `${recipeSelected.tutorial}`,
                toTry: `${recipeSelected.toTry}`,
                made: `${recipeSelected.made}`,
                favorite: `${recipeSelected.favorite}`,
                ingredientOne: `${recipeSelected.ingredientOne}`,
                ingredientTwo: `${recipeSelected.ingredientTwo}`,
                ingredientThree: `${recipeSelected.ingredientThree}`,
                ingredientFour: `${recipeSelected.ingredientFour}`,
                ingredientFive: `${recipeSelected.ingredientFive}`,
                ingredientSix: `${recipeSelected.ingredientSix}`,
                ingredientSeven: `${recipeSelected.ingredientSeven}`,
                ingredientEight: `${recipeSelected.ingredientEight}`,
                ingredientNine: `${recipeSelected.ingredientNine}`,
                ingredientTen: `${recipeSelected.ingredientTen}`,
                ingredientEleven: `${recipeSelected.ingredientEleven}`,
                ingredientTwelve: `${recipeSelected.ingredientTwelve}`,
                ingredientThirteen: `${recipeSelected.ingredientThirteen}`,
                ingredientFourteen: `${recipeSelected.ingredientFourteen}`,
                ingredientFifteen: `${recipeSelected.ingredientFifteen}`,
                ingredientSixteen: `${recipeSelected.ingredientSixteen}`,
                ingredientSeventeen: `${recipeSelected.ingredientSeventeen}`,
                ingredientEighteen: `${recipeSelected.ingredientEighteen}`,
                ingredientNineteen: `${recipeSelected.ingredientNineteen}`,
                ingredientTwenty: `${recipeSelected.ingredientTwenty}`,
                measureOne: `${recipeSelected.measureOne}`,
                measureTwo: `${recipeSelected.measureTwo}`,
                measureThree: `${recipeSelected.measureThree}`,
                measureFour: `${recipeSelected.measureFour}`,
                measureFive: `${recipeSelected.measureFive}`,
                measureSix: `${recipeSelected.measureSix}`,
                measureSeven: `${recipeSelected.measureSeven}`,
                measureEight: `${recipeSelected.measureEight}`,
                measureNine: `${recipeSelected.measureNine}`,
                measureTen: `${recipeSelected.measureTen}`,
                measureEleven: `${recipeSelected.measureEleven}`,
                measureTwelve: `${recipeSelected.measureTwelve}`,
                measureThirteen: `${recipeSelected.measureThirteen}`,
                measureFourteen: `${recipeSelected.measureFourteen}`,
                measureFifteen: `${recipeSelected.measureFifteen}`,
                measureSixteen: `${recipeSelected.measureSixteen}`,
                measureSeventeen: `${recipeSelected.measureSeventeen}`,
                measureEightteen: `${recipeSelected.measureEightteen}`,
                measureNineteen: `${recipeSelected.measureNineteen}`,
                measureTwenty: `${recipeSelected.measureTwenty}`,
            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                console.error(error);
            });
    }

    function displayRecipesToTry() {
        // tryResults.innerHTML = "";
        recipeArray.find((recipe) => {
            if (recipe.toTry) {
                let recipeCard = `
                <div class="card" id="${recipe.identity}">
                <img src="${recipe.image}" class="card-img-top" alt="temporary">
                <div class="card-body">
                    <h5 class="card-title">${recipe.meal}</h5>
                    <div>
                            <h6 class="instructions-dropdown">Cooking Instructions</h6>
    
                        <div id="instructions">
                            <p>${recipe.instructions}</p>
                        </div>
                    </div>
    
                    <div>
                        <h6 class="ingredients-dropdown">Ingredients</h6>
    
                        <div id="ingredients">
                        <p>${recipe.measureOne} ${recipe.ingredientOne},</p>
                        <p>${recipe.measureTwo} ${recipe.ingredientTwo},</p>
                        <p>${recipe.measureThree} ${recipe.ingredientThree},</p>
                        <p>${recipe.measureFour} ${recipe.ingredientFour},</p>
                        <p>${recipe.measureFive} ${recipe.ingredientFive},</p>
                        <p>${recipe.measureSix} ${recipe.ingredientSix},</p>
                        <p>${recipe.measureSeven} ${recipe.ingredientSeven},</p>
                        <p>${recipe.measureEight} ${recipe.ingredientEight},</p>
                        <p>${recipe.measureNine} ${recipe.ingredientNine},</p>
                        <p>${recipe.measureTen} ${recipe.ingredientTen},</p>
                        <p>${recipe.measureEleven} ${recipe.ingredientEleven},</p>
                        <p>${recipe.measureTwelve} ${recipe.ingredientTwelve},</p>
                        <p>${recipe.measureThirteen} ${recipe.ingredientThirteen},</p>
                        <p>${recipe.measureFourteen} ${recipe.ingredientFourteen},</p>
                        <p>${recipe.measureFifteen} ${recipe.ingredientFifteen},</p>
                        <p>${recipe.measureSixteen} ${recipe.ingredientSixteen},</p>
                        <p>${recipe.measureSeventeen} ${recipe.ingredientSeventeen},</p>
                        <p>${recipe.measureEighteen} ${recipe.ingredientEighteen},</p>
                        <p>${recipe.measureNineteen} ${recipe.ingredientNineteen},</p>
                        <p>${recipe.measureTwenty} ${recipe.ingredientTwenty},</p>
                    </div>
                </div>
    
                    <div class="youtube-video">
                        <a href="${recipe.tutorial}" target="_blank" class="card-link" style="text-decoration: none;">Watch Youtube Tutorial</a>
                    </div>
    
                    <div class="card-buttons">
                        <button id="updateTry">Have Made</button>
                        <button id="deleteTryBtn">Delete</button>
                    </div>
                </div>
            </div>
            `;

                tryResults.insertAdjacentHTML("beforeend", recipeCard);
            }
        });
    }

    fetch("/recipes/toTry/true", {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Accept: "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            data.forEach((recipe) => {
                let recipeCard = `
            <div class="card" id="${recipe.identity}">
            <img src="${recipe.image}" class="card-img-top" alt="temporary">
            <div class="card-body">
                <h5 class="card-title">${recipe.meal}</h5>
                <div>
                        <h6 class="instructions-dropdown">Cooking Instructions</h6>

                    <div id="instructions">
                        <p>${recipe.instructions}</p>
                    </div>
                </div>

                <div>
                    <h6 class="ingredients-dropdown">Ingredients</h6>

                    <div id="ingredients">
                    <p>${recipe.measureOne} ${recipe.ingredientOne},</p>
                    <p>${recipe.measureTwo} ${recipe.ingredientTwo},</p>
                    <p>${recipe.measureThree} ${recipe.ingredientThree},</p>
                    <p>${recipe.measureFour} ${recipe.ingredientFour},</p>
                    <p>${recipe.measureFive} ${recipe.ingredientFive},</p>
                    <p>${recipe.measureSix} ${recipe.ingredientSix},</p>
                    <p>${recipe.measureSeven} ${recipe.ingredientSeven},</p>
                    <p>${recipe.measureEight} ${recipe.ingredientEight},</p>
                    <p>${recipe.measureNine} ${recipe.ingredientNine},</p>
                    <p>${recipe.measureTen} ${recipe.ingredientTen},</p>
                    <p>${recipe.measureEleven} ${recipe.ingredientEleven},</p>
                    <p>${recipe.measureTwelve} ${recipe.ingredientTwelve},</p>
                    <p>${recipe.measureThirteen} ${recipe.ingredientThirteen},</p>
                    <p>${recipe.measureFourteen} ${recipe.ingredientFourteen},</p>
                    <p>${recipe.measureFifteen} ${recipe.ingredientFifteen},</p>
                    <p>${recipe.measureSixteen} ${recipe.ingredientSixteen},</p>
                    <p>${recipe.measureSeventeen} ${recipe.ingredientSeventeen},</p>
                    <p>${recipe.measureEighteen} ${recipe.ingredientEighteen},</p>
                    <p>${recipe.measureNineteen} ${recipe.ingredientNineteen},</p>
                    <p>${recipe.measureTwenty} ${recipe.ingredientTwenty},</p>
                </div>
            </div>

                <div class="youtube-video">
                    <a href="${recipe.tutorial}" target="_blank" class="card-link" style="text-decoration: none;">Watch Youtube Tutorial</a>
                </div>

                <div class="card-buttons">
                    <button id="updateTry">Have Made</button>
                    <button id="deleteTryBtn">Delete</button>
                </div>
            </div>
        </div>
        `;

                tryResults.insertAdjacentHTML("beforeend", recipeCard);

                document.addEventListener("click", (e) => {
                    let recipeID = e.target.parentElement.parentElement.parentElement.id;
                    let recipeRemove = e.target.parentElement.parentElement.parentElement;
            
                    let recipeSelected = data.find(
                        (recipe) => Number(recipe.identity) === Number(recipeID)
                    );
            
                    if (e.target.id === "updateTry") {
                        recipeSelected.toTry = false;
                        recipeSelected.made = true;
                        console.log("remove >", recipeSelected);
                        recipeRemove.remove();
            
                        displayRecipesMade();
            
                        fetch(`/recipes/update/${recipeID}`, {
                            method: "PUT",
                            body: JSON.stringify({
                                favorite: `${recipeSelected.favorite}`,
                                made: `${recipeSelected.made}`,
                                toTry: `${recipeSelected.toTry}`,
                            }),
                            headers: {
                                "Content-type": "application/json; charset=UTF-8",
                                Accept: "application/json",
                            },
                        })
                            .then((res) => {
                                res.json(
                                    alert(`${recipeSelected.meal} was moved to your recipes made list.`),
                                    location.reload()
                                );
                            })
                    } else recipeSelected.toTry = false;
                });

                document.addEventListener("click", (e) => {
                    let recipeID = e.target.parentElement.parentElement.parentElement.id;
                    let recipeRemove = e.target.parentElement.parentElement.parentElement;

                    let recipeSelected = data.find(
                        (recipe) => Number(recipe.identity) === Number(recipeID)
                    );

                    if (e.target.id === "deleteTryBtn") {
                        recipeSelected.toTry = false;
                        console.log("remove >", recipeSelected);
                        recipeRemove.remove();

                        displayRecipesToTry();

                        fetch(`/recipes/delete/${recipeID}`, {
                            method: "DELETE",
                            headers: {
                                "Content-type": "application/json; charset=UTF-8",
                                "Accept": "application/json",
                            },
                        })
                            .then((res) => res.json(
                                location.reload()
                            ))
                    } else recipeSelected.toTry = false;
                });
            });
        });

    // adding click event for want to try or made
    document.addEventListener("click", (e) => {
        if (e.target.id === "madeBtn") addRecipeToMade(e);
    });
    // Have Made Recipes
    function addRecipeToMade(e) {
        let recipeID = e.target.parentElement.parentElement.parentElement.id;
        console.log("added to Made:", recipeID);
        let recipeSelected = recipeArray.find((recipe) => {
            return recipe.identity === recipeID;
        });
        if (!recipeSelected.made) {
            recipeSelected.made = true;
            recipeSelected.toTry = false;
            alert(`${recipeSelected.meal} was added to your list.`)
        } else if (recipeSelected.made) {
            recipeSelected.made = false;
        } else {
            alert("there was an error.");
        }

        displayRecipesMade();

        fetch("/recipes/add", {
            method: "POST",
            body: JSON.stringify({
                meal: `${recipeSelected.meal}`,
                identity: `${recipeSelected.identity}`,
                image: `${recipeSelected.image}`,
                instructions: `${recipeSelected.instructions}`,
                tutorial: `${recipeSelected.tutorial}`,
                toTry: `${recipeSelected.toTry}`,
                made: `${recipeSelected.made}`,
                favorite: `${recipeSelected.favorite}`,
                ingredientOne: `${recipeSelected.ingredientOne}`,
                ingredientTwo: `${recipeSelected.ingredientTwo}`,
                ingredientThree: `${recipeSelected.ingredientThree}`,
                ingredientFour: `${recipeSelected.ingredientFour}`,
                ingredientFive: `${recipeSelected.ingredientFive}`,
                ingredientSix: `${recipeSelected.ingredientSix}`,
                ingredientSeven: `${recipeSelected.ingredientSeven}`,
                ingredientEight: `${recipeSelected.ingredientEight}`,
                ingredientNine: `${recipeSelected.ingredientNine}`,
                ingredientTen: `${recipeSelected.ingredientTen}`,
                ingredientEleven: `${recipeSelected.ingredientEleven}`,
                ingredientTwelve: `${recipeSelected.ingredientTwelve}`,
                ingredientThirteen: `${recipeSelected.ingredientThirteen}`,
                ingredientFourteen: `${recipeSelected.ingredientFourteen}`,
                ingredientFifteen: `${recipeSelected.ingredientFifteen}`,
                ingredientSixteen: `${recipeSelected.ingredientSixteen}`,
                ingredientSeventeen: `${recipeSelected.ingredientSeventeen}`,
                ingredientEighteen: `${recipeSelected.ingredientEighteen}`,
                ingredientNineteen: `${recipeSelected.ingredientNineteen}`,
                ingredientTwenty: `${recipeSelected.ingredientTwenty}`,
                measureOne: `${recipeSelected.measureOne}`,
                measureTwo: `${recipeSelected.measureTwo}`,
                measureThree: `${recipeSelected.measureThree}`,
                measureFour: `${recipeSelected.measureFour}`,
                measureFive: `${recipeSelected.measureFive}`,
                measureSix: `${recipeSelected.measureSix}`,
                measureSeven: `${recipeSelected.measureSeven}`,
                measureEight: `${recipeSelected.measureEight}`,
                measureNine: `${recipeSelected.measureNine}`,
                measureTen: `${recipeSelected.measureTen}`,
                measureEleven: `${recipeSelected.measureEleven}`,
                measureTwelve: `${recipeSelected.measureTwelve}`,
                measureThirteen: `${recipeSelected.measureThirteen}`,
                measureFourteen: `${recipeSelected.measureFourteen}`,
                measureFifteen: `${recipeSelected.measureFifteen}`,
                measureSixteen: `${recipeSelected.measureSixteen}`,
                measureSeventeen: `${recipeSelected.measureSeventeen}`,
                measureEightteen: `${recipeSelected.measureEightteen}`,
                measureNineteen: `${recipeSelected.measureNineteen}`,
                measureTwenty: `${recipeSelected.measureTwenty}`,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Accept: "application/json",
            },
        })
    }

    function displayRecipesMade() {
        // tryResults.innerHTML = "";

        recipeArray.find((recipe) => {
            if (recipe.made) {
                let recipeCard = `
                <div class="card" id="${recipe.identity}">
                <img src="${recipe.image}" class="card-img-top" alt="temporary">
                <div class="card-body">
                    <h5 class="card-title">${recipe.meal}</h5>
                    <div>
                            <h6 class="instructions-dropdown">Cooking Instructions</h6>
    
                        <div id="instructions">
                            <p>${recipe.instructions}</p>
                        </div>
                    </div>
    
                    <div>
                            <h6 class="ingredients-dropdown">Ingredients</h6>
    
                        <div id="ingredients">
                        <p>${recipe.measureOne} ${recipe.ingredientOne},</p>
                        <p>${recipe.measureTwo} ${recipe.ingredientTwo},</p>
                        <p>${recipe.measureThree} ${recipe.ingredientThree},</p>
                        <p>${recipe.measureFour} ${recipe.ingredientFour},</p>
                        <p>${recipe.measureFive} ${recipe.ingredientFive},</p>
                        <p>${recipe.measureSix} ${recipe.ingredientSix},</p>
                        <p>${recipe.measureSeven} ${recipe.ingredientSeven},</p>
                        <p>${recipe.measureEight} ${recipe.ingredientEight},</p>
                        <p>${recipe.measureNine} ${recipe.ingredientNine},</p>
                        <p>${recipe.measureTen} ${recipe.ingredientTen},</p>
                        <p>${recipe.measureEleven} ${recipe.ingredientEleven},</p>
                        <p>${recipe.measureTwelve} ${recipe.ingredientTwelve},</p>
                        <p>${recipe.measureThirteen} ${recipe.ingredientThirteen},</p>
                        <p>${recipe.measureFourteen} ${recipe.ingredientFourteen},</p>
                        <p>${recipe.measureFifteen} ${recipe.ingredientFifteen},</p>
                        <p>${recipe.measureSixteen} ${recipe.ingredientSixteen},</p>
                        <p>${recipe.measureSeventeen} ${recipe.ingredientSeventeen},</p>
                        <p>${recipe.measureEighteen} ${recipe.ingredientEighteen},</p>
                        <p>${recipe.measureNineteen} ${recipe.ingredientNineteen},</p>
                        <p>${recipe.measureTwenty} ${recipe.ingredientTwenty},</p>
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

    fetch("/recipes/made/true", {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Accept: "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            data.forEach((recipe) => {
                let recipeCard = `
                <div class="card" id="${recipe.identity}">
                <img src="${recipe.image}" class="card-img-top" alt="temporary">
                <div class="card-body">
                    <h5 class="card-title">${recipe.meal}</h5>
                    <div>
                            <h6 class="instructions-dropdown">Cooking Instructions</h6>
    
                        <div id="instructions">
                            <p>${recipe.instructions}</p>
                        </div>
                    </div>
    
                    <div>
                            <h6 class="ingredients-dropdown">Ingredients</h6>
    
                    <div id="ingredients">
                        <p>${recipe.measureOne} ${recipe.ingredientOne},</p>
                        <p>${recipe.measureTwo} ${recipe.ingredientTwo},</p>
                        <p>${recipe.measureThree} ${recipe.ingredientThree},</p>
                        <p>${recipe.measureFour} ${recipe.ingredientFour},</p>
                        <p>${recipe.measureFive} ${recipe.ingredientFive},</p>
                        <p>${recipe.measureSix} ${recipe.ingredientSix},</p>
                        <p>${recipe.measureSeven} ${recipe.ingredientSeven},</p>
                        <p>${recipe.measureEight} ${recipe.ingredientEight},</p>
                        <p>${recipe.measureNine} ${recipe.ingredientNine},</p>
                        <p>${recipe.measureTen} ${recipe.ingredientTen},</p>
                        <p>${recipe.measureEleven} ${recipe.ingredientEleven},</p>
                        <p>${recipe.measureTwelve} ${recipe.ingredientTwelve},</p>
                        <p>${recipe.measureThirteen} ${recipe.ingredientThirteen},</p>
                        <p>${recipe.measureFourteen} ${recipe.ingredientFourteen},</p>
                        <p>${recipe.measureFifteen} ${recipe.ingredientFifteen},</p>
                        <p>${recipe.measureSixteen} ${recipe.ingredientSixteen},</p>
                        <p>${recipe.measureSeventeen} ${recipe.ingredientSeventeen},</p>
                        <p>${recipe.measureEighteen} ${recipe.ingredientEighteen},</p>
                        <p>${recipe.measureNineteen} ${recipe.ingredientNineteen},</p>
                        <p>${recipe.measureTwenty} ${recipe.ingredientTwenty},</p>
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

                // Delete Made Recipes
                document.addEventListener("click", (e) => {
                    let recipeID = e.target.parentElement.parentElement.parentElement.id;
                    let recipeRemove = e.target.parentElement.parentElement.parentElement;

                    let recipeSelected = data.find(
                        (recipe) => Number(recipe.identity) === Number(recipeID)
                    );

                    if (e.target.id === "deleteMadeBtn") {
                        recipeSelected.made = false;
                        console.log("remove >", recipeSelected);
                        recipeRemove.remove();

                        displayRecipesMade();

                        fetch(`/recipes/delete/${recipeID}`, {
                            method: "DELETE",
                            headers: {
                                "Content-type": "application/json; charset=UTF-8",
                                "Accept": "application/json",
                            },
                        })
                            .then((res) => res.json())
                    } else recipeSelected.toTry = false;
                });

                // set favorites
                document.addEventListener("click", (e) => {
                    let recipeID = e.target.parentElement.parentElement.parentElement.id;
                    let recipeSelected = data.find(
                        (recipe) => Number(recipe.identity) === Number(recipeID)
                    );

                    if (e.target.id === "favBtn") {
                        if (!recipeSelected.favorite) {
                            recipeSelected.favorite = true;
                            recipeSelected.made = true;
                            alert(`${recipeSelected.meal} was added to favorites`)
                            location.reload();
                        } else if (recipeSelected.favorite) recipeSelected.favorite = false;
                        else alert("there was an error");

                        displayRecipesFav();

                        fetch(`/recipes/update/${recipeID}`, {
                            method: "PUT",
                            body: JSON.stringify({
                                favorite: `${recipeSelected.favorite}`,
                                made: `${recipeSelected.made}`,
                                toTry: `${recipeSelected.toTry}`,
                            }),
                            headers: {
                                "Content-type": "application/json; charset=UTF-8",
                                Accept: "application/json",
                            },
                        })
                            .then((res) => {
                                res.json(alert(`${recipeSelected.meal} was removed from favorite`),);
                            })
                    }
                });
            });
        });

    // set favorites
    document.addEventListener("click", (e) => {
        let recipeID = e.target.parentElement.parentElement.parentElement.id;
        let recipeSelected = recipeArray.find(
            (recipe) => Number(recipe.identity) === Number(recipeID)
        );

        if (e.target.id === "favBtn") {
            if (!recipeSelected.favorite) {
                recipeSelected.favorite = true;
                recipeSelected.made = true;
                alert(`${recipeSelected.meal} was added to favorites`)
            } else if (recipeSelected.favorite) recipeSelected.favorite = false;
            else alert("there was an error");

            displayRecipesFav();

            fetch(`/recipes/update/${recipeID}`, {
                method: "PUT",
                body: JSON.stringify({
                    favorite: `${recipeSelected.favorite}`,
                    made: `${recipeSelected.made}`,
                    toTry: `${recipeSelected.toTry}`,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Accept: "application/json",
                },
            })
                .then((res) => {
                    res.json(console.log("updated---", `${recipeID}`));
                })
        }
    });

    function displayRecipesFav() {
        // tryResults.innerHTML = "";

        recipeArray.find((recipe) => {
            if (recipe.made) {
                let recipeCard = `
                <div class="card" id="${recipe.identity}">
                <img src="${recipe.image}" class="card-img-top" alt="temporary">
                <div class="card-body">
                    <h5 class="card-title">${recipe.meal}</h5>
                    <div>
                            <h6 class="instructions-dropdown">Cooking Instructions</h6>
    
                        <div id="instructions">
                            <p>${recipe.instructions}</p>
                        </div>
                    </div>
    
                    <div>
                            <h6 class="ingredients-dropdown">Ingredients</h6>
    
                        <div id="ingredients">
                        <p>${recipe.measureOne} ${recipe.ingredientOne},</p>
                        <p>${recipe.measureTwo} ${recipe.ingredientTwo},</p>
                        <p>${recipe.measureThree} ${recipe.ingredientThree},</p>
                        <p>${recipe.measureFour} ${recipe.ingredientFour},</p>
                        <p>${recipe.measureFive} ${recipe.ingredientFive},</p>
                        <p>${recipe.measureSix} ${recipe.ingredientSix},</p>
                        <p>${recipe.measureSeven} ${recipe.ingredientSeven},</p>
                        <p>${recipe.measureEight} ${recipe.ingredientEight},</p>
                        <p>${recipe.measureNine} ${recipe.ingredientNine},</p>
                        <p>${recipe.measureTen} ${recipe.ingredientTen},</p>
                        <p>${recipe.measureEleven} ${recipe.ingredientEleven},</p>
                        <p>${recipe.measureTwelve} ${recipe.ingredientTwelve},</p>
                        <p>${recipe.measureThirteen} ${recipe.ingredientThirteen},</p>
                        <p>${recipe.measureFourteen} ${recipe.ingredientFourteen},</p>
                        <p>${recipe.measureFifteen} ${recipe.ingredientFifteen},</p>
                        <p>${recipe.measureSixteen} ${recipe.ingredientSixteen},</p>
                        <p>${recipe.measureSeventeen} ${recipe.ingredientSeventeen},</p>
                        <p>${recipe.measureEighteen} ${recipe.ingredientEighteen},</p>
                        <p>${recipe.measureNineteen} ${recipe.ingredientNineteen},</p>
                        <p>${recipe.measureTwenty} ${recipe.ingredientTwenty},</p>
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

    fetch("/recipes/favorite/true", {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Accept: "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            data.forEach((recipe) => {
                let recipeCard = `
        <div class="card" id="${recipe.identity}">
        <img src="${recipe.image}" class="card-img-top" alt="temporary">
        <div class="card-body">
            <h5 class="card-title">${recipe.meal}</h5>
            <div>
                    <h6 class="instructions-dropdown">Cooking Instructions</h6>

                <div id="instructions">
                    <p>${recipe.instructions}</p>
                </div>
            </div>

            <div>
                    <h6 class="ingredients-dropdown">Ingredients</h6>

                <div id="ingredients">
                <p>${recipe.measureOne} ${recipe.ingredientOne},</p>
                <p>${recipe.measureTwo} ${recipe.ingredientTwo},</p>
                <p>${recipe.measureThree} ${recipe.ingredientThree},</p>
                <p>${recipe.measureFour} ${recipe.ingredientFour},</p>
                <p>${recipe.measureFive} ${recipe.ingredientFive},</p>
                <p>${recipe.measureSix} ${recipe.ingredientSix},</p>
                <p>${recipe.measureSeven} ${recipe.ingredientSeven},</p>
                <p>${recipe.measureEight} ${recipe.ingredientEight},</p>
                <p>${recipe.measureNine} ${recipe.ingredientNine},</p>
                <p>${recipe.measureTen} ${recipe.ingredientTen},</p>
                <p>${recipe.measureEleven} ${recipe.ingredientEleven},</p>
                <p>${recipe.measureTwelve} ${recipe.ingredientTwelve},</p>
                <p>${recipe.measureThirteen} ${recipe.ingredientThirteen},</p>
                <p>${recipe.measureFourteen} ${recipe.ingredientFourteen},</p>
                <p>${recipe.measureFifteen} ${recipe.ingredientFifteen},</p>
                <p>${recipe.measureSixteen} ${recipe.ingredientSixteen},</p>
                <p>${recipe.measureSeventeen} ${recipe.ingredientSeventeen},</p>
                <p>${recipe.measureEighteen} ${recipe.ingredientEighteen},</p>
                <p>${recipe.measureNineteen} ${recipe.ingredientNineteen},</p>
                <p>${recipe.measureTwenty} ${recipe.ingredientTwenty},</p>
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

                // update favorites
                document.addEventListener("click", (e) => {
                    let recipeID = e.target.parentElement.parentElement.parentElement.id;
                    let recipeRemove = e.target.parentElement.parentElement.parentElement;

                    let recipeSelected = data.find(
                        (recipe) => Number(recipe.identity) === Number(recipeID)
                    );

                    if (e.target.id === "removeBtn") {
                        recipeSelected.favorite = false;
                        console.log("remove >", recipeSelected);
                        recipeRemove.remove();

                        displayRecipesFav();

                        fetch(`/recipes/update/${recipeID}`, {
                            method: "PUT",
                            body: JSON.stringify({
                                favorite: `${recipeSelected.favorite}`,
                                made: `${recipeSelected.made}`,
                                toTry: `${recipeSelected.toTry}`,
                            }),
                            headers: {
                                "Content-type": "application/json; charset=UTF-8",
                                Accept: "application/json",
                            },
                        })
                            .then((res) => {
                                res.json(
                                    alert(`${recipeSelected.meal} was removed from favorite`),
                                    location.reload()
                                );
                            })
                    } else recipeSelected.toTry = false;
                });
            });
        });

    // Delete Try Recipes
    document.addEventListener("click", (e) => {
        let recipeID = e.target.parentElement.parentElement.parentElement.id;
        let recipeRemove = e.target.parentElement.parentElement.parentElement;

        let recipeSelected = recipeArray.find(
            (recipe) => Number(recipe.identity) === Number(recipeID)
        );

        if (e.target.id === "deleteTryBtn") {
            recipeSelected.toTry = false;
            console.log("remove >", recipeSelected);
            recipeRemove.remove();

            displayRecipesToTry();

            fetch(`/recipes/delete/${recipeID}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Accept: "application/json",
                },
            })
                .then((res) => res.json())
        } else recipeSelected.toTry = false;
    });

    // Delete Made Recipes
    document.addEventListener("click", (e) => {
        let recipeID = e.target.parentElement.parentElement.parentElement.id;
        let recipeRemove = e.target.parentElement.parentElement.parentElement;

        let recipeSelected = recipeArray.find(
            (recipe) => Number(recipe.identity) === Number(recipeID)
        );

        if (e.target.id === "deleteMadeBtn") {
            recipeSelected.made = false;
            console.log("remove >", recipeSelected);
            recipeRemove.remove();

            displayRecipesMade();

            fetch(`/recipes/delete/${recipeID}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Accept: "application/json",
                },
            })
                .then((res) => res.json())
        } else recipeSelected.toTry = false;
    });

    // update favorites
    document.addEventListener("click", (e) => {
        let recipeID = e.target.parentElement.parentElement.parentElement.id;
        let recipeRemove = e.target.parentElement.parentElement.parentElement;

        let recipeSelected = recipeArray.find(
            (recipe) => Number(recipe.identity) === Number(recipeID)
        );

        if (e.target.id === "removeBtn") {
            recipeSelected.favorite = false;
            console.log("remove >", recipeSelected);
            recipeRemove.remove();

            displayRecipesFav();

            fetch(`/recipes/update/${recipeID}`, {
                method: "PUT",
                body: JSON.stringify({
                    favorite: `${recipeSelected.favorite}`,
                    made: `${recipeSelected.made}`,
                    toTry: `${recipeSelected.toTry}`,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Accept: "application/json",
                },
            })
                .then((res) => {
                    res.json(
                        alert(`${recipeSelected.meal} was removed from favorite`),
                        location.reload()
                    );
                })
        } else recipeSelected.toTry = false;
    });

    document.addEventListener("click", (e) => {
        let recipeID = e.target.parentElement.parentElement.parentElement.id;
        let recipeRemove = e.target.parentElement.parentElement.parentElement;

        let recipeSelected = recipeArray.find(
            (recipe) => Number(recipe.identity) === Number(recipeID)
        );

        if (e.target.id === "updateTry") {
            recipeSelected.toTry = false;
            recipeSelected.made = true;
            console.log("remove >", recipeSelected);
            recipeRemove.remove();

            displayRecipesMade();

            fetch(`/recipes/update/${recipeID}`, {
                method: "PUT",
                body: JSON.stringify({
                    favorite: `${recipeSelected.favorite}`,
                    made: `${recipeSelected.made}`,
                    toTry: `${recipeSelected.toTry}`,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Accept: "application/json",
                },
            })
                .then((res) => {
                    res.json(
                        alert(`${recipeSelected.meal} was moved to your recipes made list.`),
                        // location.reload()
                    );
                })
        } else recipeSelected.toTry = false;
    });
})(window);
