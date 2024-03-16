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

exports.filtering = async (req, res, next) => {
  try {
    const course = await Course.find({
      category: '65ef1d01dfe1980def4d0c79',
      $or: [
        { duration: { $gte: 600, $lte: 700 } },
        { duration: { $gte: 800, $lte: 900 } },
      ],
    });
    res.json({ rs: course.length, course });
  } catch (error) {
    next(error);
  }
};

exports.getCourses = async (req, res, next) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr;

    if (
      queryObj.price &&
      (Array.isArray(queryObj.price.gte) || Array.isArray(queryObj.price.lte))
    ) {
      const { gte, lte } = queryObj.price;
      const orArray = [];

      for (let i = 0; i < gte.length; i++) {
        orArray.push({
          price: {
            gte: parseInt(gte[i]),
            lte: parseInt(lte[i]),
          },
        });
      }

      queryObj.$or = orArray;
      delete queryObj.price;
    }

    if (
      queryObj.duration &&
      (Array.isArray(queryObj.duration.gte) ||
        Array.isArray(queryObj.duration.lte))
    ) {
      const { gte, lte } = queryObj.duration;
      const orArray = [];

      for (let i = 0; i < gte.length; i++) {
        orArray.push({
          duration: {
            gte: parseInt(gte[i]),
            lte: parseInt(lte[i]),
          },
        });
      }

      queryObj.$or = orArray;
      delete queryObj.duration;
    }

    queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Course.find(JSON.parse(queryStr)).populate('instructor');
    const count = await Course.countDocuments(JSON.parse(queryStr));

    if (req.query.sort) {
      query = query.sort(req.query.sort);
    } else {
      query = query.sort('-ratingsAverage');
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v');
    }

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 10;
    const skip = (page - 1) * limit;

    query.skip(skip).limit(limit);

    if (req.query.page) {
      const numCourses = await Course.countDocuments();
      if (skip >= numCourses) throw new Error('This page does not exist!.');
    }

    const courses = await query;

    res.status(200).json({
      results: courses.length,
      status: 'Success',
      page,
      count,
      pages: Math.ceil(count / limit),
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

exports.popularTopics = async (req, res, next) => {
  try {
    const popularTopics = await Course.aggregate([
      {
        $group: {
          _id: '$topic',
          totalCourses: { $sum: 1 },
        },
      },
      {
        $sort: { totalCourses: -1 },
      },
      {
        $limit: 5,
      },
      {
        $project: {
          topic: '$_id',
          totalCourses: 1,
        },
      },
    ]);

    res.status(200).json({
      status: 'success',
      popularTopics,
    });
  } catch (error) {
    next(error);
  }
};
