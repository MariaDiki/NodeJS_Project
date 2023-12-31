const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/DDG_NodeJS', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

const userSchema = new mongoose.Schema({
  name: String,
  password: String
});

const User = mongoose.model('Users', userSchema);

const app = express();

class Queries {
  constructor() {

  }


  async checkUser(data, callback) {
    const { username, password } = data;
    try {
      const user = await User.findOne({ name: username, password: password });
      if (!user) {
        callback("User not found");
   
      } else {
        callback(null, user);
      }
    } catch (error) {
      console.error('Error executing query:', error);
      callback(error);
    }
  }
}

module.exports = { Queries: Queries }