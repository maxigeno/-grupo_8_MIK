const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// ************ Requiero el controlador ************
const usersControllers = require("../controllers/usersControllers");

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

router.get("/login", usersControllers.login);
/*** CREATE USER ***/
router.get("/register", usersControllers.register);

router.post("/", upload.single("image"), usersControllers.newUSer);
/* 
router.get("/cart", usersControllers.cart); */

module.exports = router;
