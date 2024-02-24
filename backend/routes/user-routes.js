const express = require('express');

const {
  signup,
  login,
  logout,
  editEmail,
} = require('../controllers/user-controller');

const { isAdmin, protect } = require('../middlewares/auth-middleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', login);
router.post('/logout', logout);

router.put('/email-edit', protect, editEmail);

module.exports = router;
