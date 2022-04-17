const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    nameOfUploader:{
        type: String,
        required: [true, 'Please add name']
    },
    roll:{
        type: String,
        required: [true, 'Please add roll number']
    },
    desc:{
        type: String,
        required: [true, 'Please enter desc']
    },

},{
    timestamps: true
});

module.exports = mongoose.model('Post',postSchema); 