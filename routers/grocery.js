const express = require('express');
const groceryApi = require('../api/groceryApi')
const recipiesApi = require('../api/recipiesApi')
const accountApi = require('../api/accountApi')
const router = express.Router()

router
    .route('/grocery')
    .get((req,res) => {
        groceryApi.listAllLists()
            .then(list => {
                res.render('grocery/lists', { list })
            })
    })

router
    .route('/grocery/:id/new-grocery-form')
    .get((req,res) => {
        accountApi.getAccountById(req.params.id)
            .then(account => {
                res.render('grocery/new-grocery-form', { account })
            })
    })
    .post((req,res) => {
        let listData = {
            name: req.body.name,
            list: req.body.list,
            acctId: req.params.id
        }
        groceryApi.newGroceryList(listData)
            .then(() => {
                res.redirect(`/accounts/${req.params.id}`)
            })
    })

router
    .route('/grocery/:listId/:actid')
    .get((req,res) => {
        groceryApi.getListById(req.params.listId)
            .then(list => {
                res.render('grocery/list', { list })
            })
    })
    .delete((req,res) => {
        
    })

module.exports = router;
