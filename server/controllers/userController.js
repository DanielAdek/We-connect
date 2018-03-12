

/** 
 * @class Users
*/
import businesses from './../dummydb/dummydb';



export default class Users {

    /**
     * @returns {object} createUser
     * @param {*} req 
     * @param {*} res 
     */
    static createUser(req, res) {
        const username = req.body.username;
        if (req.body.username && req.body.email && req.body.password) {
            businesses.push(req.body)
            return res.status(201).json({
                user: username + ' is successfully created as a new user'
            });
        } else {
            return res.status(400).json({
                messsage: 'Input field cannot be empty',
                err: true
            })
        }
    }
}