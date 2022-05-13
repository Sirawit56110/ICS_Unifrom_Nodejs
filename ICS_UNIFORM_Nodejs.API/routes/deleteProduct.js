const express = require('express');
const router = express.Router();
const deleteProduct = require('../service/deleteProduct');

router.get('/:pd_id', async function (req, res, next) {
    try {
        res.json(await deleteProduct.deletes(req.params.pd_id));
    } catch (err) {
        console.error(`Error while  Deleting Product`, err.message);
        next(err);
    }
});

module.exports = router;