const express = require('express');
const postController = require('../controller/post');
// const {getPost,createPost} = require('../controller/post');

const router = express.Router();

router.get('/', postController.getPost);
router.post('/cpost', postController.createPost);


module.exports = router;




