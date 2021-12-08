const express = require("express");
const bodyParser = require("body-parser");
const recipeRoutes = require("./routes/recipes");
const { mongoURI } = require("./config");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/recipes', recipeRoutes);

app.use(express.static("public"));

const mongoose = require("mongoose");
const uri = `${mongoURI}`;
let port = process.env.PORT || 8000;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`You are connected. Listening on port ${port}.`);
        });

    })
    .catch(console.error);

app.get('/', (req, res) => {
    res.json({ message: 'recipe app node js api' });
})