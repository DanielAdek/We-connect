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
    const {
      businessname, location, category, phone, businessimage
    } = req.body;
    return Business
      .create({
        businessname, location, category, phone, businessimage
      })
      .then(business => res.status(201).json({
        message: `${business.businessname} is successfully created as a new business`
      }))
      .catch((err) => {
        switch (err.message) {
          case 'ValidationError':
            res.status(400).send(`client error ${err.message}`);
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
        id: (req.params.businessid, 10)
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
}
