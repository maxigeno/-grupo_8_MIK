// Middleware para redireccionar a la home si el usuario ya está logueado
const  guestMiddleware = (req, res, next) => {
  if (req.session.userLogged) {
    return res.redirect("/");
  }
  next();
}

module.exports = guestMiddleware;
