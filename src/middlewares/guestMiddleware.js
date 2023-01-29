// Middleware para redireccionar a la home si el usuario ya está logueado
function guestMiddleware(req, res, next) {
  if (req.session.userLogged) {
    return res.redirect("/");
  }
  next();
}

module.exports = guestMiddleware;
