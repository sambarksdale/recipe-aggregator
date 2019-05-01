const express = require('express');
const recipesApi = require('../api/recipesApi')
const accountApi = require('../api/accountApi')
const groceryApi = require('../api/groceryApi')
const router = express.Router()

router
    .route('/recipes')
    .get((req,res) => {
            res.send("you found me");
        })
router
    .route('/recipes/:id')
    .get((req,res) => {
        recipesApi.getRecipeById(req.params.id)
            .then(recipe => {
                let account = recipe.acctId
                groceryApi.getGroceryListsByAccountId(account)
                    .then(lists => {
                        recipe.lists = lists
                        res.render('recipes/recipe', {recipe})
                    })
            })
    })
    .delete((req,res) => {
        recipesApi.getRecipeById(req.params.id)
            .then(recipe => {
                let account = recipe.acctId
                recipesApi.deleteRecipeById(req.params.id)
                    .then(() => {
                        res.redirect(`/accounts/${account}`)
                    })
            })
    })

router.route('/recipes/:id/edit')
    .get((req,res) => {
        recipesApi.getRecipeById(req.params.id)
            .then(recipe => {
                res.render('recipes/edit-recipe-form', { recipe });
            })
    })
    .put((req,res) => {
        recipesApi.getRecipeById(req.params.id)
            .then(recipe => {
                let updatedRecipe = {
                    name: req.body.name,
                    instructions: req.body.instructions,
                    ingredients: req.body.ingredients,
                    acctId: recipe.acctId
                }
                recipesApi.editRecipe(recipe,updatedRecipe)
                    .then(() => {
                        res.redirect(`/accounts/${recipe.acctId}`)
                    })
            })
    })

router
    .route('/recipes/:acctId/new-recipe-form')
    .get((req,res) => {
        accountApi.getAccountById(req.params.acctId)
            .then(account => {
                res.render('recipes/new-recipe-form', { account })   
            })
    })
    .post((req,res) => {
        let recipeData = {
            name: req.body.name,
            instructions: req.body.instructions,
            ingredients: req.body.ingredients,
            acctId: req.params.acctId
        }
        console.log(recipeData)
        recipesApi.newRecipe(recipeData)
            .then(() => {
                res.redirect(`/accounts/${req.params.acctId}`)
            })
    })

module.exports = router;