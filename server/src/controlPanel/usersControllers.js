import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../models';

require('dotenv').config();

const secret = process.env.SECRET_OR_KEY;

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

  /**
     * @returns {object} loginUser
     * @param {*} req
     * @param {*} res
     */
  static loginUser(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: 'email and password cannot be empty' });
    }
    User.findOne({ where: { email } }).then((user) => {
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        const userdata = {
          email: user.email,
        };
        const token = jwt.sign(userdata, secret);
        return res.status(200).json({ message: 'user logged in', token });
      }
      return res.status(400).json({ message: 'email/password incorrect' });
    }).catch((err) => {
      res.status(500).json({ message: `server error ${err.message} ` });
    });
  }
}
