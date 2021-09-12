const express = require('express');
const app = express();

const cookiesParser = require('cookie-parser');
const bodyparser = require('body-parser');
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv');

const errorMiddleware = require('./middlewares/errors');

// Setting up config file
dotenv.config({ path: './config/config.env' })

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookiesParser());
app.use(fileUpload());

// Import all routes
const products = require('./routes/product');
const auth = require('./routes/auth');
const order = require('./routes/order');
const payment = require('./routes/payment');

app.use('/api/v1', products)
app.use('/api/v1', auth)
app.use('/api/v1', order)
app.use('/api/v1', payment)

// Middleware to handle errors
app.use(errorMiddleware)

module.exports = app