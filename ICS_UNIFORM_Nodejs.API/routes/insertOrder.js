const express = require('express');
const router = express.Router();
const insertOrder = require('../service/insertOrder');

router.post('/', async function (req, res, next) {
    try {
        res.json(await insertOrder.create(req.body));
    } catch (err) {
        console.error(`Error while creating order`, err.message);
        next(err);
    }
});

module.exports = router;