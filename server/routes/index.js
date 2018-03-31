import express from 'express';
// In-memory routes;
/*
import users from './../inMemorySrc/controllers/usersController';
import business from './../inMemorySrc/controllers/businessController';
import middleware from './../inMemorySrc/middleware/businessMiddleware';
*/
import users from '../src/controlPanel/usersControllers';
import business from '../src/controlPanel/businessController';

const router = express.Router();

router.post('/api/v1/auth/signup', users.createUser);
// router.post('/api/v1/auth/login', users.loginUser);
router.post('/api/v1/business', business.createBusiness);
// router.put('/api/v1/business/:businessid', business.updateBusiness);
// router.delete('/api/v1/business/:businessid', business.destroyBusiness);
router.get('/api/v1/business/:businessid', business.findOneBusiness);
// router.get('/api/v1/businesses', middleware.searchByquery, business.findAllBusinesses);
// router.post('/api/v1/businesses/:businessid/reviews', business.userFeedback);
// router.get('/api/v1/businesses/:businessid/reviews', business.retrieveReview);
export default router;
