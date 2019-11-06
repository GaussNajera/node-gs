const Post = require('../models/post');

exports.getPost = (req, res) => {
    res.json({
        post: [
            { title: "First post" },
            { title: "Second post" }
        ]
    });
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    console.log("CREATING POST: ", post);

};