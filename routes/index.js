var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prime Mobiles', name:null });
});

router.post('/', function(req, res, next) {

  res.render('index', { title: 'Prime Mobiles', name:req.body.name });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Prime Mobiles', name:null });
});

router.get('/map_view', function(req, res, next) {
  res.render('map_view', { title: 'Prime Mobiles', name:null });
});

router.get('/page5', function(req, res, next) {
  res.render('page5', { title: 'Prime Mobiles', name:null });
});

router.get('/page6', function(req, res, next) {
  res.render('page6', { title: 'Prime Mobiles', name:null });
});



module.exports = router;
