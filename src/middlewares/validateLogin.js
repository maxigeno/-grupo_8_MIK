const { body } = require("express-validator");

module.exports = [
  body("email")
    .notEmpty()
    .withMessage("Este campo es requerido.")
    .isEmail()
    .withMessage("Debes ingresar un email válido."),

  body("password")
    .notEmpty()
    .withMessage("Este campo es requerido.")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres.")
    .isAlphanumeric()
    .withMessage("La contraseña debe contener letras y números."),

  // .withMessage("Las contraseñas no coinciden"),
];
