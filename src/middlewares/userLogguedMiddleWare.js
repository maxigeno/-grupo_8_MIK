//const USer = require("../models/User");
const db = require("./../database/models");

const userLogguedMiddleWare =  async (req, res, next) => {
  //si no hay usuario logueado, creo una variable local isLogged en false
  res.locals.isLogged = false;

  //traigo el email del cookie
  let emailInCookie = req.cookies.userEmail;


  //busco el usuario en la base de datos
  //let userInCookie = USer.findByField("email", emailInCookie);

  let userInCookie = null;
  //si la cookie no tiene valor, no busco el usuario en la base de datos
  if (emailInCookie) {
    userInCookie = await db.User.findOne({
      where: {
        email: emailInCookie,
      },
    });
  };

  //si el usuario existe
  if (userInCookie) {
    //guardo el usuario en session
    req.session.userLogged = userInCookie;
  }

  //si hay un usuario logueado, creo una variable local isLogged en true
  if (req.session.userLogged) {
    res.locals.isLogged = true;
    //guardo el usuario logueado en una variable local
    res.locals.userLogged = req.session.userLogged;
  }

  next();
}

module.exports = userLogguedMiddleWare;
