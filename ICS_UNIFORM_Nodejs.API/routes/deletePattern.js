const express = require('express');
const router = express.Router();
const deletePattern = require('../service/deletePattern');

router.get('/:pt_id', async function (req, res, next) {
    try {
        res.json(await deletePattern.deletes(req.params.pt_id));
    } catch (err) {
        console.error(`Error while  Deleting Pattern`, err.message);
        next(err);
    }
});

module.exports = router;