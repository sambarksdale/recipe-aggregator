const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const GroceryListSchema = mongoose.Schema({
    name: String,
    list: Array,
    acctId: ObjectId
})

let GroceryListCollection = mongoose.model("groceryList", GroceryListSchema)

function newGroceryList(listItems) {
    return GroceryListCollection.create(listItems)
}

function getGroceryListsByAccountId(accountId) {
    return GroceryListCollection.find(accountId)
}
module.exports = {
    newGroceryList,
    getGroceryListsByAccountId
}