const express = require("express");
const bodyParser = require("body-parser");
const recipeRoutes = require("./routes/recipes");
const { mongoURI, port } = require("./config");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/recipes', recipeRoutes);

// const mongoose = require("mongoose");
// const {mongoURI} = require(".config");
// const uri = `${mongoURI}`;
// let port = process.env.PORT || 8000;
let port = process.env.PORT;

app.get('/', (req, res) => {
    res.json({message: 'recipe app node js api'});
})


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})