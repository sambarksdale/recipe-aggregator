//exports.accountRouter = require('./accounts-router.js')

const express = require('express');
const router = express.Router();

router.use(require('./accounts.js'))
router.use(require('./recipies.js'))
router.use(require('./grocery.js'))

module.exports = router;