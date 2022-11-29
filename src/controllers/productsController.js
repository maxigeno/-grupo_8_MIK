const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const calculateDiscount = (price, discountPer) => {
  let discount = price * (discountPer / 100);
  return price - discount;
};

const productsControllers = {
  index: (req, res) => {
    let newCourse = products.filter((product) => product.isNew == true);
    let inSale = products.filter((product) => product.inSale == true);
    let others = products.filter((product) => product.isNew == false && product.inSale == false)
    res.render("index", { newCourse, inSale, others, calculateDiscount });
  },
  detail: (req, res) => {
    let id = (req.params.id);
    let product = products.find(product => product.id === id);
    res.render("productDetail", { product });
  },
  create: (req, res) => {
    res.render("productCreate");
  },
  store: (req, res) => {
    console.log("body", req.body);
    let newProduct = {
      id: products[products.length - 1].id + 1,
      ...req.body,
      image: "default-img.png"
    };

    console.log("json", req.body)
    products.push(newProduct)
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    res.redirect('/')
  },
  edit: (req, res) => {
    let id = req.params.id
    let productToEdit = products.find(product => product.id == id)
    res.render('productEdit', {productToEdit})
  },
  update: (req, res) => {
    let id = req.params.id;
    let productToEdit = products.find(product => product.id == id)

    productToEdit = {
      id: productToEdit.id,
      ...req.body,
      image: productToEdit.image,
    };

    let newProducts = products.map(product =>{
      if (product.id == productToEdit.id){
        return product = {...productToEdit}
      }
      return product;
    })

    fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null , " "))
    res.redirect('/')
  },
  destroy: (req, res) => {
    let id = req.params.id;
    let finalProducts = products.filter (product => product.id != id);
    fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
    res.redirect('/');
  }
};

module.exports = productsControllers;
