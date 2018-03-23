import users from './../dummydb/usersdb';

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
    for (const user of users) {
      if (user.email == req.body.email && user.password == req.body.password) {
        return res.status(200).json({ message: `Welcome ${user.firstname}!` });
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
      users.push(req.body);
      return res.status(201).json({
        message: 'New Business Created Successfully'
      });
    }
    return res.status(400).json({
      message: 'All (*) fields cannot be empty',
      err: true
    });
  }
}
