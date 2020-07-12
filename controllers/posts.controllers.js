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

exports.updatePost = (req, res) => {
    const { title } = req.body;
    Posts.findByIdAndUpdate({ _id: req.params.id }, { title }).exec((err, post) => {
        if(err) 
            return res.status(400).json({ 
                status: 'failed', message: 'Fetching posts from database failed'
            });

        return res.json(post);
        });
}

exports.getPostCount = (req, res) => {
    Posts.aggregate([ { $match: { author: "Tim"}},{ $group: { _id: '$author', numOfPost: { $sum: 1 }}}]).exec((err, post) => {
        if(err) 
            return res.status(400).json({ 
                status: 'failed', message: 'Aggregation of post has failed'
            });

        return res.json(post);
    });
}

exports.getLikesCount = (req, res) => {
    Posts.aggregate([{ $group: { _id: '$author', numOfLikes: { $sum: "$likes" }}}]).exec((err, post) => {
        if(err) 
            return res.status(400).json({ 
                status: 'failed', message: 'Aggregation of likes has failed'
            });

        return res.json(post);
    });
}

exports.getUrls = (req, res) => {
    Posts.aggregate([{ $group: { _id: '$author', url: { $push: "$url" }}}]).exec((err, post) => {
        if(err) 
            return res.status(400).json({ 
                status: 'failed', message: 'Url fetch failed'
            });

        return res.json(post);
    });
}

exports.getUniqueUrls = (req, res) => {
    Posts.aggregate([{ $group: { _id: '$author', url: { $addToSet: "$url" }}}]).exec((err, post) => {
        if(err) 
            return res.status(400).json({ 
                status: 'failed', message: 'Unique Url fetch failed'
            });

        return res.json(post);
    });
}