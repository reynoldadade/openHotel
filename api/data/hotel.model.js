const mongoose = require('mongoose');

const roomSchema =  new mongoose.Schema({
    type: String,
    number: Number,
    description: String,
    photos: [String],
    price: Number
});

const reviewSchema =  new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    review : {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});


const restaurant = new mongoose.Schema({

});
