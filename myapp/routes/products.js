var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const productController = require('../controllers/productController');

const urlencodedParser = bodyParser.urlencoded({extended: false});



/* GET users listing. */
router.get('/', urlencodedParser, function(req, res, next) {

  res.send('respond with a resource');

});

router.post('/Cart', urlencodedParser, function(req, res, next) {
  productController.showCart();
});


module.exports = router; 