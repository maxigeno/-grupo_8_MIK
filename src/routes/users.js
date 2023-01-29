const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");

// ************ Requiero middleware custom ************
const validateRegister = require("../middlewares/validateRegister");
const validateLogin = require("../middlewares/validateLogin");
const guestMiddleware = require("../middlewares/guestMiddleware");

// ************ Requiero el controlador ************
const usersControllers = require("../controllers/usersControllers");

// ************ multer ************
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, "../../public/img/users"));
  },
  filename(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage });

//Form Ligin
router.get("/login", guestMiddleware, usersControllers.login);
//Procesar Login
router.post("/login", validateLogin, usersControllers.procesLogin);

//Form Register
router.get("/register", guestMiddleware, usersControllers.register);
//Procesar Register
router.post(
  "/",
  upload.single("image"),
  validateRegister,
  usersControllers.newUSer
);
/* 
router.get("/cart", usersControllers.cart); */

module.exports = router;
