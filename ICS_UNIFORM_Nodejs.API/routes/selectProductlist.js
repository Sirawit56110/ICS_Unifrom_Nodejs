const express = require('express');
const router = express.Router();
const selectProductlist = require('../service/selectProductlist');

router.post('/', async function (req, res, next) {
    try {
        res.json(await selectProductlist.selects(req.body));
    } catch (err) {
        console.error(`Error while  Selecting Productlist`, err.message);
        next(err);
    }
});

module.exports = router;