const express = require('express');
const router = express.Router();
const insertColor = require('../service/insertColor');

router.post('/', async function (req, res, next) {
    try {
        res.json(await insertColor.create(req.body));
    } catch (err) {
        console.error(`Error while creating color`, err.message);
        next(err);
    }
});

module.exports = router;