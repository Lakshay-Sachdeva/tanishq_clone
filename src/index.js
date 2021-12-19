const express = require("express");

//------------------   Controllers    ---------------------//

const tanishqController = require("./controllers/tanishq.controller") ;
const { login } = require("./controllers/auth.controller")
const productController = require("./controllers/product.controller");
const userController = require("./controllers/user.controller");
//----------------  Models   ----------------------//
const app = express();


app.use(express.json()) ;
app.use(express.urlencoded({ extended : false })) ;

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use("/public" , express.static("./src/public"));


app.use("/Tanishq" , tanishqController ) ;

app.use("/login" , login ) ;

app.use("/products", productController);
app.use("/user", userController);

module.exports = app;