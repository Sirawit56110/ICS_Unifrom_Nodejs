const express = require('express');
const router = express.Router();
const insertOrderDetail = require('../service/insertOrderDetail');

router.post('/', async function (req, res, next) {
    try {
        res.json(await insertOrderDetail.create(req.body));
    } catch (err) {
        console.error(`Error while creating OrderDetail`, err.message);
        next(err);
    }
});

module.exports = router;