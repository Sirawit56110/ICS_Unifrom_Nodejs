const express = require('express');
const router = express.Router();
const insertFigure = require('../service/insertFigure');

router.post('/', async function (req, res, next) {
    try {
        res.json(await insertFigure.create(req.body));
    } catch (err) {
        console.error(`Error while creating figure`, err.message);
        next(err);
    }
});

module.exports = router;