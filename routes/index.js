var express = require('express');

var moment = require('moment');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/sparkles', function(req, res, next) {
  var now = moment().format('YYYYMMDD HHmmss.SSS')
  res.render('index', { title: 'Sparkles' , thedate: now });
});


module.exports = router;
