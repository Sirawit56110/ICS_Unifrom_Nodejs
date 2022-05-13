const express = require('express');
const router = express.Router();
const selectColor = require('../service/selectColor');

router.get('/', async function (req, res, next) {
    try {
        res.json(await selectColor.selects());
    } catch (err) {
        console.error(`Error while  Selecting Color`, err.message);
        next(err);
    }
});

module.exports = router;