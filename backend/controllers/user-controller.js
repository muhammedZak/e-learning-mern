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

  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    { email },
    {
      new: true,
      runValidators: true,
    }
  );

  if (updatedUser) {
    res.status(201).json({
      _id: updatedUser._id,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
