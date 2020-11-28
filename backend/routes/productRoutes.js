import express from 'express';
import { isAdmin, protect } from '../middleware/authMiddleware.js';
import { getProductById, getProducts, deleteProduct } from '../contollers/productController.js';

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductById).delete(protect, isAdmin, deleteProduct);

export default router;
