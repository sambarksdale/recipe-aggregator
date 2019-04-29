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
    .route('/grocery/:acctId/new-grocery-form')
    .get((req,res) => {
        accountApi.getAccountById(req.params.acctId)
            .then(account => {
                res.render('grocery/new-grocery-form', { account })
            })
    })
    .post((req,res) => {
        let listData = {
            name: req.body.name,
            list: req.body.list,
            acctId: req.params.acctId
        }
        groceryApi.newGroceryList(listData)
            .then(() => {
                res.redirect(`/accounts/${req.params.acctId}`)
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
        groceryApi.deleteListById(req.params.listId)
            .then(() => {
                res.redirect(`/accounts/${req.params.acctId}`)
            })
    })

module.exports = router;
