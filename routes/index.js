var express = require('express');
var items = require('./items');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET item description*/
router.get('/getItems/:searchQuery',items.getItems);

module.exports = router;
