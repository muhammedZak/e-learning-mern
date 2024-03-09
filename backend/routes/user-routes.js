const express = require('express');

const {
  signup,
  login,
  logout,
  editEmail,
  passwordChange,
  getMyProfile,
  updateProfile,
  forgotPassword,
  resetPassword,
  otpRequest,
} = require('../controllers/user-controller');

const { isAdmin, protect } = require('../middlewares/auth-middleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', login);
router.post('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.put('/reset-password/:token', resetPassword);
// router.post('/request-otp', otpRequest);

router.use(protect);
router.put('/email-edit', editEmail);
router.put('/change-password', passwordChange);
router.route('/my-profile').get(getMyProfile).put(updateProfile);

module.exports = router;
