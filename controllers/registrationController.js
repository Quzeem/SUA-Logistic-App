const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const Admin = require('../models/adminModel');

// Rider & Customer Registration
const riderAndCustomerReg = (req, res, callback) => {
  const {
    username, email, password, address, phoneNumber, userType,
  } = req.body;
  const users = ['Rider', 'Customer'];
  // check if userType matches any of the users
  const verify = users.find((type) => type === userType);

  if (!verify) {
    res.status(403).send('Please specify your role either as a Rider or a Customer');
  } else {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (error, hashedPassword) => {
        if (error) console.log(error);
        const newUser = new User({
          username, email, password: hashedPassword, address, phoneNumber, userType,
        });
        newUser.save(callback);
      });
    });
  }
};

// Admin Registration
const adminReg = (req, res, callback) => {
  const {
    username, email, password, address, phoneNumber, userType,
  } = req.body;
  const user = 'Admin';
  // check if userType is Admin
  const verify = user === userType;

  if (!verify) {
    res.status(403).send('This page is meant for the admin. Visit users registration page instead!');
  } else {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (error, hashedPassword) => {
        if (error) console.log(error);
        const newAdmin = new Admin({
          username, email, password: hashedPassword, address, phoneNumber, userType,
        });
        newAdmin.save(callback);
      });
    });
  }
};

// Partner Registration by Admin
const partnerReg = (req, res, callback) => {
  const {
    username, email, password, address, phoneNumber, userType,
  } = req.body;
  const user = 'Partner';
  // check if userType is Partner
  const verify = user === userType;
  if (!verify) {
    res.status(403).send('This page is meant for partner registration and it is handled by the Admin.');
  } else {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (error, hashedPassword) => {
        if (error) console.log(error);
        const newPartner = new User({
          username, email, password: hashedPassword, address, phoneNumber, userType,
        });
        newPartner.save(callback);
      });
    });
  }
};

module.exports = { riderAndCustomerReg, adminReg, partnerReg };
