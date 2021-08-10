const express = require('express');
const app = express();

const cookiesParser = require('cookie-parser');
const bodyparser = require('body-parser');
const cloudinary = require('cloudinary');

const errorMiddleware = require('./middlewares/errors');

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookiesParser());

// Setting up cloudinary config
cloudinary.config({
    CLOUD_NAME: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// Import all routes
const products = require('./routes/product');
const auth = require('./routes/auth');
const order = require('./routes/order');

app.use('/api/v1', products)
app.use('/api/v1', auth)
app.use('/api/v1', order)

// Middleware to handle errors
app.use(errorMiddleware)

module.exports = app