
CREATE DATABASE IF NOT EXISTS mik_db;

USE mik_db;

CREATE TABLE IF NOT EXISTS `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE IF NOT EXISTS `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `descripcion_corta` varchar(125) NOT NULL,
  `precio` decimal(10,2) NOT  NULL DEFAULT '0.00',
  `imagen` varchar(255) NOT NULL,
  `nuevo` tinyint NOT NULL DEFAULT '0',
  `destacado` tinyint NOT NULL DEFAULT '0',
  `descuento` tinyint NOT NULL DEFAULT '0',
  `porcentaje_descuento` int NOT NULL DEFAULT '0',
  `categoria_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoria_id` (`categoria_id`),
  CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255),
  `rol` enum('admin','user')  DEFAULT 'user',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE IF NOT EXISTS `pedido_detalle` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cantidad` int NOT NULL,
  `producto_id` int NOT NULL,
  `usuario_id` int NOT NULL,
  `fecha` datetime NOT NULL,
  `estado` enum('pendiente','finaliado') NOT NULL DEFAULT 'pendiente',
  PRIMARY KEY (`id`),
  KEY `producto_id` (`producto_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `pedido_detalle_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;


/* insert categorias */
INSERT INTO `categorias` (`nombre`) VALUES
('deportes'),
('arte'),
('reacreación'),
('educación');


/* insert  productos */
INSERT INTO `productos` ( `nombre`, `descripcion`, `descripcion_corta`, `precio`, `imagen`, `nuevo`, `destacado`, `descuento`, `porcentaje_descuento`, `categoria_id`) VALUES
( 'curso de yoga', 'ayudara a los niños apoder encontrar...', 'curso de yoga para miños' , 4500.00, 'camisa.jpg', 1, 0, 1, 10, 1);

/* insert usuario */
INSERT INTO `usuarios` ( `nombre`, `apellido`, `email`, `password`, `rol`) VALUES
( 'maximiliano', 'genolet', 'maxistafe008@gmail.com', '12345678a', 'admin');

/* insert  pedido_detalle */
INSERT INTO `pedido_detalle` ( `cantidad`, `producto_id`, `usuario_id`, `fecha`, `estado`) VALUES
( 1, 1, 1, '2022-02-01 00:00:00', 'pendiente');









-- Path: sql_curso.sql









