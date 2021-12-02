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

// Get all Recipes Recipes
router.get("/", async (req, res) => {
    await getAllRecipes()
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

// Get = Have Made Recipes
router.get("/made/:made", async (req, res) => {
    await Recipe.find({})
    .then((result) => {
        res.json(result);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
