const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const GroceryListSchema = mongoose.Schema({
    name: String,
    list: Array,
    acctId: ObjectId
})

let GroceryListCollection = mongoose.model("groceryList", GroceryListSchema)

function listAllLists() {
    return GroceryListCollection.find()
}

function newGroceryList(listItems) {
    return GroceryListCollection.create(listItems)
}

function getListById(listId) {
    return GroceryListCollection.findById(listId)
}

function getGroceryListsByAccountId(acctId) {
    return GroceryListCollection.find({ acctId });
}

function updateList(list,items) {
    return GroceryListCollection.updateOne(list,items)
}

function deleteListById(listId) {
    return GroceryListCollection.deleteOne({ _id: listId})
}

function addItemsToList(lists,newItems) {
    if(typeof lists === 'object')
        for(let i = 0; i < lists.length; i++) {
            getListById(lists[i])
                .then(list => {
                    console.log(list.list)
                    if(typeof newItems === 'object' ) {
                        for(let i = 0; i < newItems.length; i++) {
                            
                        } 
                    } else {
                        console.log(newItems)
                    }
                })
        }
}

module.exports = {
    listAllLists,
    newGroceryList,
    getListById,
    getGroceryListsByAccountId,
    deleteListById,
    addItemsToList,
    updateList
}