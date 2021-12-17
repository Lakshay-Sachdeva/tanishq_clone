const express = require('express') ;

const User = require("../models/user.model") ;
const crudController = require("./crud.controller") ;
const { register } = require("./auth.controller")

const router = express.Router() ;

// router.post("/" , register , crudController.post(User)) ;
router.get("/" , crudController.getAll(User)) ;
router.get("/:id" , crudController.getOne(User)) ;
router.patch("/:id" , crudController.updateOne(User)) ;
router.delete("/:id" , crudController.deleteOne(User)) ;

router.post("/" , register ) ;

module.exports = router ;