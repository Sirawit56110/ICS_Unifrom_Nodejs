const express = require('express');
const router = express.Router();
const updateOrder = require('../service/updateOrder');

router.post('/', async function (req, res, next) {
    try {
        res.json(await updateOrder.update(req.body));
    } catch (err) {
        console.error(`Error while  updating Order`, err.message);
        next(err);
    }
});

module.exports = router;