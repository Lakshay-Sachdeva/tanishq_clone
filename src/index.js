const express = require("express");


/////////////////   Controllers    //////////////////////
const productController = require("./controllers/product.controller");

const userController = require("./controllers/user.controller") ;


const { register , login } = require("./controllers/auth.controller") ;

const singleController = require("./controllers/single_product.controller")

const cartController = require("./controllers/cart.controller")


/////////////////   Models   ///////////////////////
const Products = require("./models/product.model");

const navbar = require("./public/scripts/navbar");

const app = express();


app.use(express.json()) ;

app.set("view engine", "ejs");

app.use(express.static('public'));


app.set("views", "./src/views");
app.use(express.static("public"));

app.use("/products", productController);
app.use("/user" , userController);
app.use("/register" , register ) ;
app.use("/login" , login ) ;

app.use('/single',singleController)
app.use("/cart",cartController)


app.get("/Tanishq", async (req, res) => {
	res.render("index");
});

app.get("/Tanishq/login", async (req, res) => {
	res.render("login.ejs");
});

app.get("/Tanishq/signup", async (req, res) => {
	res.render("signup.ejs");
});


app.get("/Tanishq/products", async (req, res) => {
    const Product = await Products.find().lean().exec();
    res.render("products", {
		Product: Product
	})
})

app.use("/single" , singleController)


module.exports = app;

