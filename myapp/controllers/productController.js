const productService  = require('../services/productService');
 
class productController {

    constructor(){
    }


    showCart(req,res) {
        console.log('Button Cart clicked');
        productService.placeOrder(req);
        res.sendStatus(200);
      }
      showAbout(req,res) {
        console.log('Button about clicked');
        const html = productService.aboutText(req);
        res.status(200).send(html);

      }
      
}

module.exports = new productController();