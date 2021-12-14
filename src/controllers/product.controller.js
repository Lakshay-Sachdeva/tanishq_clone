const express = require('express');

const Product = require('../models/product.model') ;
const crudController = require('./crud.controller') ;

const router = express.Router() ;

router.post("/" , crudController.post(Product)) ;
router.get("/" , crudController.getAll(Product)) ;
router.get("/" , crudController.getOne(Product)) ;
router.patch("/" , crudController.updateOne(Product)) ;
router.delete("/" , crudController.deleteOne(Product)) ;

module.exports = router ;