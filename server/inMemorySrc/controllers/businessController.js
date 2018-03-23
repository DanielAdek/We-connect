import businesses from './../dummydb/businessesdb';
// import reviewers from './../dummydb/reviewsdb';


/**
 * @class Business
 * @desc controller for business routes
*/
export default class Business {
  /**
   * updateBusiness()
   * @desc update a business profile
   * @param {*} req
   * @param {*} res
   * @returns {object} updatedBusiness
   */
  static updateBusiness(req, res) {
    let business;
    businesses.forEach((biz) => {
      if (biz.id === parseInt(req.params.businessid, 10)) {
        biz.firstname = req.body.firstname;
        biz.lastname = req.body.lastname;
        biz.email = req.body.email;
        biz.location = req.body.location;
        biz.category = req.body.category;
        biz.password = req.body.password;
        biz.businessname = req.body.businessname;
        business = biz;
      }
    });
    if (business) {
      return res.status(200).json('business profile succesfully updated');
    }
    return res.status(404).json('404 business not found');
  }

  /**
   * destroyBusiness()
   * @desc deletes a business profile
   * @param {*} req
   * @param {*} res
   * @returns {object} deletedBusiness
   */
  static destroyBusiness(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessid, 10)) {
        businesses.splice(i, 1);
        return res.status(200).json('successfully deleted');
      }
    }
    return res.status(404).send('404, page not found');
  }

  /**
   * findOnebusiness()
   * @desc finds a business profile
   * @param {*} req
   * @param {*} res
   * @returns {object} found business
   */
  static findOnebusiness(req, res) {
    const biz = businesses.find(business => business.id === parseInt(req.params.businessid, 10));
    if (!biz) {
      return res.status(404).json('404 business not found');
    }
    return res.status(200).json({
      business: biz
    });
  }

  /**
   * findAllBusinesses()
   * @desc finds all businesses
   * @param {*} req
   * @param {*} res
   * @returns {object} all businesses
   */
  static findAllBusinesses(req, res) {
    if (businesses.length === 0) {
      return res.status(404).send('404 No business found');
    }
    return res.status(200).json({
      allBusinesses: businesses
    });
  }

  /**
   * userFeedback()
   * @desc adds a review
   * @param {*} req
   * @param {*} res
   * @returns {object} review
   */
  static userFeedback(req, res) {
    const { review } = req.body;
    let userReview;
    businesses.forEach((business) => {
      if (business.id === parseInt(req.params.businessid, 10)) {
        business.reviews.push(review);
        userReview = review;
      }
    });
    if (userReview) {
      return res.status(200).json('Thanks, Your feedback is taken');
    }
    return res.status(404).json('business not found');
  }

  /**
   * retrieveReview()
   * @desc finds all businesses
   * @param {*} req
   * @param {*} res
   * @returns {object} all businesses
   */
  static retrieveReview(req, res) {
    let theReviews;
    businesses.forEach((business) => {
      if (business.id === parseInt(req.params.businessid, 10)) {
        theReviews = business.reviews;
      }
    });
    if (theReviews) {
      return res.status(404).json({
        message: 'business not found'
      });
    }
    return res.status(200).json({
      message: 'reviews',
      reviews: theReviews
    });
  }
}
