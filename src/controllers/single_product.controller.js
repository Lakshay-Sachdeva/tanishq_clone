

const express = require('express');

// const crudController = require('./crud.controller');

const router = express.Router();
router.get("/", (req,res) => {
    // return res.send("working")
    const product = { name: 'kartik' }
    res.render("single_product", {
        product
    })
})

/* router.post("/" , crudController.post(Product)) ;
router.get("/" , crudController.getAll(Product)) ;
router.get("/:id" , crudController.getOne(Product)) ;
router.patch("/:id" , crudController.updateOne(Product)) ;
router.delete("/:id" , crudController.deleteOne(Product)) ; */

module.exports = router;