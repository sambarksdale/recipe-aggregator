//exports.accountRouter = require('./accounts-router.js')

const express = require('express');
const router = express.Router();

router.use(require('./accounts.js'))

module.exports = router;