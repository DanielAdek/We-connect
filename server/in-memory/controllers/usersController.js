import users from './../dummydb/usersdb';
import business from './../dummydb/businessesdb';
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
    const { username, password, email } = req.body;
    if (username && email && password) {
      const user = { username, password, email };
      users.push(user);
      return res.status(201).json({
        user,
        message: `${username} is successfully created as a new user`
      });
    }
    return res.status(400).json({
      message: 'Input field cannot be empty',
      err: true
    });
  }

  // login to user account

  /**
     * @returns {object} loginUser
     * @param {*} req
     * @param {*} res
     */
  static loginUser(req, res) {
    const { email, password } = req.body;
    let user;
    users.forEach((theUser) => {
      if (theUser.email === email && theUser.password === password) {
        user = theUser;
      }
    });
    if (user) {
      return res.status(200).json({ message: `Welcome ${user.username}!` });
    }
    return res.status(401).json('please sign up');
  }

  /**
     * @returns {object} createBusiness
     * @param {*} req
     * @param {*} res
     */
  static createBusiness(req, res) {
    const {
      businessname, location, category, phone
    } = req.body;
    const userBusiness = {
      businessname, location, category, phone
    };
    if (location && category && phone && businessname) {
      business.push(userBusiness);
      return res.status(201).json({
        userBusiness,
        message: 'New Business Created Successfully'
      });
    }
    return res.status(400).json({
      message: 'All (*) fields cannot be empty',
      err: true
    });
  }
}
