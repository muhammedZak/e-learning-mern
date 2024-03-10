const express = require('express');

const {
  getLessons,
  createLesson,
  getLesson,
  editLesson,
  deleteLesson,
} = require('../controllers/lesson-controller');

const {
  isAdmin,
  isCourseByTutor,
  isTutor,
  protect,
  isLessonByModule,
} = require('../middlewares/auth-middleware');
const router = express.Router();

router
  .route('/module/:moduleId')
  .get(getLessons)
  .post(protect, isTutor, isLessonByModule, createLesson);

router
  .route('module/:moduleId/lesson/:lessonId')
  .get(protect, isTutor, isLessonByModule, getLesson)
  .put(protect, isTutor, isLessonByModule, editLesson)
  .delete(protect, isTutor, isLessonByModule, deleteLesson);

module.exports = router;
