const express = require('express');
const router = express.Router();
const updatePattern = require('../service/updatePattern');

router.post('/', async function (req, res, next) {
    try {
        res.json(await updatePattern.update(req.body));
    } catch (err) {
        console.error(`Error while  updating Pattern`, err.message);
        next(err);
    }
});

module.exports = router;