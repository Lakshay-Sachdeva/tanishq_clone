const express = require("express");

const navbar = require("./views/scripts/navbar");

const productController = require("./controllers/product.controller");
const userController = require("./controllers/user.controller") ;
const { register , login } = require("./controllers/auth.controller") ;

// const Product = require("./models/product.model");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");

app.set("views", "./src/views");

app.use("/products", productController);
app.use("/user" , userController);
app.use("/register" , register ) ;
app.use("/login" , login ) ;

app.get("/Tanishq", async (req, res) => {
	res.render("index", {
		navbar: navbar,
	});
});

// product controllers to be placed in other folder for products page
// app.get("/Tanishq/products", async(req, res) => {
//     const product_data = await Product.find().lean().exec();
//     res.render("products_page", {
//         product_data: product_data,
//     });
// })

module.exports = app;
