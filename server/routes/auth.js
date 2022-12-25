const express = require('express');
const { login, currentUser } = require('../controllers/auth/authController');

const router = express.Router();

router.post('/current-user', currentUser);

module.exports = router;
