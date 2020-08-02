var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/users', function(req, res, next) {
  res.send('response');
});

router.get('/detail', function(req, res, next) {
  res.send('detail');
});

module.exports = router;
