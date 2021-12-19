const express = require("express");

//------------------   Controllers    ---------------------//
const productController = require("./controllers/product.controller");

const userController = require("./controllers/user.controller");

const { register, login } = require("./controllers/auth.controller");
const cartController = require("./controllers/cart.controller");

const checkoutController = require("./controllers/checkout.controller")
const singleController = require("./controllers/single_product.controller");

//----------------  Models   ----------------------//
const Products = require("./models/product.model");
const app = express();


app.use(express.json()) ;
app.use(express.urlencoded({ extended : false })) ;

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use("/public" , express.static("./src/public"));

app.use("/products", productController);
app.use("/user", userController);
// app.use("/register" , register ) ;
app.use("/login", login);

app.use("/cart", cartController);

app.use("/single", singleController);
app.use("/checkout",checkoutController)
app.get("/Tanishq", async (req, res) => {
	res.render("index");
});

app.get("/Tanishq/login", async (req, res) => {
	res.render("login.ejs");
});

app.get("/Tanishq/signup", async (req, res) => {
	res.render("signup.ejs");
});

app.get("/Tanishq/payment", async (req, res) => {
	res.render("payment.ejs");
});

app.get("/Tanishq/products", async (req, res) => {
	const product = await Products.find().lean().exec();
	res.render("products", {
		product,
	});
});

app.use("/single", singleController);

module.exports = app;
