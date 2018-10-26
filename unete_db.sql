-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 10, 2018 at 01:37 AM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `unete_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `compras_premios`
--

CREATE TABLE IF NOT EXISTS `compras_premios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) NOT NULL,
  `creado_en` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=14 ;

--
-- Dumping data for table `compras_premios`
--

INSERT INTO `compras_premios` (`id`, `usuario_id`, `creado_en`) VALUES
(1, 1, '2018-09-08 22:57:28'),
(2, 1, '2018-09-08 22:57:34'),
(3, 1, '2018-09-08 23:31:57'),
(4, 1, '2018-09-08 23:32:01'),
(5, 1, '2018-09-08 23:34:01'),
(6, 1, '2018-09-08 23:34:08'),
(7, 1, '2018-09-08 23:35:21'),
(8, 1, '2018-09-09 18:30:20'),
(9, 1, '2018-09-09 22:42:43'),
(10, 1, '2018-09-09 22:42:47'),
(11, 1, '2018-09-09 22:44:38'),
(12, 1, '2018-09-09 23:02:03'),
(13, 1, '2018-09-09 23:32:28');

-- --------------------------------------------------------

--
-- Table structure for table `compras_premios_detalles`
--

CREATE TABLE IF NOT EXISTS `compras_premios_detalles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orden_id` int(11) NOT NULL,
  `premio_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=16 ;

--
-- Dumping data for table `compras_premios_detalles`
--

INSERT INTO `compras_premios_detalles` (`id`, `orden_id`, `premio_id`) VALUES
(9, 7, 2),
(10, 8, 1),
(11, 9, 2),
(12, 10, 1),
(13, 11, 2),
(14, 12, 2),
(15, 13, 2);

-- --------------------------------------------------------

--
-- Table structure for table ` eventos`
--

CREATE TABLE IF NOT EXISTS ` eventos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `NombreEvento` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `DescripcionEvento` text COLLATE utf8_spanish_ci NOT NULL,
  `DiaInicio` date NOT NULL,
  `NombreOrganizador` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `DiaFinalizacion` date NOT NULL,
  `idOrganizador` int(11) NOT NULL,
  `Direccion` varchar(350) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table ` eventos`
--

