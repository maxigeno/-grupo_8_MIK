const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/usersControllers");

router.get("/login", usersControllers.login);
router.get("/register", usersControllers.register);
router.get("/cart", usersControllers.cart);

module.exports = router;
