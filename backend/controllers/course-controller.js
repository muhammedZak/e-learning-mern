const Course = require('../models/course-modal');

exports.createCourse = async (req, res, next) => {
  const instructor = req.user._id;

  try {
    const course = await Course.create({ ...req.body, instructor });
    res.status(201).json({
      status: 'Success',
      course,
    });
  } catch (error) {
    next(error);
  }
};

exports.getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.status(201).json({
      status: 'Success',
      courses,
    });
  } catch (error) {
    next(error);
  }
};

exports.getCourse = async (req, res, next) => {
  const courseId = req.params.id;
  try {
    const course = await Course.findById(courseId);
    if (!course) {
      res.status(404);
      throw new Error('Course not found');
    }

    res.status(201).json({
      status: 'Success',
      course,
    });
  } catch (error) {
    next(error);
  }
};

exports.editCourse = async (req, res, next) => {
  const courseId = req.params.id;
  try {
    const course = await Course.findByIdAndUpdate(courseId, req.body, {
      new: true,
    });
    if (!course) {
      res.status(401);
      throw new Error('Somthing went wrong');
    }

    res.status(201).json({
      status: 'Success',
      course,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteCourse = async (req, res, next) => {
  const courseId = req.params.id;
  try {
    const course = await Course.findByIdAndDelete(courseId);
    if (!course) {
      res.status(401);
      throw new Error('Somthing went wrong');
    }

    res.status(201).json({
      status: 'Success',
      course,
    });
  } catch (error) {
    next(error);
  }
};
