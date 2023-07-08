const { UsersService } = require('../services/usersService');



class UsersController {

    constructor(){
        this.usersService = new UsersService();
    }

    newUser(req,res){
        let user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.pass,         
            phone: req.body.phone,
 

        };

        this.usersService.newUser(user,(error,data)=>{
            if(error){
                res.end(JSON.stringify(error));
            } else {
                res.end(JSON.stringify(data));
            } 
        })
        res.redirect('/?message=Registered%20Successfully');
    } 
}

module.exports =  UsersController;
