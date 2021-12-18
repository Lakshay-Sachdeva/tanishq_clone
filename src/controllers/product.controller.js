const express = require("express");

const Product = require("../models/product.model");
const crudController = require("./crud.controller");

const router = express.Router();

router.post("/", crudController.post(Product));
router.get("/", crudController.getAll(Product));
router.get("/:id", crudController.getOne(Product));
router.patch("/:id", crudController.updateOne(Product));
router.delete("/:id", crudController.deleteOne(Product));

module.exports = router;
