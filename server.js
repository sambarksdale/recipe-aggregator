const accountApi = require('./api/accountApi.js');
const express = require('express');
const app = express();
const methodOverride = require("method-override");

app.use(express.urlencoded());
app.use(methodOverride('_method'));
app.use(express.static(__dirname+"/public"));

app.set("view engine", "hbs");

app.get('/', (req,res) => {
    res.redirect("/accounts");
})

app.get('/accounts', (req,res) => {
    accountApi.getAllAccounts()
        .then(accounts => {
            res.render("accounts/accounts", {accounts});
        }) 
})

app.get('/accounts/new-account-form', (req,res) => {
    res.render('accounts/new-account-form');
})

app.post('/accounts', (req,res) => {
    console.log(req.body)
    accountApi.newAccount(req.body)
        .then(() => {
            res.redirect('/accounts');
        })
})

app.get('/accounts/:id', (req,res) => {
    accountApi.getAccountById(req.params.id)
        .then(account => {
            res.render('accounts/account', { account })
        })
})

app.delete('/accounts/:id', (req,res) => {
    accountApi.deleteAccountById(req.params.id)
        .then(() => {
            res.redirect('/accounts')
        })
})

app.get('/accounts/:id/edit', (req,res) => {
    accountApi.getAccountById(req.params.id)
        .then(account => {
            res.render('accounts/edit-account-form', { account })
        })
})

const PORT = process.env.PORT || 3000 
app.listen(PORT, () => {
    console.log("connected at: " + PORT)
});