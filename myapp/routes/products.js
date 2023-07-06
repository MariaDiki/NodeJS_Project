var express = require('express');
var router = express.Router();
// const { UsersController } = require('../controllers/usersController');
// const usersController = new UsersController();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});



/* GET users listing. */
router.get('/', urlencodedParser, function(req, res, next) {
  // usersController.getUsers(req,res);
  res.send('respond with a resource');

});


module.exports = router;