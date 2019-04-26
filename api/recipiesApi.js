const mongoose = require('./connection.js');

const RecipeSchema = mongoose.Schema({
    name: String,
    instructions: String,
    ingredients: Array
})

let RecipiesColleection = mongoose.model("recipies", RecipeSchema)