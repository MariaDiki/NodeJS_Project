const { Queries } = require('../services/queries');


class loginController {

    constructor(){
        this.dbQueries = new Queries()
    }

   async checkLogin(req,res){
        console.log('hello2',req.body);
        const username = req.body.username;
        const password = req.body.password;
        const data = {username,password}

         this.dbQueries.checkUser(data,(ans)=>{
            console.log('ans from login db',ans);
            if (ans == "User not found"){
                res.send({error: 'User not exists, Please Register'});
            } else {
                res.send(data);
            }

        });
    }

}

module.exports =  new loginController();