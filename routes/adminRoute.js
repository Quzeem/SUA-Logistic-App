const express = require('express');
const { compare } = require('bcrypt');

const router = express.Router();

const { adminReg, partnerReg } = require('../controllers/registrationController');
const { adminLogin } = require('../controllers/loginController');

// Admin Registration --- /admin
router.post('/', (req, res) => {
  adminReg(req, res, (err, admin) => {
    if (err) {
      res.status(403).send('User validation failed. All fields are required!');
    } else {
      res.json(admin);
    }
  });
});

// Admin Login --- /admin/login
router.post('/login', (req, res) => {
  adminLogin(req, res, (err, admin) => {
    if (!admin) {
      res.status(403).send('Admin not found!');
    } else {
      compare(req.body.password, admin.password).then((result) => {
        if (!result) {
          res.json({ message: 'Incorrect password!' });
        } else {
          const adminData = JSON.parse(JSON.stringify(admin)) || {};
          delete adminData.password;
          // console.dir(userData, { depth: 1 });
          res.json({ message: 'successfully logged in', adminData });
        }
      });
    }
  });
});

// Partner Registration --- /admin/partner/register
router.post('/partner/register', (req, res) => {
  partnerReg(req, res, (err, partner) => {
    if (err) {
      res.status(403).send('User validation failed. All fields are required!');
    } else {
      res.json(partner);
    }
  });
});

module.exports = router;
