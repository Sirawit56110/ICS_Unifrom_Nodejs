const express = require('express');
const router = express.Router();
const selectOrder = require('../service/selectOrder');

router.post('/', async function (req, res, next) {
    try {
        res.json(await selectOrder.selects(req.body));
    } catch (err) {
        console.error(`Error while  Selecting Order`, err.message);
        next(err);
    }
});

module.exports = router;