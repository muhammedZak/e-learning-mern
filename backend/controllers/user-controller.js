const User = require('../models/user-model');
const catchAsync = require('../utils/catch-async');
const { createSendToken } = require('../utils/generate-token');

exports.signup = catchAsync(async (req, res, next) => {
  const userExist = await User.findOne({ email: req.body.email });

  if (userExist) {
    res.status(400);
    throw new Error('User already exists');
  }

  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  if (newUser) {
    createSendToken(res, newUser._id);

    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    res.status(401);
    throw new Error('Incorrect email or password');
  }

  createSendToken(res, user._id);

  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  });
});

exports.logout = catchAsync(async (req, res, next) => {
  res.clearCookie('jwt');
  res.status(200).json({ message: 'Logged out successfully' });
});

exports.editEmail = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Please fill the credentials');
  }

  const user = await User.findById(req.user._id).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    res.status(401);
    throw new Error('Incorrect password');
  }

  user.email = email;
  const updatedUser = await user.save();

  if (updatedUser) {
    createSendToken(res, user._id);
    res.status(201).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

exports.passwordChange = catchAsync(async (req, res, next) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;

  if (!confirmPassword || !currentPassword || !newPassword) {
    res.status(401);
    throw new Error('Please fill the required field');
  }

  const user = await User.findById(req.user._id).select('+password');

  if (!user || !(await user.correctPassword(currentPassword, user.password))) {
    res.status(401);
    throw new Error('Incorrect password');
  }

  user.password = newPassword;
  user.passwordConfirm = confirmPassword;

  const updatedUser = await user.save();

  if (updatedUser) {
    createSendToken(res, user._id);
    res.status(201).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
    });
  } else {
    res.status(404);
    throw new Error('Something went wrong');
  }
});

exports.updataProfile = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.email) {
    res.status(400);
    throw new Error('Cannot update email or password');
  }

  const { name, headline, bio } = req.body;
  const userId = req.user._id;

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      name,
      headline,
      bio,
    },
    { new: true }
  );

  if (!updatedUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json({
    name: updatedUser.name,
    headline: updatedUser.headline,
    bio: updatedUser.bio,
  });
});
