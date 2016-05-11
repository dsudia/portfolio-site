var express = require('express');
var router = express.Router();
var passport = require('../lib/passport');
var helpers = require('../lib/helpers');

router.get('/', function(req, res, next) {
  res.sendFile('/src/client/index.html');
});

module.exports = router;
