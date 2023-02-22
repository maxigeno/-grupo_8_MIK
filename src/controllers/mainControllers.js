const fs = require("fs");
const path = require("path");
const db = require("./../database/models");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const calculateDiscount = (price, discountPer) => {
  let discount = parseInt(price, 10) * (parseInt(discountPer) / 100);
  console.log("discount", discount);
  return parseInt(price, 10) - discount;
};

const mainControllers = {
  index: (req, res) => {
    db.Product.findAll({
      include: [{ association: "categoria" }],
    }).then((products) => {
      let newCourses = products.filter((product) => product.nuevo === true);
      let inSale = products.filter((product) => product.destacado === true);
      res.render("index", {
        newCourses,
        inSale,
        calculateDiscount,
      });
    });
  },
};

/*   console.log("products", products);

    // console.log(req.cookies.userEmail);
    //console.log("desde el home", req.session);
    let newCourses = products.filter((product) => product.nuevo === true);
    let inSale = products.filter((product) => product.destacado === true);
    res.render("index", {
      newCourses,
      inSale,
      calculateDiscount,
    });
    res.send(products);
  },
};
 */
module.exports = mainControllers;
