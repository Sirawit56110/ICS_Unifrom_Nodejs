const express = require('express');
const router = express.Router();
const deleteColor = require('../service/deleteColor');

router.get('/:cl_id', async function (req, res, next) {
    try {
        res.json(await deleteColor.deletes(req.params.cl_id));
    } catch (err) {
        console.error(`Error while  Deleting Color`, err.message);
        next(err);
    }
});

module.exports = router;