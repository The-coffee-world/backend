const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// Register a user => /api/v1/register
exports.registerUser = catchAsyncErrors( async (req, res, next) => {

    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'v1624967948/sample',
            url: 'https://res.cloudinary.com/dqniwdlsv/image/upload/v1624967948/sample.jpg'
        }
    })

    res.status(201).json({
        success: true,
        user
    })
})
