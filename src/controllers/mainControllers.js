const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const calculateDiscount = (price, discountPer) => {
  let discount = price * (discountPer / 100);
  return price - discount;
};

const mainControllers = {
  index: (req, res) => {
    let newCourse = products.filter((product) => product.isNew === true);
    let inSale = products.filter((product) => product.inSale === true);
    res.render("index", { newCourse, inSale, calculateDiscount });
  },
  detalle: (req, res) => {
    let idParam = req.params.id;
    let product = products.find((product) => product.id === idParam);
    res.render("productDetail", { product });
  },
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
  productCart: (req, res) => {
    res.render("productCart");
  },
  productDetail: (req, res) => {
    res.render("productDetail");
  },
  productIndex: (req, res) => {
    res.render("productIndex");
  },
};

module.exports = mainControllers;
