const express = require('express');
const router = express.Router();
const updateFigure = require('../service/updateFigure');

router.post('/', async function (req, res, next) {
    try {
        res.json(await updateFigure.update(req.body));
    } catch (err) {
        console.error(`Error while  updating Figure`, err.message);
        next(err);
    }
});

module.exports = router;