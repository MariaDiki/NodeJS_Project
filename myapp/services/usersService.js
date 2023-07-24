const mongoose = require('mongoose');

class UsersService {
  constructor() {

  }

  newUser(user, callback) {
    const db = mongoose.connection;

    db.collection('users').insertOne({
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
    })
      .then((result) => {
        console.log(result);
        callback(null, result);
      })
      .catch((err) => {
        console.error(err);
        callback(err, null);
      });
  }
}

module.exports = {
  UsersService: UsersService,
};
