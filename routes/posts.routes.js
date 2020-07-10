const express = require('express');
const { getAllPosts,getPost,createPost,updatePost } = require("../controllers/posts.controllers");

const router = express.Router();


// www.myapp.com/api/v1/posts/all-posts
router.get("/all-posts", getAllPosts);

router.get("/post/:id", getPost);

router.post("/add-post", createPost);

router.put("/update-post/:id", updatePost);

module.exports = router;