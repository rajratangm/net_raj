import express from 'express'
import { Register, Login, Logout } from '../controllers/User.js';

const router = express.Router();

router.route('/register').post(Register)
router.route('/login').post(Login)
router.route('/login').post(Login)

export default router;
