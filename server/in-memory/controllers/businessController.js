import businesses from './../dummydb/usersdb';
import reviewers from './../dummydb/reviewsdb';


/** 
 * @class Business
*/
export default class Business {

    /**
     * @returns {object} updateBusiness
     * @param {*} req 
     * @param {*} res 
     */

    // update a business profile
    static updateBusiness(req, res) {
        for (let biz of businesses) {
            if (biz.id === parseInt(req.params.businessid)) {
                biz.firstname = req.body.firstname;
                biz.lastname = req.body.lastname;
                biz.email = req.body.email;
                biz.location = req.body.location;
                biz.category = req.body.category;
                biz.password = req.body.password;
                biz.businessname = req.body.businessname;
                return res.status(200).json('business profile succesfully updated');
            }
        }
        return res.status(404).json('404 business not found');
    }

    /**
     * @returns {object} destroyBusiness
     * @param {*} req 
     * @param {*} res 
     */

    static destroyBusiness(req, res) {
        for (let i = 0; i < businesses.length; i += 1) {
            if (businesses[i].id === parseInt(req.params.businessid, 10)) {
                businesses.splice(i, 1);
                return res.status(200).json('successfully deleted');
            }
        }
        return res.status(404).send('404, page not found')
    }

    /**
   * @returns {object} findOnebusiness
   * @param {*} req 
   * @param {*} res 
   * 
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
     * @returns {object} findAllBusinesses
     * @param {*} req 
     * @param {*} res 
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
     * @return {object} userFeedback
     * @param {*} req 
     * @param {*} res 
     */
    static userFeedback(req, res) {
        for (let review of reviewers) {
            if (review.id === parseInt(req.params.businessid, 10)) {
                reviewers.push(req.body);
                return res.status(200).json('Thanks, Your feedback is taken');
            }
        }
        return res.status(404).json('business not found');
    }

    /**
     * @return {object} retrieveReview
     * @param {*} req 
     * @param {*} res 
     */
    static retrieveReview(req, res) {
        const review = reviewers.find(review => review.id === parseInt(req.params.businessid, 10));
        if (!review) {
            res.status(404).json('Business not found');
        }
        return res.status(200).json({
            patronage: review.reviewer,
            feedback: review.feedback
        });

    }
}