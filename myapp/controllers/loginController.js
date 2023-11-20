const { Queries } = require('../services/queries');


class loginController {

    constructor(){
        this.dbQueries = new Queries()
    }

    async checkLogin(req, res) {
        console.log('hello2',req.body);
        const username = req.body.username;
        const password = req.body.password;
        const data = {username,password}

         this.dbQueries.checkUser(data,(error, user) => {
            if (error) {
              console.log('ans from login db', error);
              res.send({ error: 'User not exists, Please Register' });
            } else {
              console.log('ans from login db', user);
              res.send(data);
            }
          });
      
      
    }

}

module.exports =  new loginController();