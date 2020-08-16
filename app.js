const express = require('express');
const mongoose = require('mongoose');

const indexRouter = require('./routes/indexRoute');
const adminRouter = require('./routes/adminRoute');
const usersRouter = require('./routes/usersRoute');
const ordersRouter = require('./routes/ordersRoute');

// connect to MongoDB
const mongoDB = 'mongodb://localhost:27017/logisticDB';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Bind connection to error event (to get notification of connection errors)
const db = mongoose.connection; // get the default connection
db.on('error', console.error.bind(console, 'connection error:'));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Root Route
app.use(indexRouter);

//  Admin API Routes
app.use('/admin', adminRouter);

// Users API Routes
app.use('/users', usersRouter);

// Orders API Routes
app.use('/users/:id/orders', ordersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
