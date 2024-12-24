const db = require('../config/db');

// Create a Profile
const createProfile = (userId, bio, avatarUrl, callback) => {
  const query = `INSERT INTO profiles (user_id, bio, avatar_url) VALUES (?, ?, ?)`;
  db.query(query, [userId, bio, avatarUrl], (err, result) => {
    if (err) {
      console.error('Error creating profile:', err);
      return callback(err);
    }
    callback(null, result);
  });
};

// Get Profile by User ID
const getProfileByUserId = (userId, callback) => {
  const query = `SELECT * FROM profiles WHERE user_id = ?`;
  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error('Error getting profile:', err);
      return callback(err);
    }
    callback(null, result[0]);
  });
};

module.exports = { createProfile, getProfileByUserId };
