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

module.exports = {
    getAllAccounts,
    getAccountById,

}