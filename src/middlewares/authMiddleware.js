const authMiddleware = () => {
  return (req, res, next) => {
    //si hay un usuario logueado, lo paso al siguiente middleware
    if (req.session.user) {
      next();
    } else {
      //si no hay usuario logueado, redirijo al login
      res.redirect("/login");
    }
  };
};

module.exports = authMiddleware;
