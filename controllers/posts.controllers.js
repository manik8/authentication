const Posts = require('../models/posts.model');

exports.getAllPosts = (__, res) => {
    Posts.find({}).exec((err, posts) => {
        if(err) 
            return res
                .status(400)
                .json({ status: 'failed', message: 'Fetching posts from database failed'});

        return res.json(posts);
    });
};

exports.addPost = (__, res) => {

};