const express = require('express');
// const crudController = require('./crud.controller');

// const Product = require("../models/product.model")
// const footer = require("../views/scripts/foot

const router = express.Router();
router.get("/", async (req,res) => {
    // return res.send("working")
    // console.log('product',product)
    res.render("cart")
})

/* router.post("/" , crudController.post(Product)) ;
router.get("/" , crudController.getAll(Product)) ;
router.get("/:id" , crudController.getOne(Product)) ;
router.patch("/:id" , crudController.updateOne(Product)) ;
router.delete("/:id" , crudController.deleteOne(Product)) ; */

module.exports = router;