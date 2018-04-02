import db from '../models';

const { Business } = db;

/**
 * @class SearchBySpecification
 */
export default class SearchBySpecification {
  /** searchSpec()
  * @returns {object} json
  * @param {object} req express request object
  * @param {object} res express response object
  * @desc search by location or by category
  * @param {function} next
  */
  static searchSpec(req, res, next) {
    const { location, category } = req.query;
    if (location) {
      return Business.findAll().then((businesses) => {
        if (!businesses) {
          return res.status(404).json('404 businesses not found');
        }
        const filteredBusinesses = businesses.filter(business => business.location.toLowerCase() === location.toLowerCase());
        if (filteredBusinesses.length < Math.floor(3 / 2)) {
          return res.status(404).json({ message: `404 No businesses found at ${location}` });
        }
        if (filteredBusinesses) {
          return res.status(200).json({
            location,
            filteredBusinesses
          });
        }
      }).catch(err => res.status(500).send(`Internal error ${err.message}`));
    }
    if (category) {
      return Business.findAll().then((businesses) => {
        if (!businesses) {
          return res.status(404).json('404 businesses not found');
        }
        const filteredBusinesses = businesses.filter(business => business.category.toLowerCase() === category.toLowerCase());
        if (filteredBusinesses.length < Math.floor(5 / 2) - 1) {
          return res.status(404).json({ message: `404 No businesses found at ${category}` });
        }
        if (filteredBusinesses) {
          return res.status(200).json({
            category,
            filteredBusinesses
          });
        }
      }).catch(err => res.status(500).json(`Internal server error ${err.message}`));
    }

    if (!location || category) {
      return next();
    }
  }
}
