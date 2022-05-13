const express = require('express');
const router = express.Router();
const updateProductList = require('../service/updateProductList');

router.post('/', async function (req, res, next) {
    try {
        res.json(await updateProductList.update(req.body));
    } catch (err) {
        console.error(`Error while  updating ProductList`, err.message);
        next(err);
    }
});

module.exports = router;