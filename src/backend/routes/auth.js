const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

// User Registration Route
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: 'Error hashing password' });
    }

    User.createUser(username, email, hashedPassword, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error creating user' });
      }
      res.status(201).json({ message: 'User created' });
    });
  });
});

// User Login Route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findUserByEmail(email, (err, user) => {
    if (err || !user) {
      return res.status(404).json({ message: 'User not found' });
    }

    bcrypt.compare(password, user.password, (err, match) => {
      if (err || !match) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ message: 'Login successful', token });
    });
  });
});

module.exports = router;
