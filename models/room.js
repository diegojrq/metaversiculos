const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    maxcount: {
        type: Number,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    rentperday: {
        type: Number,
        required: true
    },
    rentperday: {
        type: Number,
        required: true
    },
    
    imageUrls : [],
    currentBookings : [],

    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

} , {
    timestamps : true,
})

const rootModel = mongoose.model('rooms', roomSchema)

module.exports = rootModel