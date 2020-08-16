// const User = require('../models/userModel');

// GET: Display all users -- INDEX
const getAllUsers = (req, res) => {
  res.status(501).send('Not implemented');
};

// GET: create new user -- NEW (form)
const createNewUser = (req, res) => {
  res.status(501).send('Not implemented');
};

// GET: show more info about a specific user -- SHOW
const userInfo = (req, res) => {
  res.status(501).send('Not implemented');
};

// GET: edit a specifc user details-- EDIT
const editUser = (req, res) => {
  res.status(501).send('Not implemented');
};

// PUT: update a specific user details -- UPDATE
const updateUser = (req, res) => {
  // const updatedUser = req.body;
  res.status(501).send('Not implemented');
};

// DELETE: remove a user -- DELETE
const deleteUser = (req, res) => {
  res.status(501).send('Not implemented');
};

module.exports = {
  getAllUsers,
  createNewUser,
  userInfo,
  editUser,
  updateUser,
  deleteUser,
};
