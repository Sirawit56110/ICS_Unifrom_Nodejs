const express = require('express');
const router = express.Router();
const selectOrderDetail = require('../service/selectOrderDetail');

router.post('/', async function (req, res, next) {
    try {
        res.json(await selectOrderDetail.selects(req.body));
    } catch (err) {
        console.error(`Error while  Selecting OrderDetail`, err.message);
        next(err);
    }
});

module.exports = router;