const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const calculateDiscount = (price, discountPer) => {
  let discount = price * (discountPer / 100);
  return price - discount;
};

const productsControllers = {
  // Root - Show all products
  products: (req, res) => {
    let newCourse = products.filter((product) => product.isNew == true);

    let inSale = products.filter((product) => product.inSale == true);
    let others = products.filter(
      (product) => product.isNew == false && product.inSale == false
    );
    res.render("index", { newCourse, inSale, others, calculateDiscount });
  },
  // Detail
  detail: (req, res) => {
    let id = req.params.id;
    let product = products.find((product) => product.id == id);
    res.render("productDetail", { product });
  },
  // Create Form
  create: (req, res) => {
    res.render("productCreate");
  },
  // Create Method POST
  store: (req, res) => {
    let image;
    if (req.file != undefined) {
      image = req.file.filename;
    } else {
      image = "default-image.png";
    }

    let newProduct = {
      id: products[products.length - 1].id + 1,
      ...req.body,
      isNew: req.body.isNew === "true" ? true : false,
      inSale: req.body.inSale === "true" ? true : false,
      image,
    };
    products.push(newProduct);
    //console.log("products", products);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    res.redirect("/");
  },
  // Update  Form to edit
  edit: (req, res) => {
    let id = req.params.id;
    let productToEdit = products.find((product) => product.id == id);
    res.render("productEdit", { productToEdit });
  },
  // Update - Method to update
  update: (req, res) => {
    let id = req.params.id;
    let productToEdit = products.find((product) => product.id == id);
    let image;

    if (req.file != undefined) {
      image = req.file.filename;
    } else {
      image = "default-image.png";
    }

    productToEdit = {
      id: productToEdit.id,
      ...req.body,
      isNew: req.body.isNew === "true" ? true : false,
      inSale: req.body.inSale === "true" ? true : false,
      image,
    };

    let newProducts = products.map((product) => {
      if (product.id == productToEdit.id) {
        return (product = { ...productToEdit });
      }
      return product;
    });

    fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, " "));
    res.redirect("/");
  },

  destroy: (req, res) => {
    let id = req.params.id;
    let finalProducts = products.filter((product) => product.id != id);
    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(finalProducts, null, " ")
    );
    res.redirect("/");
  },
};

module.exports = productsControllers;
