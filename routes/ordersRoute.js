const express = require('express');

const router = express.Router({ mergeParams: true });

const {
  getAllOrders,
  createNewOrder,
  postNewOrder,
  orderInfo,
  editOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/orderController');

// GET: Display all orders associated with a specific user -- INDEX
router.get('/', getAllOrders);

// GET: make new order -- NEW
router.get('/new', createNewOrder);

// POST: save new order to DB -- CREATE
router.post('/', postNewOrder);

// GET: show more info about a specific order -- SHOW
router.get('/:id', orderInfo);

// GET: edit a specifc order details-- EDIT
router.get('/edit', editOrder);

// PUT: update a specific order details -- UPDATE
router.put('/:id', updateOrder);

// // DELETE: remove an order -- DELETE
router.delete('/:id', deleteOrder);

module.exports = router;
