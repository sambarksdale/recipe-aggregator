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

function deleteAccountById(id) {
    return AccountsCollection.deleteOne({ _id: id });
}

function editAccountById(id, acctData) {
    return AccountsCollection.updateOne(account, acctData) 
        
}

module.exports = {
    getAllAccounts,
    getAccountById,
    newAccount,
    deleteAccountById,
    editAccountById

}