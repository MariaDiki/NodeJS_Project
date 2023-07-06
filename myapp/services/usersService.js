// connection with knex
// to use knex do: npm install knex onside the terminal
const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        port: 3306,
        database: 'nodeshop',
        password: 'maria1995',

    }
})



//connecting with mysql workbench:
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // default port:
    port: 3306,
    database: 'nodeshop',
    password: 'maria1995',


})
const allUsers = 'select * from nodeshop.users';



class UsersService {

    getUsers(callback) {
        connection.query(allUsers, (error, users) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, users);
            }
        }) 

    }
    newUser(user, callback) {
        knex('users')
            .insert({
                name: user.name,
                email: user.email,
                password: user.password,
                phone: user.phone,
            })
            .then((rows) => {
                console.log(rows);
                callback(null, rows);
            })
            .catch((error)=> {
                console.log(error);
                callback(error,null);
            })
    }



}



module.exports = {
    UsersService: UsersService,
}