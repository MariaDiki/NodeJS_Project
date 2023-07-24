const productService  = require('../services/productService');
 
class productController {

    constructor(){
    }


    showCart(req,res) {
        console.log('Button clicked');
        productService.placeOrder(req);
        res.sendStatus(200);
      }
      
}

module.exports = new productController();