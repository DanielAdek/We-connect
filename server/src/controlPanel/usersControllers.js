import bcrypt from 'bcrypt';
import db from '../models';

const { User } = db;

/**
 * @class Users
 */
export default class Users {
  /**
     * createUser()
     * @desc create a new user account
     * @param {*} req express request object
     * @param {*} res exoress response object
     * @returns {object} json
     */
  static createUser(req, res) {
    const password = bcrypt.hashSync(req.body.password, 10);
    const { username, email } = req.body;
    return User
      .create({ username, email, password })
      .then(user => res.status(201).json({
        message: `${user.username} is successfully created as a new account`
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
}
