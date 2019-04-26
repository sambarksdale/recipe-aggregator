const mongoose = require('./connection.js');

const AccountSchema = mongoose.Schema({
    firstName: String,
    lastName: String
})

let AccountsCollection = mongoose.model("accounts", AccountSchema)

function getAllAccounts() {
    return AccountsCollection.find();
}

function getAccountById(acctId) {
    return AccountsCollection.findById(acctId);
}

function newAccount(acctData) {
    return AccountsCollection.create(acctData);
}

function deleteAccountById(acctId) {
    return AccountsCollection.deleteOne({ _id: acctId });
}

function editAccount(acct, acctData) {
    return AccountsCollection.updateOne(acct, acctData) 
        
}

module.exports = {
    getAllAccounts,
    getAccountById,
    newAccount,
    deleteAccountById,
    editAccount

}