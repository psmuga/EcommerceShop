import express from 'express';
import { isAdmin, protect } from '../middleware/authMiddleware.js';
import { getProductById, getProducts, deleteProduct, updateProduct, createProduct } from '../contollers/productController.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, isAdmin, createProduct);
router.route('/:id').get(getProductById).delete(protect, isAdmin, deleteProduct).put(protect, isAdmin, updateProduct);

export default router;
