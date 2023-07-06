const { UsersService } = require('../services/usersService');
const { Queries } = require('../services/queries');


class UsersController {

    constructor(){
        //this.usersService = new UsersService();
        this.dbQueries = new Queries()
    }

   async checkLogin(req,res){
        console.log('hello2',req.body);
        const username = req.body.username;
        const password = req.body.password;
        const data = {username,password}

         this.dbQueries.checkUser(data,(ans)=>{
            console.log('ans from login db',ans)

            res.send({ok:'abc'})
            // Store the username in the savedUsername variable
            // Continue Here

        })
    }
    getUsers(req,res){
        
        this.usersService.getUsers((error,data)=>{
            if(error){
                res.end(error);
            } else {
                console.log(data);
                res.end(JSON.stringify(data));
            }
        })

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
    } 
}

module.exports =  new UsersController()
