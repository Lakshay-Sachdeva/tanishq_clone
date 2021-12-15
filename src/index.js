const express = require('express');

<<<<<<< Updated upstream
=======
const navbar = require("./views/scripts/navbar");

const footer = require("./views/scripts/footer");

>>>>>>> Stashed changes
const productController = require("./controllers/product.controller") ;

const app = express();
app.use(express.json()) ;

app.use("/products" , productController) ;

<<<<<<< Updated upstream
=======
app.get("/Tanishq", async (req, res) => {

    res.render("../index", {
        navbar: navbar,
        footer: footer,
    });
})

app.get("/Tanishq/products", async(req, res) => {
    const product_data = await Product.find().lean().exec();
    res.render("products_page", {
        product_data: product_data,
    });
})



>>>>>>> Stashed changes
module.exports = app ;