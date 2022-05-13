const express = require('express');
const router = express.Router();
const insertProductList = require('../service/insertProductList');

router.post('/', async function (req, res, next) {
    try {
        res.json(await insertProductList.create(req.body));
    } catch (err) {
        console.error(`Error while creating productList`, err.message);
        next(err);
    }
});

module.exports = router;