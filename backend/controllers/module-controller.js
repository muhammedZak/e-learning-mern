const Module = require('../models/module-model');

exports.createModule = async (req, res, next) => {
  const { courseId } = req.params;

  try {
    if (!req.body.module_order || req.body.module_order === null) {
      res.status(400);
      throw new Error('Module order is required.');
    }

    const isOrderExist = await Module.find({
      course: courseId,
      module_order: req.body.module_order,
    });

    if (isOrderExist.length) {
      res.status(400);
      throw new Error(
        'Order number already exist. Please check the order number in the module.'
      );
    }
    const { title, module_order, description } = req.body;

    const module = await Module.create({
      title,
      module_order,
      description,
      course: courseId,
    });
    if (!module) {
      res.status(400);
      throw new Error('Module creation failed!. Please try again later.');
    }

    res.status(201).json({
      status: 'success',
      module,
    });
  } catch (error) {
    next(error);
  }
};

exports.getModules = async (req, res, next) => {
  const { courseId } = req.params;

  try {
    const modules = await Module.find({ course: courseId })
      .populate('course')
      .sort({ module_order: 1 });

    res.status(200).json({
      results: modules.length,
      status: 'success',
      modules,
    });
  } catch (error) {
    next(error);
  }
};

exports.getModule = async (req, res, next) => {
  const moduleId = req.params.id;

  try {
    const module = await Module.findById(moduleId);
    if (!module) {
      res.status(404);
      throw new Error('Module not found!');
    }

    res.status(201).json({
      status: 'success',
      module,
    });
  } catch (error) {
    next(error);
  }
};

exports.editmodule = async (req, res, next) => {
  const moduleId = req.params.id;

  try {
    const module = await Module.findByIdAndUpdate(moduleId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!module) {
      res.status(404);
      throw new Error('Module not found!');
    }

    res.status(201).json({
      status: 'success',
      module,
    });
  } catch (error) {
    next(error);
  }
};

exports.deletModule = async (req, res, next) => {
  const moduleId = req.params.id;
  try {
    await Module.findByIdAndDelete(moduleId);

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
