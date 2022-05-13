const express = require('express');
const router = express.Router();
const deleteFigure = require('../service/deleteFigure');

router.get('/:fg_id', async function (req, res, next) {
    try {
        res.json(await deleteFigure.deletes(req.params.fg_id));
    } catch (err) {
        console.error(`Error while  Deleting Figurelor`, err.message);
        next(err);
    }
});

module.exports = router;