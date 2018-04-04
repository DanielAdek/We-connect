import jwt from 'jsonwebtoken';
import db from '../models';


require('dotenv').config();

const { User } = db;
const secret = process.env.SECRET;
/**
 * @class Authenticate
 */
export default class Authenticate {
  /**
     * verifyUser()
     * @desc verify a user
     * @param {object} req express request object
     * @param {object} res express request object
     * @param {function} next
     * @returns {json} json
     */
  static verifyUser(req, res, next) {
    const token = req.headers['x-access-token'] || req.query.token || req.headers.authorization;
    if (!token) {
      res.status(403).json('forbidden');
    }
    const decoded = jwt.verify(token, secret);
    if (!decoded) {
      res.status(403).json({ message: 'No token provided' });
    }
    User.fineOne({
      where: {
        id: decoded.id,
        email: decoded.email
      }
    }).then((user) => {
      if (!user) {
        res.status(404).json({ message: 'No user found' });
      }
      req.decoded = decoded;
      next();
    });
  }

  /* This code snippet is pelumi longe's idea */
  /**
     * nodata()
     * @desc user does not input any data
     * @param {object} req express request object
     * @param {object} res express request object
     * @param {function} next
     * @returns {json} json
     */
  static validateInputFields(req, res, next) {
    const check = [];
    const { username, email, password } = req.body;
    if (!username || username.trim() === '') {
      check.push('username cannot be empty');
    }
    if (!email || email.trim() === '') {
      check.push('email cannot be empty');
    }
    if (!password || password.trim() === '') {
      check.push('password cannot be empty');
    }
    if (check.length > +'') {
      return res.status(400).json({ check });
    }
    return next();
  }
}

