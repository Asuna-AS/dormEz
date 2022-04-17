const express = require('express');
const router = express.Router();
const {getPost, postPost, putPost, deletePost} = require('../lostAndFound/lostAndFoundController');

router.route('/').get(getPost).post(postPost)
router.route('/:id').get(putPost).delete(deletePost)

module.exports = router;