INSERT INTO ` eventos` (`id`, `NombreEvento`, `DescripcionEvento`, `DiaInicio`, `NombreOrganizador`, `DiaFinalizacion`, `idOrganizador`, `Direccion`) VALUES
(1, 'Caminatas', 'caminatas muy chimbitas', '2018-07-17', 'Tienda de don pablo', '2018-07-23', 7, ''),
(2, 'cafe por candelaria', 'fhduiosafhdjklsñhfuiod whfjdcbsaugi bhj muy chimba', '2018-07-11', 'CafeSpreso', '2018-08-24', 4, ''),
(3, 'cuenteros', 'cuenteros chimbitas', '2018-07-04', 'Alcaldia', '2018-07-23', 1, ''),
(4, 'Salsa En la noche', 'Gran fiesta en la interperie con musica salsa en vivo, Con la presentacion estelar de Maelo Ruiz', '2018-08-16', 'Alcaldia', '2018-08-23', 1, ''),
(5, 'Presentacion Jovenes Artistas', 'Dia de creacion de murales decorativos para la demostracion de jovenes artistas del genero urbano', '2018-08-08', 'Un Granito mas', '2018-08-08', 5, ''),
(6, 'Skate', 'Gran grupo de skaters se presentará en aguas para poder demostrar habilidades únicas que han aprendido en la academia profesional de skate', '2018-08-17', 'Academia nacional de skate', '2018-08-17', 3, ''),
(7, 'Carrera por la paz', 'Carrera internacional de 10k por el centro de la cuidad que comenzará en el palacio de justicia, para todos los que creen en la paz y la defienden paso a paso', '2018-08-10', 'Alcaldia de bogota', '2018-08-10', 2, ''),
(8, 'oratoria ', 'Un orador mexicano nos deleitara con su filosofía  minimalista con una oratoria, se presentará unicamente 3 dias en el cafe bar El buen cafe', '2018-08-07', 'El buen café ', '2018-08-10', 6, ''),
(9, 'Conoce la historia de colombia ', 'Para todo turista que se interese en conocer la historia de este hermoso país, la alcaldía abre un espacio dedicado al teatro y la cuenteria que resumirá la historia colombiana', '2018-08-08', 'Alcaldia de bogota', '2018-08-16', 2, ''),
(10, 'Concierto gratis ', 'Es mucho muy gratis', '2018-08-01', 'Alcaldia', '2018-08-01', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `eventos_guardados`
--

CREATE TABLE IF NOT EXISTS `eventos_guardados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `FechaGuardado` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `idEvento` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `correo` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `contrasena` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `token` varchar(40) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `correo`, `contrasena`, `token`) VALUES
(1, 'santiago@hotmail.com', '123456', 'ff5c168710ceb17392d003dc79f1e38afb4ba68b'),
(2, 'juan@hotmail.com', '123456', '4593d6588275deee6867cc634e5e89480b6ad449'),
(3, 'pedro@hotmail.com', '123456', 'ef4d4bd72e87beeb62ac48b1c3fd20602f574919');

-- --------------------------------------------------------

--
-- Table structure for table `organizador`
--

CREATE TABLE IF NOT EXISTS `organizador` (
  `idOrganizador` int(11) NOT NULL,
  `NombreOrganizador` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `CantidadDeEventos` int(11) NOT NULL,
  `NumeroTelefonico` int(11) NOT NULL,
  `CorreoOrganizador` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `Estrellas` double(11,1) DEFAULT NULL,
  `DireccionNegocio` varchar(350) COLLATE utf8_spanish_ci NOT NULL,
  `NombreDueno` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`idOrganizador`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `organizador`
--

INSERT INTO `organizador` (`idOrganizador`, `NombreOrganizador`, `CantidadDeEventos`, `NumeroTelefonico`, `CorreoOrganizador`, `Estrellas`, `DireccionNegocio`, `NombreDueno`) VALUES
(1, 'Alcaldia', 3, 8754212, 'alcaldiadecandelaria@hotmail.com', 5.0, 'calle 32 A 48 02 sur', 'John Rojas'),
(2, 'Alcaldia de bogota', 1, 2543521, 'alcaldiamayordebogota@alcaldia.gov', 4.9, 'calle 19 n 45 30 sur', 'Marta Lopez'),
(3, 'Academia nacional de skate', 1, 1265434, 'skateacademy@outlook.com', 4.0, 'calle 25 b 65 56', 'Carlos Villa'),
(4, 'CafeSpreso', 1, 64132, 'CafeSpreso@hotmail.com', 3.0, 'calle 12 a 5623', 'Leonardo Ramirez'),
(5, 'un granito mas', 1, 1425434, 'Granito@gmail.com', 3.0, 'avenida 7 con tercera ', 'Juan Romero'),
(6, 'El buen café', 1, 87964524, 'Cafesito@hotmail.com', 4.0, 'avenida 5 b 15 6', 'Julian Acosta'),
(7, 'Tienda de don pablo', 1, 4564232, 'tiendita@hotmail.com', 4.1, 'carrera 7 n 19 56', 'Pablo Vargas');

-- --------------------------------------------------------

--
-- Table structure for table `premios`
--

CREATE TABLE IF NOT EXISTS `premios` (
  `Nombre_premio` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `id_Premio` int(11) NOT NULL AUTO_INCREMENT,
  `Descripcion_premio` text COLLATE utf8_spanish_ci NOT NULL,
  `Tipo` int(11) NOT NULL,
  `Puntos_Reclamo_Premio` int(11) NOT NULL,
  `Estado` int(11) NOT NULL,
  `Lugar_recogida` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  `Nombre_patrocinador` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  `Cantidad_disponible` int(11) NOT NULL,
  `Feche_de _vencimiento` datetime NOT NULL,
  PRIMARY KEY (`id_Premio`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `premios`
--

INSERT INTO `premios` (`Nombre_premio`, `id_Premio`, `Descripcion_premio`, `Tipo`, `Puntos_Reclamo_Premio`, `Estado`, `Lugar_recogida`, `Nombre_patrocinador`, `Cantidad_disponible`, `Feche_de _vencimiento`) VALUES
('Boletas dobles a cine', 1, 'Boletas de cinecolombia para cualquier película seleccionada', 1, 200, 1, 'Centro Comercial Titan', 'Cine Colombia', 20, '2018-09-21 12:00:00'),
('Postre de 3 leches', 2, 'Postre en la panaderia de la esquina ', 1, 50, 1, 'calle 12 56 89 sur', 'Donde el paisa', 20, '2018-09-14 20:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
