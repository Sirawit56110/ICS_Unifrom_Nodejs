const express = require('express');
const router = express.Router();
const getGender = require('../service/getGender');

router.get('/', async function(req, res, next) {
  try {
    res.json(await getGender.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting Data gender `, err.message);
    next(err);
  }
});

module.exports = router;