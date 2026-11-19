const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "username" : {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "bio" : {
        type: String,
        required: false
    },
    "profilePicture": {
        type: String,
        required: false
    },
    "password": {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;