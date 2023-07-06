const express = require('express');
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'maria1995',
  database: 'nodeshop'
});

const app = express();

 
class Queries {
  constructor(){

  }

   async checkUser(data,callback){
    const {username,password} = data
      const query = `SELECT * FROM users WHERE name = ? AND password = ?`;  
      pool.query(query, [username, password], (error, results) => {
          if (error) {
            console.error('Error executing query:', error);
            callback(error)
          }else {
            callback(results) 
          }

          // if (results.length > 0) {
          //   // Username and password match, respond with success
          //   callback(results)
          // } else {
          //   // Invalid username or password
          //   callback(error)
          // }
      }); 
}

}

module.exports = {Queries: Queries }
