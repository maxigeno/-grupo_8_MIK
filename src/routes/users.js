const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/usersControllers");

router.get("/login", usersControllers.login);
router.get("/register", usersControllers.register);
router.get("/cart", usersControllers.cart);

/* router.get('/productDetail', mainControllers.productDetail);
router.get('/productCart', mainControllers.productCart); */
module.exports = router;
