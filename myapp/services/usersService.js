//connecting with mysql workbench:
const mysql = require('mysql2');


class UsersService {

    newUser(user, callback) {
        const connection = mysql.createConnection({
          host: 'localhost',
          user: 'root',
          port: 3306,
          database: 'nodeshop',
          password: 'maria1995',
        });
    
        connection.query(
          'INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)',
          [user.name, user.email, user.password, user.phone],
          (error, results) => {
            if (error) {
              console.log(error);
              callback(error, null);
            } else {
              console.log(results);
              callback(null, results);
            }
            connection.end();
        }

            );
          }
        }
        

module.exports = {
    UsersService: UsersService,
}