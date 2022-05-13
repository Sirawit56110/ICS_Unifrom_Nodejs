const express = require('express');
const router = express.Router();
const updateProduct = require('../service/updateProduct');

router.post('/', async function (req, res, next) {
    try {
        res.json(await updateProduct.update(req.body));
    } catch (err) {
        console.error(`Error while  updating Product`, err.message);
        next(err);
    }
});

module.exports = router;