const express = require('express');
const Profile = require('../models/user');
const router = express.Router();

// Get Profile Route
router.get('/:userId', (req, res) => {
  const userId = req.params.userId;

  Profile.getProfileByUserId(userId, (err, profile) => {
    if (err || !profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.status(200).json(profile);
  });
});

// Create Profile Route
router.post('/:userId', (req, res) => {
  const { bio, avatarUrl } = req.body;
  const userId = req.params.userId;

  Profile.createProfile(userId, bio, avatarUrl, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error creating profile' });
    }
    res.status(201).json({ message: 'Profile created' });
  });
});

module.exports = router;
