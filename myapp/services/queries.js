const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://maria:169shLIwco7b3IEy@cluster0.esme3ba.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

const userSchema = new mongoose.Schema({
  name: String,
  password: String
});

const User = mongoose.model('Users', userSchema);

const app = express();
app.use(express.urlencoded({extended: true}));

class Queries {
  constructor() {

  }

  async checkUser(data, callback) {
    const { username, password } = data;
    try {
      const user = await User.find({ name: username, password: password });
      if (user.length == 0) {
        callback("User not found");
      } else {
        callback(user);
      }
    } catch (error) {
      console.error('Error executing query:', error);
      callback(error);
    }
  }
}

module.exports = { Queries: Queries }

