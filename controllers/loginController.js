const User = require('../models/userModel');
const Admin = require('../models/adminModel');

// partner, customer, rider
const userLogin = (req, res, callback) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(403).send('All the fields are required!');
  } else {
    User.findOne({ email }, callback);
  }
};

// admin
const adminLogin = (req, res, callback) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(403).send('All the fields are required!');
  } else {
    Admin.findOne({ email }, callback);
  }
};

module.exports = { userLogin, adminLogin };
