const express = require('express');
const accountApi = require('../api/accountApi')

const router = express.Router();

router
    .route('/accounts')
    .get((req,res) => {
        accountApi.getAllAccounts()
            .then(accounts => {
                res.render("accounts/accounts", {accounts});
            }) 
    })
    .post((req,res) => {
        accountApi.newAccount(req.body)
            .then(() => {
                res.redirect('/accounts');
            })
    })
    
router
    .route('/accounts/new-account-form')
    .get((req,res) => {
        res.render('accounts/new-account-form');
    })

router
    .route('/accounts/:id')
    .get((req,res) => {
        accountApi.getAccountById(req.params.id)
            .then(account => {
                res.render('accounts/account', { account })
            })
    })
    .delete((req,res) => {
        accountApi.deleteAccountById(req.params.id)
            .then(() => {
                res.redirect('/accounts')
            })
    })
    .put((req,res) => {
        accountApi.getAccountById(req.params.id)
            .then(account => {
                // console.log(account)
                // console.log(req.body)
                accountApi.editAccount(account,req.body)
                    .then(() => {
                        accountApi.getAccountById(req.params.id)
                            .then(account => {
                                res.render('accounts/account', { account })
                            })
                    })
            })
    })

router
    .route('/accounts/:id/edit')
    .get((req,res) => {
        accountApi.getAccountById(req.params.id)
            .then(account => {
                res.render('accounts/edit-account-form', { account })
            })
})



module.exports = router;
