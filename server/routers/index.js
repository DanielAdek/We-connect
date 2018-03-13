import express from 'express';
import users from './../controllers/usersController';
import business from './../controllers/businessController';

const router = express.Router();

router.post('/api/v1/auth/signup', users.createUser);
router.post('/api/v1/auth/login', users.loginUser);
router.post('/api/v1/business', users.createBusiness);
router.put('/api/v1/business/:businessid', business.updateBusiness);
router.delete('/api/v1/business/:businessid', users.destroyBusiness);
router.get('/api/v1/business/:businessid', users.findOnebusiness);

export default router;