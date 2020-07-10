const express = require('express');
const path = require('path');

const router = express.Router();

const products = [
    {
        title: "Shoe",
        description: "Amazing Shoe",
        price: "400",
    },
    {
        title: "Jeans",
        description: "Amazing Jeans",
        price: "1400",
    },
    {
        title: "Cap",
        description: "Amazing Cap",
        price: "500",
    },
];

router.get("/all-products", (__, res) => {
    res.render("products", { pageTitle: "Products", products });
});

module.exports = router;