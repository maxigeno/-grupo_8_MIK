const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// ************ Requiero el controlador ************
const productsController = require("../controllers/productsController");

// ************ Requiero middleware custom ************
const validateCreateProduct = require("../middlewares/validateCreateProduct");
//const validateLogin = require("../middlewares/validateLogin");

// ************ multer ************
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, "../../public/img"));
  },
  filename(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

//*********GET PRODUCTS INDEX*********** */
router.get("/", productsController.products);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsController.create);
router.post(
  "/",
  upload.single("image"),
  validateCreateProduct,
  productsController.store
);

/*** GET ONE PRODUCT ***/
router.get("/:id/", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:id", productsController.edit);
router.patch(
  "/edit/:id",
  upload.single("image"),
  validateCreateProduct,
  productsController.update
);

/*** DELETE ONE PRODUCT***/
router.delete("/delete/:id", productsController.destroy);

module.exports = router;
