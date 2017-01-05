const express = require('express');
const router = express.Router();
const { Pages, db} = require('../../models/index');


router.get('/', function(req, res, next) {

  Pages.findAll({where: {
    userId: req.session.userId
  }}).then(posts => {
    res.json(posts)
  }).catch(next)
})

module.exports = router;
