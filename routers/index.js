//exports.accountRouter = require('./accounts-router.js')

const express = require('express');
const router = express.Router();

router.use(require('./accounts.js'))
router.use(require('./recipies.js'))

module.exports = router;