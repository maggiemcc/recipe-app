# Recipe Full Stack App
- This project was created using Vanilla JS on the Frontend, uses MongoDB for the database, and used the [TheMealDB API](https://www.themealdb.com/). It's also being hosted live on [Heroku](https://whispering-reef-92142.herokuapp.com/).

# User Stories
    See public/index.js file
1. The user wants to be able to search for a new recipe to try at home or for
   an event.
   - [line 70: uses fetch to access the mealdb api by typing a food item into the input and pressing search](https://github.com/maggiemcc/recipe-app/blob/master/public/index.js)
2. The user wants to be able to save a recipe from their search to a “recipes
   to try” (or named something similar) category.
    - [line 209: adds recipe to recipes they wish to try by clicking the want to try button](https://github.com/maggiemcc/recipe-app/blob/master/public/index.js)
3. The user wants to be able to save a recipe from their search to a “saved
   recipes” category.
    - [line 484: adds recipe to recipes they have made by clicking the have made button](https://github.com/maggiemcc/recipe-app/blob/master/public/index.js)
4. The user wants to view all of their saved “recipes to try” recipes.
    - [line 291: displays stored recipes users wish to try in the dropdown section](https://github.com/maggiemcc/recipe-app/blob/master/public/index.js)
5. The user wants to view all of their saved “saved/made recipes” recipes.
    - [line 565: displays stored recipes users have made in the dropdown section](https://github.com/maggiemcc/recipe-app/blob/master/public/index.js)
6. The user wants to be able to move a recipe from “recipes to try” into
   “saved recipes”.
    - [line 1045: recipes from try list can be added to the user's made list with the button](https://github.com/maggiemcc/recipe-app/blob/master/public/index.js)
7. The user wants to be able to delete a recipe from “recipes to try”.
    - [line 955: deletes recipes users no longer want in their to try list with the delete button](https://github.com/maggiemcc/recipe-app/blob/master/public/index.js)
8. The user wants to be able to delete a recipe from “saved recipes”.
    - [line 982: deletes recipes users no longer want in their made list with delete button](https://github.com/maggiemcc/recipe-app/blob/master/public/index.js)
9. The user wants to be able to favorite/like a recipe from their “saved
   recipes”.
    - [line 757: users can make a recipe a favorite by clicking the favorite button](https://github.com/maggiemcc/recipe-app/blob/master/public/index.js)
10. The user wants to be able to see all of their favorite recipes.
    - [line 791: displays the users stored favorite recipes in a dropdown](https://github.com/maggiemcc/recipe-app/blob/master/public/index.js)
11. The user wants to be able to unfavorite a recipe.
    - [line 1009: users can remove a favorite recipe with the remove button](https://github.com/maggiemcc/recipe-app/blob/master/public/index.js)
12. The user wants to find a list of ingredients needed for a recipe so that they
    know what they need.
    - [EX: line 158: users can see a list of ingredients listed on each recipe card](https://github.com/maggiemcc/recipe-app/blob/master/public/index.js)
13. The user wants to find/read cooking instructions for a recipe so they know
    the steps on how to cook it.
    - [EX: line 150: users can see a written instructions for each recipe on the recipe cards](https://github.com/maggiemcc/recipe-app/blob/master/public/index.js)
14. The user wants to find/watch a video tutorial, if it is available, for a recipe
    for extra help.
    - [EX: line 183: users can see click a link to watch a youtube tutorial for each recipe](https://github.com/maggiemcc/recipe-app/blob/master/public/index.js)
15. The user wants to find/see an image of a potential recipe to know what
    the food will look like
    - [EX: line 144: an image is available at the top of each recipe card for users to see](https://github.com/maggiemcc/recipe-app/blob/master/public/index.js)

# Endpoints
    See routes/recipes.js file
- This project using at least one of each endpoint:
    - Create: [EX: line 69](https://github.com/maggiemcc/recipe-app/blob/master/routes/recipes.js)
        - ```router.post("/add", async (req, res) => {const newRecipe = await new Recipe({meal: req.body.meal,...})})```
    - Update: [EX: line 129](https://github.com/maggiemcc/recipe-app/blob/master/routes/recipes.js)
        - ```router.put("/update/:identity", async (req, res) => {await Recipe.findOneAndUpdate({identity: req.params.identity}, req.body)...});```
    - Read: [EX: line 58](https://github.com/maggiemcc/recipe-app/blob/master/routes/recipes.js)
        - ```router.get("/made/:made", async (req, res) => {await Recipe.find({made: req.params.made === 'true'})...});```
    - Delete: [EX: line 140](https://github.com/maggiemcc/recipe-app/blob/master/routes/recipes.js)
        - ```router.delete("/delete/:identity", async (req, res) => {await Recipe.findOneAndDelete({identity: req.params.identity})...});```
     

https://tiny-vacherin-623725.netlify.app/
