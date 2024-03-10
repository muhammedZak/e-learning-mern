const Lesson = require('../models/lesson-model');

exports.createLesson = async (req, res, next) => {
  const { moduleId } = req.params;

  try {
    if (!req.body.lesson_order || req.body.lesson_order === null) {
      res.status(400);
      throw new Error('Lesson order is required.');
    }

    const isOrderExist = await Lesson.find({
      module_id: moduleId,
      lesson_order: req.body.lesson_order,
    });
    if (isOrderExist.length) {
      res.status(400);
      throw new Error(
        'Order number already exist. Please check the order number in the lesson.'
      );
    }

    const lesson = await Lesson.create({ ...req.body, module_id: moduleId });

    if (!lesson) {
      res.status(400);
      throw new Error('lesson creation failed!. Please try again later.');
    }

    res.status(201).json({
      status: 'success',
      lesson,
    });
  } catch (error) {
    next(error);
  }
};

exports.getLessons = async (req, res, next) => {
  const { moduleId } = req.params;
  try {
    const lessons = await Lesson.find({ module_id: moduleId }).sort({
      lesson_order: 1,
    });

    res.status(200).json({
      results: lessons.length,
      status: 'success',
      lessons,
    });
  } catch (error) {
    next(error);
  }
};

exports.getLesson = async (req, res, next) => {
  const lessonId = req.params.lessonId;

  try {
    const lesson = await Lesson.findById(lessonId);
    if (!lesson) {
      res.status(404);
      throw new Error('lesson not found!');
    }

    res.status(201).json({
      status: 'success',
      lesson,
    });
  } catch (error) {
    next(error);
  }
};

exports.editLesson = async (req, res, next) => {
  const lessonId = req.params.lessonId;

  try {
    const lesson = await Lesson.findByIdAndUpdate(lessonId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!lesson) {
      res.status(404);
      throw new Error('lesson not found!');
    }

    res.status(201).json({
      status: 'success',
      lesson,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteLesson = async (req, res, next) => {
  const lessonId = req.params.id;
  try {
    await Lesson.findByIdAndDelete(lessonId);

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
