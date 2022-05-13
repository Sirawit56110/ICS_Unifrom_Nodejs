const express = require('express');
const router = express.Router();
const deleteProductList = require('../service/deleteProductList');

router.get('/:pdl_id', async function (req, res, next) {
    try {
        res.json(await deleteProductList.deletes(req.params.pdl_id));
    } catch (err) {
        console.error(`Error while  Deleting ProductList`, err.message);
        next(err);
    }
});

module.exports = router;