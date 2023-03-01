
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

( 'Natación | NIÑOS', '¿Quieres que tu hijo aprenda a nadar? En MIK acompañamos este proceso por medio de los diferentes niveles que te ofrecemos en este curso donde tu hijo podrá familiarizarse con el agua, adquiriendo habilidades básicas que se perfeccionaran a medida que supere cada nivel y con las que finalmente logrará realizar movimientos técnicos de natación.', '' , 9970, 'natacion.webp', 1, 0,  0, 1),
( 'Yoga | GENERAL', 'En este curso de Yoga dominaras al conjunto de disciplinas y prácticas de tipo físico, mental y espiritual, cuyo objetivo es lograr el equilibrio entre el cuerpo y mente para alcanzar la iluminación y la trascendencia', '' , 9970, 'yoga.webp', 1, 0,  0, 1),
( 'Violin | GENERAL', '¿Queres que tu hijo aprenda violin de manera rapida y dinamica? Este curso da las mejores clases para poder aprender el violin sin frustracion tomando en cuenta la practica diaria y los horarios de la persona disponible.', '' , 9970, 'musica.webp', 1, 0,  0, 2),
( 'Stand-up | ADULTOS', 'Crea tu monologo y diviertete con la gente, el STAND-UP es una muy buena manera de poder perder la verguenza al frente de mucha gente y es mas al ver que se rien de vos con tus chistes sera mas facil, de verdad, no tenes nada que perder, proba este gran curso el cual te va a enseñar a disfrutar del STAND-UP', '' , 9970, 'stand-up.webp', 1, 0,  0, 1),
( 'Ajedrez | ADULTOS', 'Lo escuchaste, te gusto, queres intentar pero no sabes como leer una partitura? No hay drama! Aca en este curso te mostraremos como tocar el piano, leer las partituras y poder disfurtar tocar de este gran instrumento', '' , 9970, 'producto-sin-foto.webp', 1, 0,  0, 1),
( 'Piano | GENERAL', 'Aprende a tocar piano y leer partitura de manera facil y sencilla! Este curso te provee todo tipo de conocimientos', '' , 7870, 'producto-sin-foto.webp', 1, 0,  0, 1),
/* DESTACADOS */
( 'Voleibol | ADULTOS', '¿Estas interesado en mejorar tus capacidades físicas? En este curso tendras la oportunidad de ejercitar piernas y gluteos y divertite en super deporte', '' , 6770, 'voleibal.webp', 0, 1,  40, 1),
( 'Reposteria | Familia', '¡Llegó el plan familiar que estabas buscando! Conviertete junto con un familia en chef por dos horas cada semana y diviértete preparando un postre delicioso con diferentes tecnicas para que disfruten un momento increible en familia. Esta clase cuenta con 3 sesiones de 2 horas cada una y esta dirigida a todo el grupo familiar que quiera venir y divertirse.', '' , 10770, 'cocina.webp', 0, 1,  30, 4),
( 'Guitarra | GENERAL', 'Si te gusta tocar guitarra, compra nuestro curso e inicia tu aprendizaje en este instrumento musical. Aprenderás técnicas básicas como esclas, acorders, ritmos, gramática musical, entre otros para que logres interpretar tus primeras canciones. ¡Incríbete ahora!', '' , 14000, 'guitarra.webp', 0, 1,  20, 2),
( 'Programación | NIÑOS', '¿Te gusta jugar futbol? Mejora tus habilidades y aprende sobre las tecnicas en este deporte inscribiendote a nuestro curso de futbol dirigido a niños con el objetivo de acompañarte en todo el proceso de crecimiento dentro de este deporte. Aprenderas diferentes tecnicas y mejoraras tus habilidades de la mano de nuestros profesionales.', '' , 6800, 'programacion.webp', 0, 1,  50, 1),
('Idiomas | GENERAL', '¡Es momento de aprender idiomas, de abrir tu conocimiento en nuevas lenguas y poder ir a cualquier pais y poder hablar con tranquilidad! Tenemos todo tipo de niveles! Principiantes, Intermedio, Experimentado', '', 10700, 'producto-sin-foto.webp', 0, 1, 45, 1),
('Tenis | NIÑOS', 'Es momento que tu hijo/a aprenda un gran deporte como el tenis, donde se practica y se entrena con mucha responsabilidad.', '', 8522, 'producto-sin-foto.webp', 0, 1, 25, 1);

/* VARIADOS*/
( 'Locución | ADULTOS', 'Aqui te podes desenvolver de la mejor manera, en este curso, ¿Con qué? Con la Locucion, aprende a relatar, hablar y poder trasnmitir a travez de tu voz.', '' , 6678, 'producto-sin-foto.webp', 0, 0,  0, 1),
( 'Manualidades | GENERAL', '¿Queres aprender a hacer pulseras, tobilleras, collares, aritos y muchas otras manualidades? Aqui te enseñaremos como hacerlo sin comprar materiales caros y con bajo presupuesto.', '' , 4570, 'prudcto-sin-foto.webp', 0, 0,  0, 1),
( 'MECANICA | GENERAL', '¿Eres de aquellos que quieren aprender a como arreglar un auto pero no saben como porque nunca supieron de mecanica? Este curso te eneseña TODO lo basico y mucho mas! Aprende y estaras mas tranquilo si algo pasa con tu auto porque sabras que hacer', '' , 1970, 'producto-sin-foto.webp', 0, 0,  0, 1),
( 'ATLETISMO | NIÑOS', 'Tu hijo le gusta correr, no sabes como pararlo, NO LO HAGAS! Muestrale estos videos de este curo el cual le enseñera tecnicas divertidas para empezar el atletismo de una manera dinamica y diferente.', '' , 9970, 'producto-sin-foto.webp', 0, 0,  0, 1);




/* insert usuario */
INSERT INTO `usuarios` ( `nombre`, `apellido`, `email`, `password`, `rol`) VALUES
( 'maximiliano', 'genolet', 'maxistafe008@gmail.com', '12345678a', 'admin');

/* insert  pedido_detalle */
INSERT INTO `pedido_detalle` ( `cantidad`, `producto_id`, `usuario_id`, `fecha`, `estado`) VALUES
( 1, 1, 1, '2022-02-01 00:00:00', 'pendiente');









-- Path: sql_curso.sql









