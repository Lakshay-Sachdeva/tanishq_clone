const express = require('express');
// const crudController = require('./crud.controller');

const Product = require("../models/product.model")

const footer = require("../public/scripts/footer");


const router = express.Router();
router.get("/:id", async (req,res) => {
    const product = await Product.findById(req.params.id).lean().exec()
    res.render("single_product", {
        footer,
       
        product
    })
})

/* router.post("/" , crudController.post(Product)) ;
router.get("/" , crudController.getAll(Product)) ;
router.get("/:id" , crudController.getOne(Product)) ;
router.patch("/:id" , crudController.updateOne(Product)) ;
router.delete("/:id" , crudController.deleteOne(Product)) ; */

module.exports = router;