const app = require('./app.js');
const connectDatabase = require('./config/database');


const dotenv = require('dotenv');
const cloudinary = require('cloudinary');

// Handle uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log(`Shutting down server due to uncaught exception`);
    process.exit(1)
})

// Setting up config file
dotenv.config({ path: './config/config.env' })


// Connecting to Database
connectDatabase();

// Setting up cloudinary config
/* cloudinary.config({
    CLOUD_NAME: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
}) */

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

// Handle unhandled promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to unhandled promise rejection');
    server.close(() => {
        process.exit(1);
    })
})