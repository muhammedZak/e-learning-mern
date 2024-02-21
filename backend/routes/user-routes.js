const express = require('express');

const { signup, login, logout } = require('../controllers/user-controller');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', login);
router.post('/logout', logout);

module.exports = router;
