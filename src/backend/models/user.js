const db = require('../config/db');

// Create a User
const createUser = (username, email, password, callback) => {
  const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
  db.query(query, [username, email, password], (err, result) => {
    if (err) {
      console.error('Error creating user:', err);
      return callback(err);
    }
    callback(null, result);
  });
};

// Find a User by Email
const findUserByEmail = (email, callback) => {
  const query = `SELECT * FROM users WHERE email = ?`;
  db.query(query, [email], (err, result) => {
    if (err) {
      console.error('Error finding user:', err);
      return callback(err);
    }
    callback(null, result[0]);
  });
};

module.exports = { createUser, findUserByEmail };
