const express = require('express');
const router = express.Router();
const {getLogin, postLogin, putLogin, deleteLogin} = require('../login/loginController');

router.route('/').get(getLogin).post(postLogin)
router.route('/:id').get(putLogin).delete(deleteLogin)

module.exports = router;