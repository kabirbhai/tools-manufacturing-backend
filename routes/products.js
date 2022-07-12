const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
  deleteProduct,
} = require("../controller/productController");

//  GET ALL PRODUCT
router.get("/", getProducts);

// GET SINGLE PRODUCT

// POST PRODUCT
router.post("/", createProduct);

// UPDATE SINGLE PRODUCT

// DELETE SINGLE PRODUCT
router.delete("/:id", deleteProduct);

module.exports = router;
