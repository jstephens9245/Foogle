const express = require('express');
const router = express.Router();
const pagesRoute = require('./pages');

router.get('/', function(req, res) {
  res.send('API HOME');
})

router.use('/pages', pagesRoute);


module.exports = router;
