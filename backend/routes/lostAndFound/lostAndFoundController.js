const asyncHandler = require('express-async-handler');
const Post = require('../../model/postModel');

// Get request for Post
// @route  /lostandfound
const getPost = asyncHandler (async (req,res)=>{
    const post = await Post.find();
    res.status(200).json(post);
})

// Post request for Post
// @route  /lostandfound
const postPost = asyncHandler(async (req,res)=>{
    console.log(req.body);

    if(!req.body){
        res.status(400)
        throw new Error('Error in adding data');
    }

    const p = await Post.create({
        nameOfUploader: req.body.nameOfUploader,
        roll: req.body.roll,
        desc: req.body.desc
    })

    res.status(200).json(p);
})

// Put request for Post
// @route  /lostandfound/:id
const putPost = asyncHandler( async (req,res)=>{
    const post = await Post.findById(req.params.id)

    if(!post){
        req.status(400);
        throw new Error('Post not found');
    }
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedPost);
})

// Delete request for Post
// @route  /lostandfound/:id
const deletePost = asyncHandler(async (req,res)=>{
    const post = await Post.findById(req.params.id);

    if(!post){
        res.status(400);
        throw new Error('Post not found');
    }

    await post.remove()

    res.status(200).json({id: req.params.id});
})

module.exports = {
    getPost,
    postPost,
    putPost,
    deletePost
}