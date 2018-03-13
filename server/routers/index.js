import express from 'express';
import users from './../controllers/usersController';
import business from './../controllers/businessController';
import middleware from './../middleware/businessMiddleware'

const router = express.Router();

router.post('/api/v1/auth/signup', users.createUser);
router.post('/api/v1/auth/login', users.loginUser);
router.post('/api/v1/business', users.createBusiness);
router.put('/api/v1/business/:businessid', business.updateBusiness);
router.delete('/api/v1/business/:businessid', business.destroyBusiness);
router.get('/api/v1/business/:businessid', business.findOnebusiness);
router.get('/api/v1/businesses', middleware.searchByquery, business.findAllBusinesses);
router.post('/api/v1/:businessid/reviews', business.userFeedback);
export default router;