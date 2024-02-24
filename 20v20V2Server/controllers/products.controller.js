const Product = require("../database/models/Products");

exports.getAllProducts = async (req, res) => {
  let { location } = req.params;

  try {
    const products = await Product.find({ location }).sort({
      price: 1,
    });

    return res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Il y a eu un problème",
    });
  }
};

exports.getProductsByLocation = async (req, res) => {
  let { location, category } = req.params;

  if (!location || !category) {
    return res.status(500).json({
      message: "Il y a eu un problème",
    });
  }
  try {
    let products = await Product.find({
      location: location,
      category: category,
    });

    if (products.length > 0) {
      return res.status(200).json({
        products,
      });
    } else {
      return res.status(200).json({
        products: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Il y a eu un problème",
    });
  }
};

exports.addProduct = async (req, res) => {
  const { product } = req.body;
  try {
    const newProduct = await new Product({ ...product }).save();
    if (newProduct) {
      return res.status(201).json({
        message: `Nouveau produit crée ${newProduct.title}`,
        newProduct,
      });
    } else {
      return res.status(400).json({
        message: "Il y à eu un probléme lors de la création du produit",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Il y a eu un problème",
    });
  }
};

exports.deleteProduct = async (req, res) => {
  const { _id } = req.body;
  try {
    const deletedProduct = await Product.findByIdAndDelete({ _id });

    if (deletedProduct) {
      return res.status(202).json({
        message: `Produit ${deletedProduct.title} supprimé avec succés`,
        deletedProduct,
      });
    } else {
      return res.status(400).json({
        message: "Il y à eu un probléme lors de la suppression du produit",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Il y à eu un problème",
    });
  }
};

exports.updateProduct = async (req, res) => {
  const { update } = req.body;
  const { _id, ...otherProps } = update;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      { _id },
      { ...otherProps },
      { upsert: true, new: true }
    );

    if (updatedProduct) {
      return res.status(202).json({
        message: `Produit ${updatedProduct.title} modifié avec succés`,
        updatedProduct,
      });
    } else {
      return res.status(400).json({
        message: "Il y à eu un probléme lors de la modification du produit",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Il y à eu un problème",
    });
  }
};
