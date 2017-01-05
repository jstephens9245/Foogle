const express = require('express');
const router = express.Router();
const { Page, db} = require('../../models/db');


router.post('/', function(req, res, next) {
  Page.findAll().then(pages => {
    res.send(pages)
  }).catch(next)
})

module.exports = router;
