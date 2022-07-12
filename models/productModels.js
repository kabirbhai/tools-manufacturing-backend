const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    minQty: {
      type: Number,
      require: true,
    },
    availableQty: {
      type: Number,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
  },
  { timestamps: true, versionKey: false }
);
module.exports = mongoose.model("Product", productSchema);
