const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authController');

// Route for user signup
router.post('/signup', authControllers.signup);

// Route for user login
router.post('/login', authControllers.login);

module.exports = router;
