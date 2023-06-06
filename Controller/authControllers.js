const User = require('./../Model/userModels')
const jwt = require('jsonwebtoken')
const AppError = require('./../utils/appError')

const signToken = (id) => {
    return jwt.sign({ id },
        process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
}
const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id)
    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
        ),
        httpOnly: true,
    }
    res.cookie('jwt', token, cookieOptions)
    res.status(statusCode).json({
        status: "success",
        token,
        data: {
            user
        }
    })
}

exports.signup = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        createSendToken(newUser, 201, res)
    }
    catch (err) {
        console.log("error ", err.message);
        res.status(500).json({ error: err.message });
    }
}