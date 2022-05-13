const express = require('express');
const router = express.Router();
const selectPattern = require('../service/selectPattern');

router.get('/', async function (req, res, next) {
    try {
        res.json(await selectPattern.selects());
    } catch (err) {
        console.error(`Error while  Selecting Pattern`, err.message);
        next(err);
    }
});

module.exports = router;