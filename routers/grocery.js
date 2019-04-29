const express = require('express');
const groceryApi = require('../api/groceryApi')
const recipiesApi = require('../api/recipiesApi')
const accountApi = require('../api/accountApi')
const router = express.Router()

router.route('/grocery/:id/new-grocery-form')

module.exports = router;
