const mongoose = require('./connection.js');

const AccountSchema = mongoose.Schema({
    firstName: String,
    lastName: String
})

let AccountsCollection = mongoose.model("accounts", AccountSchema)

function getAllAccounts() {
    return AccountsCollection.find();
}

function getAccountById(id) {
    return AccountsCollection.findById(id);
}

function newAccount(acctData) {
    return AccountsCollection.create(acctData);
}

module.exports = {
    getAllAccounts,
    getAccountById,
    newAccount,

}