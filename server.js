const express = require("express");
const bodyParser = require("body-parser");
const recipeRoutes = require("./routes/recipes");

const port = 3000
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/recipes', recipeRoutes);

app.get('/', (req, res) => {
    res.json({message: 'recipe app node js api'});
})


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})