const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/", productsController.products);
router.get("/create/", productsController.create);

router.get("/:id/", productsController.detail);

module.exports = router;
