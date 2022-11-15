const express = require("express");
const router = express.Router();

const mainControllers = require("../controllers/mainControllers");

router.get("/", mainControllers.index);

/* router.get("/detalle/:id", mainControllers.detalle);
router.get('/login', mainControllers.login);
router.get('/productDetail', mainControllers.productDetail);
router.get('/register', mainControllers.register);
router.get('/productCart', mainControllers.productCart);
router.get('/productIndex', mainControllers.productIndex);
router.get("/detalle/:id", mainControllers.detalle); */

module.exports = router;
