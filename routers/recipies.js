const express = require('express');
const recipiesApi = require('../api/recipiesApi')
const accountApi = require('../api/accountApi')
const groceryApi = require('../api/groceryApi')
const router = express.Router()

router
    .route('/recipies')
    .get((req,res) => {
            res.send("you found me");
        })
router
    .route('/recipies/:id')
    .get((req,res) => {
        recipiesApi.getRecipeById(req.params.id)
            .then(recipe => {
                let account = recipe.acctId
                groceryApi.getGroceryListsByAccountId(account)
                    .then(lists => {
                        recipe.lists = lists
                        res.render('recipies/recipe', {recipe})
                    })
                // res.render('recipies/recipe', {recipe})
            })
    })
    .delete((req,res) => {
        recipiesApi.getRecipeById(req.params.id)
            .then(recipe => {
                let account = recipe.acctId
                recipiesApi.deleteRecipeById(req.params.id)
                    .then(() => {
                        res.redirect(`/accounts/${account}`)
                    })
            })
    })
router
    .route('/recipies/:acctId/new-recipe-form')
    .get((req,res) => {
        accountApi.getAccountById(req.params.acctId)
            .then(account => {
                res.render('recipies/new-recipe-form', { account })   
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
        recipiesApi.newRecipe(recipeData)
            .then(() => {
                res.redirect(`/accounts/${req.params.acctId}`)
            })
    })

module.exports = router;