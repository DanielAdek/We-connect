import businesses from './../dummydb/usersdb';

/** 
 * @class Users
*/




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

    // login to user account

    /**
     * @returns {object} loginUser
     * @param {*} req 
     * @param {*} res 
     */
    static loginUser(req, res) {
        for (let user of businesses) {
            if (user.email == req.body.email && user.password == req.body.password) {
                return res.status(200).json({ messsage: 'Login succesfull' })
            }
        }
        return res.status(401).json('please sign up');
    }

    /**
     * @returns {object} createBusiness
     * @param {*} req 
     * @param {*} res 
     */
    static createBusiness(req, res) {
        if (req.body.firstname && req.body.lastname && req.body.email && req.body.location && req.body.category && req.body.password && req.body.businessname) {
            businesses.push(req.body)
            return res.status(201).json({
                messsage: "New Business Created Successfully"
            });
        }
        return res.status(400).json({
            messsage: 'All (*) fields cannot be empty',
            err: true
        })

    }
}