const mongoose = require("mongoose");
const Product = require("../models/productModels");

//  GET ALL PRODUCT
const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).send(products);
};

// GET SINGLE PRODUCT

// POST PRODUCT
const createProduct = async (req, res) => {
  const { name, price, img, minQty, availableQty, desc } = req.body;
  try {
    const product = await Product.create({
      name,
      price,
      img,
      minQty,
      availableQty,
      desc,
    });
    return res.status(200).send({ product, success: true });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// UPDATE SINGLE PRODUCT

// DELETE SINGLE PRODUCT
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ message: "Not product found" });
  }
  const product = await Product.findOneAndDelete({ _id: id });
  if (!product) {
    return res.status(400).send({ error: "No such product available" });
  }
  res.status(200).send({ product, success: true });
};

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
};
