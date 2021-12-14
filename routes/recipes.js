const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const Recipe = require("../models/Recipe");

const getAllRecipes = async () => {
    const allRecipes = await Recipe.find();
    return allRecipes;
};

// Get - all Recipes Recipes
router.get("/", async (req, res) => {
    await getAllRecipes()
        .then((result) => {
            res.json(result);
        })
        .catch((error) => console.log(error));
});

// Get - Recipe ID
router.get("/:recipeId", async (req, res) => {
    await Recipe.findOne({})
        .then((result) => {
            res.json(result);
        })
        .catch((error) => console.log(error));
});


// Get - Favorites Recipes
router.get("/favorites/:favorite", async (req, res) => {
    await Recipe.find({})
        .then((result) => {
            res.json(result);
        })
        .catch((error) => console.log(error));
});

// Get - Want to Try Recipes
router.get("/try/:try", async (req, res) => {
    await Recipe.find({})
        .then((result) => {
            res.json(result);
        })
        .catch((error) => console.log(error));
});

// Get - Have Made Recipes
router.get("/made/:made", async (req, res) => {
    await Recipe.find({})
        .then((result) => {
            res.json(result);
        })
        .catch((error) => console.log(error));
});

// Post - Create/Add Recipe
router.post("/add", async (req, res) => {
    const newRecipe = await new Recipe({
        meal: req.body.meal,
        identity: req.body.identity,
        image: req.body.image,
        instructions: req.body.instructions,
        tutorial: req.body.tutorial,
        toTry: req.body.toTry,
        made: req.body.made,
        favorite: req.body.favorite,
        ingredientOne: req.body.ingredientOne,
        ingredientTwo: req.body.ingredientTwo,
        ingredientThree: req.body.ingredientThree,
        ingredientFour: req.body.ingredientFour,
        ingredientFive: req.body.ingredientFive,
        ingredientSix: req.body.ingredientSix,
        ingredientSeven: req.body.ingredientSeven,
        ingredientEight: req.body.ingredientEight,
        ingredientNine: req.body.ingredientNine,
        ingredientTen: req.body.ingredientTen,
        ingredientEleven: req.body.ingredientEleven,
        ingredientTwelve: req.body.ingredientTwelve,
        ingredientThirteen: req.body.ingredientThirteen,
        ingredientFourteen: req.body.ingredientFourteen,
        ingredientFifteen: req.body.ingredientFifteen,
        ingredientSixteen: req.body.ingredientSixteen,
        ingredientSeventeen: req.body.ingredientSeventeen,
        ingredientEighteen: req.body.ingredientEighteen,
        ingredientNineteen: req.body.ingredientNineteen,
        ingredientTwenty: req.body.ingredientTwenty,
        measureOne: req.body.measureOne,
        measureTwo: req.body.measureTwo,
        measureThree: req.body.measureThree,
        measureFour: req.body.measureFour,
        measureFive: req.body.measureFive,
        measureSix: req.body.measureSix,
        measureSeven: req.body.measureSeven,
        measureEight: req.body.measureEight,
        measureNine: req.body.measureNine,
        measureTen: req.body.measureTen,
        measureEleven: req.body.measureEleven,
        measureTwelve: req.body.measureTwelve,
        measureThirteen: req.body.measureThirteen,
        measureFourteen: req.body.measureFourteen,
        measureFifteen: req.body.measureFifteen,
        measureSixteen: req.body.measureSixteen,
        measureSeventeen: req.body.measureSeventeen,
        measureEighteen: req.body.measureEighteen,
        measureNineteen: req.body.measureNineteen,
        measureTwenty: req.body.measureTwenty,
    });
    newRecipe
        .save()
        .then((result) => {
            res.json(result);
        })
        .catch((error) => console.log(error));
});

// Put - Edit Recipe Based On ID
router.put("/:recipeId", async (req, res) => {
    await Recipe.findOneAndUpdate({})
        .then(() => {
            Recipe.findOne({})
                .then((result) => res.send(result))
        })
        .catch((error) => console.log(error));
});

// Delete - Delete/Remove Recipe From Category
router.delete("/:recipeId", async (req, res) => {
    await Recipe.findOneAndDelete({})
        .then((result) => {
            res.json(result);
        })
        .catch((error) => console.log(error));
});

module.exports = router;
