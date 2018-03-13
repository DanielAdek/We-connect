import express from 'express';
import users from './../controllers/usersController';

const router = express.Router();

router.post('/api/v1/auth/signup', users.createUser);
router.post('/api/v1/auth/login', users.loginUser);

export default router;