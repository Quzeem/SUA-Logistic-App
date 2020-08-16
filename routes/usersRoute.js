const express = require('express');
const { compare } = require('bcrypt');

const router = express.Router();

const { riderAndCustomerReg } = require('../controllers/registrationController');
const { userLogin } = require('../controllers/loginController');
const {
  getAllUsers,
  createNewUser,
  userInfo,
  editUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

// Users Login --- /users/login
router.post('/login', (req, res) => {
  userLogin(req, res, (err, user) => {
    if (!user) {
      res.status(403).send('User not found!');
    } else {
      compare(req.body.password, user.password).then((result) => {
        if (!result) {
          res.json({ message: 'Incorrect password!' });
        } else {
          const userData = JSON.parse(JSON.stringify(user)) || {};
          delete userData.password;
          // console.dir(userData, { depth: 1 });
          res.json({ message: 'successfully logged in', userData });
        }
      });
    }
  });
});

// GET: Display all users -- INDEX
router.get('/', getAllUsers);

// GET: create new user -- NEW (form)
router.get('/new', createNewUser);

// POST: save new user to DB -- CREATE
// Rider/Customer Registration --- /users/register
router.post('/register', (req, res) => {
  riderAndCustomerReg(req, res, (err, user) => {
    if (err) {
      res.status(403).send('User validation failed. All fields are required!');
    } else {
      res.json(user);
    }
  });
});

// GET: show more info about a specific user -- SHOW
router.get('/:id', userInfo);

// GET: edit a specifc user details-- EDIT
router.get('/edit', editUser);

// PUT: update a specific user details -- UPDATE
router.put('/:id', updateUser);

// // DELETE: remove a user -- DELETE
router.delete('/:id', deleteUser);

module.exports = router;
