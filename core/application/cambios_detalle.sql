-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-08-2016 a las 05:05:07
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `vibrados_web`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cambios_detalle`
--

CREATE TABLE IF NOT EXISTS `cambios_detalle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_cambio` int(11) NOT NULL,
  `id_entrada` int(11) NOT NULL,
  `cantidad_entrada` decimal(10,3) NOT NULL,
  `val_entrada` decimal(10,3) NOT NULL,
  `id_salida` int(11) NOT NULL,
  `cantidad_salida` decimal(10,3) NOT NULL,
  `val_salida` decimal(10,3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
