// routes/alertRoutes.js
const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');

// Protected route example
router.post('/send', protect, (req, res) => {
  // Alert sending logic goes here
  res.send('Alert sent');
});

module.exports = router;
