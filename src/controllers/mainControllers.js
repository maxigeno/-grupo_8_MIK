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
};

module.exports = mainControllers;
