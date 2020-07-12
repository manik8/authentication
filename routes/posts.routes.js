const express = require('express');
const { getAllPosts,getPost,createPost,updatePost,getPostCount,getLikesCount,getUrls,getUniqueUrls  } = require("../controllers/posts.controllers");

const router = express.Router();


// www.myapp.com/api/v1/posts/all-posts
router.get("/all-posts", getAllPosts);

router.get("/post/:id", getPost);

router.post("/add-post", createPost);

router.put("/update-post/:id", updatePost);

router.get("/posts-count", getPostCount);

// Instead of sum we can also use $min, $max, $avg etc.
router.get("/likes-count", getLikesCount);

router.get("/urls-per-author", getUrls);

router.get("/unique-urls-per-author", getUniqueUrls);

module.exports = router;