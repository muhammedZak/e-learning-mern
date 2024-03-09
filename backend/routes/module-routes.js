const express = require('express');

const {
  createModule,
  getModules,
  getModule,
  editmodule,
  deletModule,
} = require('../controllers/module-controller');
const {
  isTutor,
  protect,
  isCourseByTutor,
} = require('../middlewares/auth-middleware');

const router = express.Router();

router
  .route('/module/:courseId')
  .post(protect, isTutor, isCourseByTutor, createModule)
  .get(getModules);

router
  .route('/:courseId/module-id/:id')
  .get(protect, isTutor, isCourseByTutor, getModule)
  .put(protect, isTutor, isCourseByTutor, editmodule)
  .delete(protect, isTutor, isCourseByTutor, deletModule);

module.exports = router;
