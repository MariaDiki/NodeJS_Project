var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const  {Queries} = require("../services/queries.js")
const UsersController =  require("../controllers/usersController.js");
const loginController = require('../controllers/loginController.js');

const urlencodedParser = bodyParser.urlencoded({extended: false});

// Declare a variable to store the username
var savedUsername = '';

/* GET home page. */
router.get('/', function(req, res, next) { res.sendFile('index.html', { root: __dirname });});

// router.post('/login', urlencodedParser, function(req, res, next) {


router.post('/login',(req, res) => loginController.checkLogin(req,res));



// Create a new route handler for the productsPage.html route
router.get('/productsPage.html', function(req, res, next) {
  // Use the savedUsername variable
  const username = savedUsername;

  // Render the productsPage.html and pass the username as a parameter
  res.render('productsPage', { username: username });
});

module.exports = router;
