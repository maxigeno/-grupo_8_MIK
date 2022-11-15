const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const ProductsControllers = {
  products: (req, res) => {
    res.render("productIndex", { products });
  },
  detail: (req, res) => {
    idProduct = Number(req.params.id);
    const product = products.find((product) => product.id === idProduct);
    res.render("productDetail", { product });
  },
  create: (req, res) => {
    res.render("productCreate");
  },
};

module.exports = ProductsControllers;
