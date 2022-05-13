const express = require('express');
const router = express.Router();
const deleteOrderDetail = require('../service/deleteOrderDetail');

router.get('/:odd_id', async function (req, res, next) {
    try {
        res.json(await deleteOrderDetail.deletes(req.params.odd_id));
    } catch (err) {
        console.error(`Error while  Deleting OrderDetail`, err.message);
        next(err);
    }
});

module.exports = router;