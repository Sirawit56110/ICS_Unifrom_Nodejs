const express = require('express');
const router = express.Router();
const updateColor = require('../service/updateColor');

router.post('/', async function (req, res, next) {
    try {
        res.json(await updateColor.update(req.body));
    } catch (err) {
        console.error(`Error while  updating Color`, err.message);
        next(err);
    }
});

module.exports = router;