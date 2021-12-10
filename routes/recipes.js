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
    const newRecipe = await new Recipe({});
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
