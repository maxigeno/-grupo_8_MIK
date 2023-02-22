
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
  `descripcion_corta` varchar(125),
  `precio` decimal (10,2) NOT NULL DEFAULT '0.00',
  `imagen` varchar(255) NOT NULL,
  `nuevo` tinyint NOT NULL DEFAULT '0',
  `destacado` tinyint NOT NULL DEFAULT '0',
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
('cocina'),
('educación');


/* insert  productos */
INSERT INTO `productos` ( `nombre`, `descripcion`, `descripcion_corta`, `precio`, `imagen`, `nuevo`, `destacado`, `porcentaje_descuento`, `categoria_id`) VALUES

( 'Natación | NIÑOS', '¿Quieres que tu hijo aprenda a nadar? En MIK acompañamos este proceso por medio de los diferentes niveles que te ofrecemos en este curso donde tu hijo podrá familiarizarse con el agua, adquiriendo habilidades básicas que se perfeccionaran a medida que supere cada nivel y con las que finalmente logrará realizar movimientos técnicos de natación.', '' , 9970, 'yoga.webp', 1, 0,  0, 1),
( 'Yoga | GENERAL', '¿Quieres que tu hijo aprenda a nadar? En MIK acompañamos este proceso por medio de los diferentes niveles que te ofrecemos en este curso donde tu hijo podrá familiarizarse con el agua, adquiriendo habilidades básicas que se perfeccionaran a medida que supere cada nivel y con las que finalmente logrará realizar movimientos técnicos de natación.', '' , 9970, 'natacion.webp', 1, 0,  0, 1),
( 'Violin | GENERAL', '¿Quieres que tu hijo aprenda a nadar? En MIK acompañamos este proceso por medio de los diferentes niveles que te ofrecemos en este curso donde tu hijo podrá familiarizarse con el agua, adquiriendo habilidades básicas que se perfeccionaran a medida que supere cada nivel y con las que finalmente logrará realizar movimientos técnicos de natación.', '' , 9970, 'musica.webp', 1, 0,  0, 1),
( 'Stand-up | ADULTOS', '¿Quieres que tu hijo aprenda a nadar? En MIK acompañamos este proceso por medio de los diferentes niveles que te ofrecemos en este curso donde tu hijo podrá familiarizarse con el agua, adquiriendo habilidades básicas que se perfeccionaran a medida que supere cada nivel y con las que finalmente logrará realizar movimientos técnicos de natación.', '' , 9970, 'stand-up.webp', 1, 0,  0, 1),
/* DESTACADOS */
( 'Voleibol | ADULTOS', '¿Estas interesado en mejorar tus capacidades físicas? En este curso tendras la oportunidad de ejercitar piernas y gluteos, conservando el tono musular y mejorar la coordinación, fuerza, resistencia, flexibilidad, equilibrio, además encontrarás un espacio amigable para que mejores en este deporte cada dia de la mano de nuestros profesionales que te acompañaran en cada parte del proceso. Este curso va dirigido para jovenes de 11 años en adelante y cuenta con cuatro sesiones de 1 hora y media cada una.', '' , 6770, 'voleibal.webp', 0, 1,  40, 1),
( 'Reposteria | Familia', '¡Llegó el plan familiar que estabas buscando! Conviertete junto con un familia en chef por dos horas cada semana y diviértete preparando un postre delicioso con diferentes tecnicas para que disfruten un momento increible en familia. Esta clase cuenta con 3 sesiones de 2 horas cada una y esta dirigida a todo el grupo familiar que quiera venir y divertirse.', '' , 10770, 'cocina.webp', 0, 1,  30, 4),
( 'Guitarra | GENERAL', 'Si te gusta tocar guitarra, compra nuestro curso e inicia tu aprendizaje en este instrumento musical. Aprenderás técnicas básicas como esclas, acorders, ritmos, gramática musical, entre otros para que logres interpretar tus primeras canciones. ¡Incríbete ahora!', '' , 14000, 'guitarra.webp', 0, 1,  20, 2),
( 'Programación | NIÑOS', '¿Te gusta jugar futbol? Mejora tus habilidades y aprende sobre las tecnicas en este deporte inscribiendote a nuestro curso de futbol dirigido a niños con el objetivo de acompañarte en todo el proceso de crecimiento dentro de este deporte. Aprenderas diferentes tecnicas y mejoraras tus habilidades de la mano de nuestros profesionales.', '' , 6800, 'programacion.webp', 0, 1,  50, 1);



/* insert usuario */
INSERT INTO `usuarios` ( `nombre`, `apellido`, `email`, `password`, `rol`) VALUES
( 'maximiliano', 'genolet', 'maxistafe008@gmail.com', '12345678a', 'admin');

/* insert  pedido_detalle */
INSERT INTO `pedido_detalle` ( `cantidad`, `producto_id`, `usuario_id`, `fecha`, `estado`) VALUES
( 1, 1, 1, '2022-02-01 00:00:00', 'pendiente');









-- Path: sql_curso.sql









