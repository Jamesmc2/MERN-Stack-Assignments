const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true,'You must have a first name!'],
        minlength: [3, 'Your first name must be at least 3 characters! ']
        },
    lastName: {
        type: String,
        required: [true,'You must have a last name!'],
        minlength: [3, 'Your last name must be at least 3 characters! ']
    },
    favoriteColor: {
        type: String,
    
    }
}, { timestamps: true });

module.exports.Author = mongoose.model('Author', AuthorSchema);