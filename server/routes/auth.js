const express = require('express');
const { login, currentUser, privateRoute } = require('../controllers/auth/authController');

const router = express.Router();

router.post('/current-user', currentUser);
router.get('/private-route', privateRoute);

module.exports = router;
