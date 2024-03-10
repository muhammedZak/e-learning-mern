const jwt = require('jsonwebtoken');
const User = require('../models/user-model');
const catchAsync = require('../utils/catch-async');
const Course = require('../models/course-modal');
const Module = require('../models/module-model');

const protect = catchAsync(async (req, res, next) => {
  console.log('protect--------->>>');
  let token;
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select('-password');

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

const isAdmin = (req, res, next) => {
  console.log('isAdmin--------->>>');
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
};

const isTutor = (req, res, next) => {
  console.log('isTutor--------->>>');
  if (req.user && req.user.role === 'instructor') {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an instructor');
  }
};

const isCourseByTutor = async (req, res, next) => {
  try {
    const isInstructor = await Course.find({
      instructor: req.user._id,
      _id: req.params.courseId,
    });

    if (isInstructor && isInstructor.length > 0) {
      next();
    } else {
      res.status(400);
      throw new Error(
        `You are not the owner of this course!. Pleae create course`
      );
    }
  } catch (error) {
    next(error);
  }
};

const isLessonByModule = async (req, res, next) => {
  const { moduleId } = req.params;

  try {
    const module = await Module.findById(moduleId).populate('course');

    if (req.user._id.equals(module.course.instructor)) {
      next();
    } else {
      res.status(400);
      throw new Error('This module is not belongs to you.');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  isAdmin,
  protect,
  isTutor,
  isCourseByTutor,
  isLessonByModule,
};
