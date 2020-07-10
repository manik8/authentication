const express = require('express');
const postRoutes = require('./posts.routes');
const productRoutes = require('./products.route');

const router = express.Router();

router.use("/products", productRoutes);
router.use("/posts", postRoutes);

module.exports = router;