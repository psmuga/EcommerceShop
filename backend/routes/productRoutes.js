import express from 'express';
import { getProductById, getProducts } from '../contollers/productController.js';

const router = express.Router();

router.route('/').get(getProducts);

router.get('/:id').get(getProductById);

export default router;
