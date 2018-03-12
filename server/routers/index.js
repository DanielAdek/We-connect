import express from 'express';
import users from './../controllers/usersController';

const router = express.Router();

router.post('/api/v1/auth/signup', users.createUser);

export default router;