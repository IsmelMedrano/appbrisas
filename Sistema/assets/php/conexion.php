<?php

$serverName = "localhost";
$userName = "root";
$password = "";
$dataBaseName = "brisas_control";

$conexion = mysqli_connect($serverName, $userName, $password, $dataBaseName);


// // Verificar si hay un error en la conexión
// if (mysqli_connect_error()) {
//     die("Error de conexión: " . mysqli_connect_error());
// } else {
//     echo "Conexión exitosa"; // Opcional, muestra un mensaje si la conexión es exitosa
// }
