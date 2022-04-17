const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add a name']
    },
    roll: {
        type: String,
        required: [true, 'Please add roll number']
    },
    phone:{
        type: Number
    },
    floor: {
        type: Number,
        required: [true, 'Please add floor']
    },
    room:{
        type: String,
        required: [true, 'Please add room']
    }
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);