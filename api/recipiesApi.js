const mongoose = require('./connection.js');
const ObjectId = mongoose.Schema.Types.ObjectId;

const RecipeSchema = mongoose.Schema({
    name: String,
    instructions: String,
    ingredients: Array,
    acctId: ObjectId
})

let RecipiesColleection = mongoose.model("recipies", RecipeSchema)

function getAllRecipies() {
    return RecipiesColleection.find()
}

function getRecipiesByAccountId(acctId) {
    return RecipiesColleection.find({ acctId })
}

function getRecipeById(recipeId) {
    return RecipiesColleection.findById(recipeId);
}

function newRecipe(recipeData) {
    return RecipiesColleection.create(recipeData);
}

function deleteRecipeById(recipeId) {
    return RecipiesColleection.deleteOne({ _id: recipeId })
}

module.exports = {
    getAllRecipies,
    getRecipiesByAccountId,
    getRecipeById,
    newRecipe,
    deleteRecipeById
}