const asyncHandler = require('express-async-handler');
const User = require('../../model/userModel');
// Get request for Login
// @route  /login
const getLogin = asyncHandler (async (req,res)=>{
    const users = await User.find();
    res.status(200).json(users);
})

// Post request for Login
// @route  /login
const postLogin = asyncHandler(async (req,res)=>{
    console.log(req.body);

    if(!req.body){
        res.status(400)
        throw new Error('Error in adding data');
    }

    const u = await User.create({
        name: req.body.name,
        roll: req.body.roll,
        phone: req.body.phone,
        floor: req.body.floor,
        room: req.body.room
    })

    res.status(200).json(User);
})

// Put request for Login
// @route  /login/:id
const putLogin = asyncHandler( async (req,res)=>{
    const user = await User.findById(req.params.id)

    if(!user){
        req.status(400);
        throw new Error('User not found');
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedUser);
})

// Delete request for Login
// @route  /login/:id
const deleteLogin = asyncHandler(async (req,res)=>{
    const user = await User.findById(req.params.id);

    if(!user){
        res.status(400);
        throw new Error('User not found');
    }

    await user.remove()

    res.status(200).json({id: req.params.id});
})

module.exports = {
    getLogin,
    postLogin,
    putLogin,
    deleteLogin
}