const { model, Schema } = require("mongoose");

const Recipe = new Schema({
    meal: String,
    image: String,
    instructions: String,
    ingredients: {
        1: String,
        2: String,
        3: String,
        4: String,
        5: String,
        6: String,
        7: String,
        8: String,
        9: String,
        10: String,
        11: String,
        12: String,
        13: String,
        14: String,
        15: String,
        16: String,
        17: String,
        18: String,
        19: String,
        20: String,
    },
    measurements: {
        1: String,
        2: String,
        3: String,
        4: String,
        5: String,
        6: String,
        7: String,
        8: String,
        9: String,
        10: String,
        11: String,
        12: String,
        13: String,
        14: String,
        15: String,
        16: String,
        17: String,
        18: String,
        19: String,
        20: String,
    },
    tutorial: String,
    try: {
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