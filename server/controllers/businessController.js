import businesses from './../dummydb/usersdb';


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
   
}