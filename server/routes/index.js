import express from 'express';
// In-memory routes;
/*
import users from './../inMemorySrc/controllers/usersController';
import business from './../inMemorySrc/controllers/businessController';
import middleware from './../inMemorySrc/middleware/businessMiddleware';
*/
import users from '../src/controllers/usersControllers';
import business from '../src/controllers/businessController';
import auth from '../src/middleware/auth';
import spec from '../src/middleware/querySearch';

const router = express.Router();
const { validateInputFields, verifyUser } = auth;

router.post('/api/v1/auth/signup', validateInputFields, users.createUser);
router.use('/api/v1/auth/login', users.loginUser);
router.post('/api/v1/business', verifyUser, business.createBusiness);
router.put('/api/v1/business/:businessid', business.updateBusiness);
router.delete('/api/v1/business/:businessid', business.destroyBusiness);
router.get('/api/v1/business/:businessid', business.findOneBusiness);
router.get('/api/v1/businesses', spec.searchSpec, business.findAllBusinesses);
// router.post('/api/v1/businesses/:businessid/reviews', business.userFeedback);
// router.get('/api/v1/businesses/:businessid/reviews', business.retrieveReview);
export default router;
