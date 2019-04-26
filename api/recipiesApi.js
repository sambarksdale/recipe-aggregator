const mongoose = require('./connection.js');
const ObjectId = mongoose.Schema.Types.ObjectId;

const RecipeSchema = mongoose.Schema({
    name: String,
    instructions: String,
    ingredients: Array,
    userId: ObjectId
})

let RecipiesColleection = mongoose.model("recipies", RecipeSchema)

function getAllRecipies() {
    return RecipiesColleection.find()
}

function getRecipiesByAccountId(accountId) {
    return RecipiesColleection.find({ accountId })
}

function getRecipeById(id) {
    return RecipiesColleection.findById(id);
}

function newRecipe(recipeData) {
    return RecipiesColleection.create(recipeData);
}

module.exports = {
    getAllRecipies,
    getRecipiesByAccountId,
    getRecipeById,
    newRecipe,
}