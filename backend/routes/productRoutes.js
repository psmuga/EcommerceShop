import express from 'express';
import { isAdmin, protect } from '../middleware/authMiddleware.js';
import {
    getProductById,
    getProducts,
    deleteProduct,
    updateProduct,
    createProduct,
    createProductReview,
    getTopProducts,
} from '../contollers/productController.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, isAdmin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router.get('/top', getTopProducts);
router.route('/:id').get(getProductById).delete(protect, isAdmin, deleteProduct).put(protect, isAdmin, updateProduct);

export default router;
