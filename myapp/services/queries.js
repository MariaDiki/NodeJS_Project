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
            if (results.length == 0){
              callback("User not found");
            } else {
            callback(results) 
          }
        }

      }); 
}

  

}

module.exports = {Queries: Queries }
