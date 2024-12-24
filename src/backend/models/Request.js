const db = require('../config/db');

// Create a Mentorship Request
const createRequest = (mentorId, menteeId, message, callback) => {
  const query = `INSERT INTO requests (mentor_id, mentee_id, message) VALUES (?, ?, ?)`;
  db.query(query, [mentorId, menteeId, message], (err, result) => {
    if (err) {
      console.error('Error creating request:', err);
      return callback(err);
    }
    callback(null, result);
  });
};

// Get Requests by Mentor ID
const getRequestsByMentorId = (mentorId, callback) => {
  const query = `SELECT * FROM requests WHERE mentor_id = ?`;
  db.query(query, [mentorId], (err, result) => {
    if (err) {
      console.error('Error getting requests:', err);
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = { createRequest, getRequestsByMentorId };
