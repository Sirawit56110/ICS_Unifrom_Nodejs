const express = require('express');
const router = express.Router();
const insertPattern = require('../service/insertPattern');

router.post('/', async function (req, res, next) {
    try {
        res.json(await insertPattern.create(req.body));
    } catch (err) {
        console.error(`Error while creating pattern`, err.message);
        next(err);
    }
});

module.exports = router;