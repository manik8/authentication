const Posts = require('../models/posts.model');

exports.getAllPosts = (__, res) => {
    Posts.find({}).exec((err, posts) => {
        if(err) 
            return res.status(400).json({ 
                status: 'failed', message: 'Fetching posts from database failed'
            });

        return res.json(posts);
    });
};

exports.getPost = (req, res) => {
    Posts.findOne({ _id: req.params.id }).exec((err, post) => {
        if(err) 
            return res.status(400).json({ 
                status: 'failed', message: 'Fetching posts from database failed'
            });

        return res.json(post);
    });
};

exports.createPost = (req, res) => {
    const Post = new Posts();
    const { title, desc, likes, comments, url, author, category } = req.body;

    Post.title = title;
    Post.desc = desc;
    Post.likes = likes;
    Post.author = author;
    Post.url = url;
    Post.category = category;
    Post.comments = comments;


    Post.save((err, post)=> {
        if(err) 
            return res.status(400).json({ 
                status: 'failed', message: 'Fetching posts from database failed'
            });

        return res.json(post);
    });
};