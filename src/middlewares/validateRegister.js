const { body } = require("express-validator");

module.exports = [
  body("first_name").notEmpty().withMessage("ESte campo es requerido."),
  body("last_name").notEmpty().withMessage("ESte campo es requerido."),
  body("email").isEmail().withMessage("Debes ingresar un email válido."),
  body("password")
    .isLength({ min: 8 })
    .isAlphanumeric()
    .withMessage(
      "La contraseña debe tener al menos 8 caracteres y contener letras y números"
    ),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Las contraseñas no coinciden");
    }
    return true;
  }),
  // .withMessage("Las contraseñas no coinciden"),
];
