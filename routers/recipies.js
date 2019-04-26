const express = require('express');
const recipiesApi = require('../api/recipiesApi')
const accountApi = require('../api/accountApi')
const router = express.Router()

router
    .route('/recipies')
    .get((req,res) => {
            res.send("you found me");
        })
router.route('/recipies/:id').get((req,res) => {
    recipiesApi.getRecipeById(req.params.id)
        .then(recipie => {
            res.render('recipies/recipe')
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
        recipiesApi.newRecipe(req.body)
            .then(() => {
                res.redirect('/accounts/'+`${req.params.id}`)
            })
    })

module.exports = router;