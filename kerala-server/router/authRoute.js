const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

// @route   POST /api/auth/register
// @desc    Register new user (admin/user)
// @access  Public
router.post('/register', authController.register);

// @route   POST /api/auth/login
// @desc    Login as admin (only)
// @access  Public
router.post('/login', authController.login);

module.exports = router;
