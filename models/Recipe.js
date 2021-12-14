const { model, Schema } = require("mongoose");

const Recipe = new Schema({
    meal: {
        type: String,
        required: true,
    },
    identity: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    ingredientOne: {
        type: String,
    },
    ingredientTwo: {
        type: String,
    },
    ingredientThree: {
        type: String,
    },
    ingredientFour: {
        type: String,
    },
    ingredientFive: {
        type: String,
    },
    ingredientSix: {
        type: String,
    },
    ingredientSeven: {
        type: String,
    },
    ingredientEight: {
        type: String,
    },
    ingredientNine: {
        type: String,
    },
    ingredientTen: {
        type: String,
    },
    ingredientEleven: {
        type: String,
    },
    ingredientTwelve: {
        type: String,
    },
    ingredientThirteen: {
        type: String,
    },
    ingredientFourteen: {
        type: String,
    },
    ingredientFifteen: {
        type: String,
    },
    ingredientSixteen: {
        type: String,
    },
    ingredientEighteen: {
        type: String,
    },
    ingredientNineteen: {
        type: String,
    },
    ingredientTwenty: {
        type: String,
    },
    measureOne: {
        type: String,
    },
    measureTwo: {
        type: String,
    },
    measureThree: {
        type: String,
    },
    measureFour: {
        type: String,
    },
    measureFive: {
        type: String,
    },
    measureSix: {
        type: String,
    },
    measureSeven: {
        type: String,
    },
    measureEight: {
        type: String,
    },
    measureNine: {
        type: String,
    },
    measureTen: {
        type: String,
    },
    measureEleven: {
        type: String,
    },
    measureTweleve: {
        type: String,
    },
    measureThirteen: {
        type: String,
    },
    measureFourteen: {
        type: String,
    },
    measureFifteen: {
        type: String,
    },
    measureSixteen: {
        type: String,
    },
    measureSeventeen: {
        type: String,
    },
    measureEighteen: {
        type: String,
    },
    measureNineteen: {
        type: String,
    },
    measureTwenty: {
        type: String,
    },
    tutorial: {
        type: String,
        required: false,
    },
    toTry: {
        type: Boolean,
        default: false,
    },
    made: {
        type: Boolean,
        default: false,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
});

module.exports = model('recipe', Recipe);