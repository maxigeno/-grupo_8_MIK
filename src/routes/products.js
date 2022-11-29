const express = require("express");
const router = express.Router();
const multer = require('multer');

const productsController = require("../controllers/productsController");

router.get("/index", productsController.index);
router.get("/create", productsController.create);
router.post("/", productsController.store);
router.get("/edit/:id", productsController.edit);
router.patch("/edit/:id", productsController.update);
router.delete("/delete/:id", productsController.destroy);

router.get("/:id/", productsController.detail);

module.exports = router;
