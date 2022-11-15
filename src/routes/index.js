const express = require("express");
const router = express.Router();

const mainControllers = require("../controllers/mainControllers");

router.get("/", mainControllers.index);
router.get("/detalle/:id", mainControllers.detalle);

module.exports = router;
