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
  console.log(newUser);
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
