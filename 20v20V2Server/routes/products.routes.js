const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  getProductsByLocation,
  addProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
} = require("../controllers/products.controller");

router.get("/:location", getAllProducts);

router.get("/:location/:category", getProductsByLocation);

router.post(
  "/addProduct",
  passport.authenticate("jwt", { session: false }),
  addProduct
);

router.post(
  "/updateProduct",
  passport.authenticate("jwt", { session: false }),
  updateProduct
);

router.delete(
  "/deleteProduct",
  passport.authenticate("jwt", { session: false }),
  deleteProduct
);

module.exports = router;
