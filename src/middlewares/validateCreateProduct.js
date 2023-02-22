const { body } = require("express-validator");

module.exports = [
  body("name")
    .notEmpty()
    .withMessage("ESte campo es requerido.")
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener al menos 2 caracteres."),
  body("description")
    .notEmpty()
    .withMessage("ESte campo es requerido.")
    .isLength({ min: 20 })
    .withMessage("La descripción debe tener al menos 20 caracteres."),
  body("price")
    .notEmpty()
    .withMessage("ESte campo es requerido.")
    .isInt({ min: 1 })
    .withMessage("El precio debe ser mayor a 0."),
  body("discount")
    .notEmpty()
    .withMessage("ESte campo es requerido.")
    .isInt({ min: 0, max: 100 })
    .withMessage("El descuento debe ser entre 0 y 100."),
];
