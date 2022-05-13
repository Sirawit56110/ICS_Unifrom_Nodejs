const express = require('express');
const router = express.Router();
const insertProduct = require('../service/insertProduct');

router.post('/', async function (req, res, next) {
    try {
        res.json(await insertProduct.create(req.body));
    } catch (err) {
        console.error(`Error while creating product`, err.message);
        next(err);
    }
});

module.exports = router;