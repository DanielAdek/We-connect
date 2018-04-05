import db from '../models';

const { Business } = db;

/**
 * @class Businesses
 */
export default class Businesses {
  /**
    * createBusiness()
    * @desc create a new Business account
    * @param {*} req express request object
    * @param {*} res exoress response object
    * @returns {object} json
    */
  static createBusiness(req, res) {
    const { id: userId } = req.decoded;
    const {
      businessname, location, category, phone, businessimage
    } = req.body;
    return Business
      .create({
        businessname, location, category, phone, businessimage, userId
      })
      .then(business => res.status(201).json({
        message: `${business.businessname} is successfully created as a new business`
      }))
      .catch((err) => {
        switch (err.message) {
          case 'ValidationError':
            res.status(400).send(`You must enter value to all input field provided error ${err.message}`);
            break;
          default:
            res.status(500).send(`Internl server ${err.message}`);
            break;
        }
      });
  }

  /**
     * findOneBusiness()
     * @desc login an authenticated Business
     * @param {*} req express request object
     * @param {*} res express response object
     * @returns {object} json
     */
  static findOneBusiness(req, res) {
    return Business.findOne({
      where: {
        id: parseInt(req.params.businessid, 10)
      }
    })
      .then((business) => {
        if (!business) {
          return res.status(404).json({ message: '404 business not found' });
        }
        return res.status(200).json({ business });
      })
      .catch(err => res.status(500).send(`Internal error ${err.message}`));
  }

  /**
   * findAllBusinesses()
    * @returns {object} json
    * @param {*} req
    * @param {*} res
    * @desc find all existing businesses
    */
  static findAllBusinesses(req, res) {
    return Business.findAll().then((businesses) => {
      if (!businesses) {
        return res.status(404).json('404 No business found');
      }
      return res.status(200).json({ AllBusinesses: businesses });
    })
      .catch((err) => {
        res.status(500).send(`Internal server error ${err.message}`);
      });
  }

  /** destroyBusiness()
   * @description delete a business
  * @returns {object} json
  * @param {object} req express request object
  * @param {object} res express response object
  */
  static destroyBusiness(req, res) {
    return Business.findOne({
      where: {
        id: req.params.businessid,
      }
    }).then((business) => {
      if (!business) {
        return res.status(404).send('404 Cannot delete non existing business');
      }
      return business.destroy({
        where: { id: req.params.businessid } // cascade: true
      }).then(() => res.status(200).json('businesses deleted'));
    }).catch(err => res.status(500).json(`server error ${err.message}`));
  }

  /**
   * updateBusiness()
   * @desc update a business profile
   * @param {object} req express request object
   * @param {object} res express response object
   * @returns {object} json
   */
  static updateBusiness(req, res) {
    const {
      businessname, location, category, phone
    } = req.body;
    Business.findById(parseInt(req.params.businessid, 10)).then((business) => {
      if (!business) {
        return res.status(404).json({ message: '404 No business Found' });
      }
      return business.update({
        businessname, location, category, phone
      }).then(() => res.status(200).json({ message: 'business Successfully updated' }));
    }).catch(err => res.status(500).send(`Internal server error ${err.message}`));
  }
}
