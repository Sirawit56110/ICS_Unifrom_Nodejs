const express = require('express');
const router = express.Router();
const selectFigure = require('../service/selectFigure');

router.get('/', async function (req, res, next) {
    try {
        res.json(await selectFigure.selects());
    } catch (err) {
        console.error(`Error while  Selecting Figure`, err.message);
        next(err);
    }
});

module.exports = router;