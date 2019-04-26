const mongoose = require('./connection.js');

const RecipeSchema = mongoose.Schema({
    name: String,
    instructions: String,
    ingredients: Array
})

let RecipiesColleection = mongoose.model("recipies", RecipeSchema)

function getAllRecipies() {
    return RecipiesColleection.find()
}

function getRecipeById(id) {
    return RecipiesColleection.findById(id);
}

module.exports = {
    getAllRecipies,
    getRecipeById,
}