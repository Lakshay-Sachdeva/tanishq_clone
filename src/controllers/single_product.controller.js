const express = require('express');
// const crudController = require('./crud.controller');

const Product = require("../models/product.model")
<<<<<<< Updated upstream
const footer = require("../public/scripts/footer");
=======
// const footer = require("../views/scripts/footer");
>>>>>>> Stashed changes


const router = express.Router();
router.get("/:id", async (req,res) => {
    // return res.send("working")
    const product = await Product.findById(req.params.id).lean().exec()
    // console.log('product',product)
    res.render("single_product", {
<<<<<<< Updated upstream
        footer,
=======
       
>>>>>>> Stashed changes
        product
    })
})

/* router.post("/" , crudController.post(Product)) ;
router.get("/" , crudController.getAll(Product)) ;
router.get("/:id" , crudController.getOne(Product)) ;
router.patch("/:id" , crudController.updateOne(Product)) ;
router.delete("/:id" , crudController.deleteOne(Product)) ; */

module.exports = router;