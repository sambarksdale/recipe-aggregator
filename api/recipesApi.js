const mongoose = require('./connection.js');
const ObjectId = mongoose.Schema.Types.ObjectId;

const RecipeSchema = mongoose.Schema({
    name: String,
    instructions: String,
    ingredients: Array,
    acctId: ObjectId
})

let RecipesColleection = mongoose.model("recipes", RecipeSchema)

function getAllRecipes() {
    return RecipesColleection.find()
}

function getRecipesByAccountId(acctId) {
    return RecipesColleection.find({ acctId })
}

function getRecipeById(recipeId) {
    return RecipesColleection.findById(recipeId);
}

function newRecipe(recipeData) {
    return RecipesColleection.create(recipeData);
}

function deleteRecipeById(recipeId) {
    return RecipesColleection.deleteOne({ _id: recipeId })
}

function editRecipe(recipe,updatedRecipe) {
    return RecipesColleection.updateOne(recipe,updatedRecipe)
}

module.exports = {
    getAllRecipes,
    getRecipesByAccountId,
    getRecipeById,
    newRecipe,
    deleteRecipeById,
    editRecipe
}