const express = require('express');

const {
  createCourse,
  getCourses,
  getCourse,
  editCourse,
  deleteCourse,
} = require('../controllers/course-controller');

const { protect, isTutor, isAdmin } = require('../middlewares/auth-middleware');

const router = express.Router();

router.route('/').post(protect, isTutor, createCourse).get(getCourses);

router
  .route('/:id')
  .get(getCourse)
  .put(protect, isTutor, editCourse)
  .delete(protect, isTutor, deleteCourse);

module.exports = router;
