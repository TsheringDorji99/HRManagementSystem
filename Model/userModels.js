const mongoose = require ('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!' ],
    },

    employee_id: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
    },

    gender: {
        type: String,
        required: [true, 'Please provide your email'],
        default: 'Male',
    },

    dob: {
        type: String,
        required: [true, 'Please Enter Your Date Of Birth'],
        
    },

    designation: {
        type: String,
        required: [true, 'Please Enter Your Designation'],
    },

    department: {
        type: String,
        required: [true, 'Please Enter Your Department'],
    },

    appointment_date: {
        type: String,
        required: [true, 'Please Enter Your Appointment Date'],
    },
    active: {
        type: Boolean,
        default: true,
        select: false,
    },

})

const User = mongoose.model('User', userSchema )
module.exports = User