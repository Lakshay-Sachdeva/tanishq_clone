const express = require('express');

const productController = require("./controllers/product.controller") ;

const app = express();
app.use(express.json()) ;

app.set("view engine", "ejs");

app.use("/products" , productController) ;

module.exports = app ;