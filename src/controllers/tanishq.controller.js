const express = require('express');

const Products = require('../models/product.model')

const router = express.Router() ;

router.get("/", async (req, res) => {
	res.render("index");
});

router.get("/products", async (req, res) => {
    const product = await Products.find().lean().exec();
    res.render("products", {
        product,
    });
});



router.get("/single/:id", async (req, res) => {
	const product = await Products.findById(req.params.id).lean().exec();
	res.render("single_product", { product } );
});

router.get("/cart", async (req, res) => {
	res.render("cart");
});

router.get("/checkout" , (req,res)=>{
    res.render("checkout")
})

router.get("/login", async (req, res) => {
	res.render("login.ejs");
});

router.get("/signup", async (req, res) => {
	res.render("signup.ejs");
});

router.get("/payment", async (req, res) => {
	res.render("payment.ejs");
});


module.exports = router ;