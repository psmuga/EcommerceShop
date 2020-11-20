import express from 'express';
import { authUser, getUserProfile, registerUser, updateUserProfile } from '../contollers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/').post(registerUser);

export default router;
