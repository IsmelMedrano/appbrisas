-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2023 a las 20:00:32
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `brisas_control`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `atencion`
--

CREATE TABLE `atencion` (
  `atencion_id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `habitacion_id` int(11) DEFAULT NULL,
  `dia` date NOT NULL,
  `hora` time NOT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitaciones`
--

CREATE TABLE `habitaciones` (
  `numero` int(11) NOT NULL,
  `estado` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `habitaciones`
--

INSERT INTO `habitaciones` (`numero`, `estado`) VALUES
(139, 'disponible'),
(140, 'disponible'),
(201, 'disponible'),
(202, 'disponible'),
(203, 'disponible'),
(204, 'disponible'),
(205, 'disponible'),
(206, 'disponible'),
(207, 'disponible'),
(208, 'disponible'),
(209, 'disponible'),
(210, 'disponible'),
(211, 'disponible'),
(212, 'disponible'),
(214, 'disponible'),
(215, 'disponible'),
(218, 'disponible'),
(219, 'disponible'),
(221, 'disponible'),
(222, 'disponible'),
(223, 'disponible'),
(224, 'disponible'),
(225, 'disponible'),
(226, 'disponible'),
(227, 'disponible'),
(228, 'disponible'),
(229, 'disponible'),
(230, 'disponible'),
(231, 'disponible'),
(232, 'disponible'),
(233, 'disponible'),
(234, 'disponible'),
(235, 'disponible'),
(236, 'disponible'),
(237, 'disponible'),
(238, 'disponible'),
(239, 'disponible'),
(240, 'disponible'),
(241, 'disponible'),
(242, 'disponible'),
(243, 'disponible'),
(244, 'disponible'),
(245, 'disponible'),
(246, 'disponible'),
(247, 'disponible'),
(248, 'disponible'),
(249, 'disponible'),
(250, 'disponible'),
(251, 'disponible'),
(252, 'disponible'),
(253, 'disponible'),
(254, 'disponible'),
(255, 'disponible'),
(256, 'disponible'),
(257, 'disponible'),
(258, 'disponible'),
(259, 'disponible'),
(260, 'disponible'),
(261, 'disponible'),
(262, 'disponible'),
(263, 'disponible'),
(264, 'disponible'),
(265, 'disponible'),
(266, 'disponible'),
(267, 'disponible'),
(268, 'disponible'),
(269, 'disponible'),
(270, 'disponible'),
(271, 'disponible'),
(272, 'disponible'),
(273, 'disponible'),
(274, 'disponible'),
(275, 'disponible'),
(276, 'disponible'),
(294, 'disponible'),
(295, 'disponible'),
(301, 'disponible'),
(302, 'disponible'),
(303, 'disponible'),
(304, 'disponible'),
(305, 'disponible'),
(306, 'disponible'),
(307, 'disponible'),
(308, 'disponible'),
(309, 'disponible'),
(310, 'disponible'),
(311, 'disponible'),
(312, 'disponible'),
(314, 'disponible'),
(315, 'disponible'),
(316, 'disponible'),
(317, 'disponible'),
(318, 'disponible'),
(319, 'disponible'),
(320, 'disponible'),
(321, 'disponible'),
(322, 'disponible'),
(323, 'disponible'),
(324, 'disponible'),
(325, 'disponible'),
(326, 'disponible'),
(327, 'disponible'),
(328, 'disponible'),
(330, 'disponible'),
(331, 'disponible'),
(332, 'disponible'),
(333, 'disponible'),
(335, 'disponible'),
(336, 'disponible'),
(337, 'disponible'),
(338, 'disponible'),
(339, 'disponible'),
(340, 'disponible'),
(341, 'disponible'),
(342, 'disponible'),
(343, 'disponible'),
(344, 'disponible'),
(345, 'disponible'),
(346, 'disponible'),
(347, 'disponible'),
(348, 'disponible'),
(349, 'disponible'),
(350, 'disponible'),
(351, 'disponible'),
(352, 'disponible'),
(353, 'disponible'),
(354, 'disponible'),
(355, 'disponible'),
(356, 'disponible'),
(357, 'disponible'),
(358, 'disponible'),
(359, 'disponible'),
(360, 'disponible'),
(361, 'disponible'),
(362, 'disponible'),
(363, 'disponible'),
(366, 'disponible'),
(367, 'disponible'),
(368, 'disponible'),
(369, 'disponible'),
(370, 'disponible'),
(371, 'disponible'),
(372, 'disponible'),
(373, 'disponible'),
(374, 'disponible'),
(375, 'disponible'),
(376, 'disponible'),
(377, 'disponible'),
(378, 'disponible'),
(379, 'disponible'),
(381, 'disponible'),
(382, 'disponible'),
(383, 'disponible'),
(384, 'disponible'),
(385, 'disponible'),
(386, 'disponible'),
(401, 'disponible'),
(402, 'disponible'),
(403, 'disponible'),
(404, 'disponible'),
(405, 'disponible'),
(406, 'disponible'),
(407, 'disponible'),
(408, 'disponible'),
(409, 'disponible'),
(410, 'disponible'),
(411, 'disponible'),
(412, 'disponible'),
(414, 'disponible'),
(415, 'disponible'),
(416, 'disponible'),
(417, 'disponible'),
(418, 'disponible'),
(419, 'disponible'),
(420, 'disponible'),
(421, 'disponible'),
(422, 'disponible'),
(423, 'disponible'),
(424, 'disponible'),
(425, 'disponible'),
(426, 'disponible'),
(427, 'disponible'),
(428, 'disponible'),
(429, 'disponible'),
(430, 'disponible'),
(431, 'disponible'),
(432, 'disponible'),
(433, 'disponible'),
(434, 'disponible'),
(435, 'disponible'),
(436, 'disponible'),
(437, 'disponible'),
(438, 'disponible'),
(439, 'disponible'),
(440, 'disponible'),
(442, 'disponible'),
(443, 'disponible'),
(444, 'disponible'),
(445, 'disponible'),
(446, 'disponible'),
(447, 'disponible'),
(448, 'disponible'),
(449, 'disponible'),
(450, 'disponible'),
(451, 'disponible'),
(452, 'disponible'),
(453, 'disponible'),
(454, 'disponible'),
(455, 'disponible'),
(456, 'disponible'),
(457, 'disponible'),
(458, 'disponible'),
(459, 'disponible'),
(460, 'disponible'),
(461, 'disponible'),
(462, 'disponible'),
(463, 'disponible'),
(464, 'disponible'),
(465, 'disponible'),
(466, 'disponible'),
(467, 'disponible'),
(468, 'disponible'),
(469, 'disponible'),
(470, 'disponible'),
(471, 'disponible'),
(472, 'disponible'),
(473, 'disponible'),
(474, 'disponible'),
(475, 'disponible'),
(476, 'disponible'),
(477, 'disponible'),
(478, 'disponible'),
(479, 'disponible'),
(501, 'disponible'),
(502, 'disponible'),
(503, 'disponible'),
(504, 'disponible'),
(505, 'disponible'),
(506, 'disponible'),
(507, 'disponible'),
(508, 'disponible'),
(509, 'disponible'),
(510, 'disponible'),
(511, 'disponible'),
(512, 'disponible'),
(514, 'disponible'),
(515, 'disponible'),
(516, 'disponible'),
(517, 'disponible'),
(518, 'disponible'),
(519, 'disponible'),
(520, 'disponible'),
(521, 'disponible'),
(522, 'disponible'),
(523, 'disponible'),
(524, 'disponible');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `pedido_id` int(11) NOT NULL,
  `habitacion_id` int(11) DEFAULT NULL,
  `nombre` varchar(30) NOT NULL,
  `dia` date NOT NULL,
  `hora` time NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `folio` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(20) NOT NULL,
  `user` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `user`, `password`) VALUES
(1, 'capitan', '123456'),
(2, 'administrador', '123456');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `atencion`
--
ALTER TABLE `atencion`
  ADD PRIMARY KEY (`atencion_id`),
  ADD KEY `habitacion_id` (`habitacion_id`);

--
-- Indices de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD PRIMARY KEY (`numero`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`pedido_id`),
  ADD KEY `habitacion_id` (`habitacion_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `atencion`
--
ALTER TABLE `atencion`
  MODIFY `atencion_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `pedido_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `atencion`
--
ALTER TABLE `atencion`
  ADD CONSTRAINT `atencion_ibfk_1` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`numero`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`numero`);

DELIMITER $$
--
-- Eventos
--
CREATE DEFINER=`root`@`localhost` EVENT `ActualizarEstadoHabitaciones` ON SCHEDULE EVERY 1 MINUTE STARTS '2023-10-20 19:12:10' ON COMPLETION NOT PRESERVE ENABLE DO BEGIN
  -- Obtener la hora actual
  SET @hora_actual = NOW();

  -- Restar 90 minutos
  SET @hora_anterior = DATE_SUB(@hora_actual, INTERVAL 1 MINUTE);  -- Cambia 2 MINUTE a 90 MINUTE

  -- Actualizar el estado de las habitaciones
  UPDATE habitaciones h  -- Cambio de "habitacion" a "habitaciones"
  SET h.estado = 'atencion-pendiente'
  WHERE h.numero IN (
    SELECT DISTINCT p.habitacion_id
    FROM pedidos p  -- Cambio de "pedido" a "pedidos"
    WHERE p.fecha <= @hora_anterior AND h.estado = 'en-servicio'
  );
END$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
