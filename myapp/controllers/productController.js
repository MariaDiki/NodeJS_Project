const { Queries } = require('../services/queries');

class productController {

    constructor(){
        this.dbQueries = new Queries()
    }

    async productOrder(req,res){
        /* console.log('hello2',req.body); */
        
        console.log("Check Controller Side");
 
    }
    
}

module.exports =  new productController();