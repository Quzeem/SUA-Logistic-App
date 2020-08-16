// const Order = require('../models/orderModel');
// const User = require('../models/userModel');

// GET: Display all orders associated with a specific user -- INDEX
const getAllOrders = (req, res) => {
  res.status(501).send('Not implemented');
};

// GET: make new order -- NEW
const createNewOrder = (req, res) => {
  res.status(501).send('Not implemented');
};

// POST: save new order to DB -- CREATE
const postNewOrder = (req, res) => {
  // const newOrder = req.body;
  res.status(501).send('Not implemented');
};

// GET: show more info about a specific order -- SHOW
const orderInfo = (req, res) => {
  res.status(501).send('Not implemented');
};

// GET: edit a specifc order details-- EDIT
const editOrder = (req, res) => {
  res.status(501).send('Not implemented');
};

// PUT: update a specific order details -- UPDATE
const updateOrder = (req, res) => {
  // const updatedOrder = req.body;
  res.status(501).send('Not implemented');
};

// DELETE: remove an order -- DELETE
const deleteOrder = (req, res) => {
  res.status(501).send('Not implemented');
};

module.exports = {
  getAllOrders,
  createNewOrder,
  postNewOrder,
  orderInfo,
  editOrder,
  updateOrder,
  deleteOrder,
};
