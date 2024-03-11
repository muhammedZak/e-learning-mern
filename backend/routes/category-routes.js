const express = require('express');

const { isAdmin, protect } = require('../middlewares/auth-middleware');
const {
  createCategory,
  getAllCategory,
  getCategoryById,
  editCategory,
  deleteCategory,
  updateSubcategory,
  deleteSubcategory,
  createSubcategory,
} = require('../controllers/category-controller');

const router = express.Router();

router.route('/').post(protect, isAdmin, createCategory).get(getAllCategory);

router
  .route('/:categoryId')
  .post(protect, isAdmin, createSubcategory)
  .get(protect, isAdmin, getCategoryById)
  .put(protect, isAdmin, editCategory)
  .delete(protect, isAdmin, deleteCategory);

router
  .route('/:categoryId/subcategories/:subcategoryId')
  .put(protect, isAdmin, updateSubcategory)
  .delete(protect, isAdmin, deleteSubcategory);

module.exports = router;
