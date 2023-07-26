var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const productController = require('../controllers/productController');

const urlencodedParser = bodyParser.urlencoded({extended: false});



/* GET users listing. */
router.get('/', urlencodedParser, function(req, res, next) {

  res.send('respond with a resource');

});

router.post('/cart', urlencodedParser, function(req, res, next) {
  productController.showCart(req,res);
});

/* router.get('/about', urlencodedParser, function(req, res, next) {
  console.log("About Button");
  res.json({ message: 'About Button clicked' });
}); */

router.post('/about', urlencodedParser, function(req, res, next) {
  productController.showAbout(req,res);
});



module.exports = router; 