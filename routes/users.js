var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/all', function(req, res, next) {
  res.send('respond with all resources');
});

router.post('/one', function(req, res, next) {
  res.send('respond with one resource');
});

module.exports = router;
