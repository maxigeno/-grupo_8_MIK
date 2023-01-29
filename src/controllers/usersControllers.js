const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

//const usersFilePath = path.join(__dirname, "../data/usersDataBase.json");
//const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const USer = require("../models/User");

const usersControllers = {
  login: (req, res) => {
    res.render("./users/login", { msg: "" });
  },
  register: (req, res) => {
    res.render("./users/register");
  },
  newUSer: (req, res) => {
    let errors = validationResult(req);
    //si array errors esta vacio, no hay errores,
    if (errors.isEmpty()) {
      console.log("no hay errores");
      let image;
      if (req.file != undefined) {
        image = req.file.filename;
      } else {
        image = "default-image.png";
      }
      let newUser = {
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 10),
        image,
      };
      USer.create(newUser);
      res.redirect("users/login");
      //si hay errores, renderizo el form con los errores y los datos que ya habia ingresado el usuario
    } else {
      res.render("users/register", {
        errors: errors.array(),
        old: req.body,
      });
    }
  },
  procesLogin: (req, res) => {
    console.log(req.body.email);
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == req.body.email) {
        if (bcrypt.compareSync(req.body.password, users[i].password)) {
          var usuarioALogearse = users[i];
        }
      }
    }

    if (usuarioALogearse == undefined) {
      return res.render("login", { msg: "Usuario o contraseña incorrectos" }); //, {msg: "Usuario o contraseña incorrectos"
    } else {
      req.session.userLogged = usuarioALogearse;
      console.log(req.session);

      return res.render("index", {
        user: req.session.userLogged,
      });
    }
  },
};

module.exports = usersControllers;
