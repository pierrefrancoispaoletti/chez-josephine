const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    default: true,
    required: true,
  },
  couleur: {
    type: Array,
  },
  subCategory: {
    type: String,
  },
});

const Product = mongoose.model("products", ProductModel);
module.exports = Product;
