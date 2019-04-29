const express = require('express');
const recipiesApi = require('../api/recipiesApi')
const accountApi = require('../api/accountApi')
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
                res.render('recipies/recipe', {recipe})
            })
    })
    .delete((req,res) => {
        recipiesApi.deleteRecipeById(req.params.id)
            .then(() => {
                res.redirect('/accounts')
            })
    })
router
    .route('/recipies/:id/new-recipe-form')
    .get((req,res) => {
        accountApi.getAccountById(req.params.id)
            .then(account => {
                res.render('recipies/new-recipe-form', { account })   
            })
    })
    .post((req,res) => {
        let recipeData = {
            name: req.body.name,
            instructions: req.body.instructions,
            ingredients: req.body.ingredients,
            acctId: req.params.id
        }
        console.log(recipeData)
        recipiesApi.newRecipe(recipeData)
            .then(() => {
                res.redirect(`/accounts/${req.params.id}`)
            })
    })

module.exports = router;