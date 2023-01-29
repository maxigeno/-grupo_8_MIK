const { body } = require("express-validator");

module.exports = [
  body("first_name")
    .notEmpty()
    .withMessage("ESte campo es requerido.")
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener al menos 2 caracteres."),
  body("last_name")
    .notEmpty()
    .withMessage("ESte campo es requerido.")
    .isLength({ min: 2 })
    .withMessage("El apellido debe tener al menos 2 caracteres."),
  body("email")
    .notEmpty()
    .withMessage("ESte campo es requerido.")
    .isEmail()
    .withMessage("Debes ingresar un email válido."),
  body("password")
    .notEmpty()
    .withMessage("ESte campo es requerido.")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres.")
    .isAlphanumeric()
    .withMessage("La contraseña debe contener letras y números."),
  body("confirmPassword")
    .notEmpty()
    .withMessage("ESte campo es requerido.")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Las contraseñas no coinciden");
      }
      return true;
    }),
  // .withMessage("Las contraseñas no coinciden"),
];
