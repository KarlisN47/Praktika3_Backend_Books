
// authRoutes.js: Routes for authentication

const express = require('express');
const { login } = require('../controllers/authController');

const router = express.Router();

// POST /auth/login - Login route
router.post('/login', login);

module.exports = router;