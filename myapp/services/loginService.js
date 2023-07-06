const express = require('express');
const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'maria1995',
  database: 'nodeshop'
});

const app = express();

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
  
  pool.query(query, [username, password], (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      return res.status(500).send('Internal Server Error');
    }

    if (results.length > 0) {
      // Username and password match, respond with success
      res.sendStatus(200);
    } else {
      // Invalid username or password
      res.sendStatus(401);
    }
  }); 
});
module.exports = router;
