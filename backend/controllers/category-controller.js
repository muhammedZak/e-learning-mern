const Category = require('../models/category-model');

// Add category
exports.createCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({
      status: 'Success',
      category,
    });
  } catch (error) {
    next(error);
  }
};

//Add a subcategory to main category
exports.createSubcategory = async (req, res, next) => {
  const { categoryId } = req.params;
  const { name } = req.body;
  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      res.status(404);
      throw new Error('Category not found');
    }

    category.subcategories.push({ name });
    await category.save();

    res.status(201).json({
      status: 'Success',
      subcategories: category.subcategories,
    });
  } catch (error) {
    next(error);
  }
};

// Fetch all categories
exports.getAllCategory = async (req, res, next) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      status: 'Success',
      categories,
    });
  } catch (error) {
    next(error);
  }
};

//Fetch single category
exports.getCategoryById = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.categoryId);
    if (!category) {
      res.status(404);
      throw new Error('Category not found');
    }
    res.status(200).json({
      status: 'Success',
      category,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update category
exports.editCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const { name } = req.body;

    const category = await Category.findById(categoryId);

    if (!category) {
      res.status(404);
      throw new Error('Category not found!');
    }

    category.name = name;
    category.updatedAt = Date.now();
    const updatedCategory = await category.save();

    res.status(201).json({
      status: 'Success',
      updatedCategory,
    });
  } catch (error) {
    next(error);
  }
};

// Update subcategory
exports.updateSubcategory = async (req, res, next) => {
  const { categoryId, subcategoryId } = req.params;
  const { name } = req.body;

  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      res.status(404);
      throw new Error('Category not found!');
    }

    const subcategory = category.subcategories.id(subcategoryId);
    console.log('sub--------->', subcategory);

    if (!subcategory) {
      res.status(404);
      throw new Error('Subcategory not found!');
    }

    subcategory.name = name;
    category.updatedAt = Date.now();

    const updatedCategory = await category.save();

    res.status(201).json({
      status: 'Success',
      updatedCategory,
    });
  } catch (error) {
    next(error);
  }
};

// Delete category
exports.deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.categoryId);
    if (!category) {
      res.status(404);
      throw new Error('Category not found');
    }

    res.status(204).json({
      status: 'Category deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// Delete subcategory
exports.deleteSubcategory = async (req, res, next) => {
  try {
    const { categoryId, subcategoryId } = req.params;

    const category = await Category.findById(categoryId);

    if (!category) {
      res.status(404);
      throw new Error('Category not found');
    }

    const subcategoryIndex = category.subcategories.findIndex((subcategory) => {
      return subcategory._id.toString() === subcategoryId.toString();
    });

    console.log(subcategoryIndex);

    if (subcategoryIndex === -1) {
      res.status(404);
      throw new Error('Subcategory not found');
    }

    category.subcategories.splice(subcategoryIndex, 1);

    await category.save();

    res.status(204).json({
      status: 'Subcategory deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
