const express = require('express');
const router = express.Router();
const updateOrderDetail = require('../service/updateOrderDetail');

router.post('/', async function (req, res, next) {
    try {
        res.json(await updateOrderDetail.update(req.body));
    } catch (err) {
        console.error(`Error while  updating OrderDetail`, err.message);
        next(err);
    }
});

module.exports = router;