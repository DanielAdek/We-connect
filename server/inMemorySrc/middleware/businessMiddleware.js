import businesses from './../dummydb/businessesdb';

/**
 * @class BusinessMiddleware
 * @desc middleware for businesses
 */
export default class BusinessMiddleware {
  /**
   * searchByquery()
   * @desc search middleware
   * @param {Object} req express request object
   * @param {Object} res express response object
   * @param {Object} next express next object
   * @return {Object} object
   */
  static searchByquery(req, res, next) {
    const { location, category } = req.query;
    if (!location && !category) {
      return next();
    }

    const dataLocation = [];
    const dataCategory = [];

    businesses.forEach((biz) => {
      if (biz.location === location) {
        dataLocation.push(biz);
      }
      if (biz.category === category) {
        dataCategory.push(biz);
      }
    });
    if (dataLocation.length < 1 && dataCategory.length < 1) {
      return res.status(404).json({ message: 'No businesses found at your specification' });
    }
    return res.status(200).json({
      business: [...dataLocation, ...dataCategory]
    });
  }
}
