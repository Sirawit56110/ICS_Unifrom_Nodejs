const express = require('express');
const router = express.Router();
const deleteOrder = require('../service/deleteFigure');

router.get('/:od_id', async function (req, res, next) {
    try {
        res.json(await deleteOrder.deletes(req.params.od_id));
    } catch (err) {
        console.error(`Error while  Deleting Order`, err.message);
        next(err);
    }
});

module.exports = router;