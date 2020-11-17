import express from 'express';
import { authUser } from '../contollers/userController.js';

const router = express.Router();

router.post('/login', authUser);

export default router;
