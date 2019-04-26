const express = require('express');
const router = express.Router()

router
    .route('/recipies').get((req,res) => {
        res.send("you found me");
    })

module.exports = router;