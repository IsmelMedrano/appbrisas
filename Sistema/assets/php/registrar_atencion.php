<?php

include('conexion.php'); // Importamos la conexión

// Obtenemos datos
$nombre = mysqli_real_escape_string($conexion, $_POST['nombre']);
$habitacion = mysqli_real_escape_string($conexion, $_POST['habitacion']);
$dia = mysqli_real_escape_string($conexion, $_POST['dia']);
$hora = mysqli_real_escape_string($conexion, $_POST['hora']);
// $folio = mysqli_real_escape_string($conexion, $_POST['folio']);

$fecha = $dia . ' ' . $hora . ":00";

// Formular la consulta para insertar el registro de atención
$queryInsertAtencion = "INSERT INTO atencion (nombre, habitacion_id, dia, hora, fecha) VALUES ('$nombre', '$habitacion', '$dia', '$hora', '$fecha')";
$responseInsertAtencion = mysqli_query($conexion, $queryInsertAtencion);

if ($responseInsertAtencion) {
    // El registro de atención se realizó con éxito, actualizamos el estado de la habitación a "disponible"
    $updateEstadoQuery = "UPDATE habitaciones SET estado = 'disponible' WHERE numero = '$habitacion'";
    $responseUpdateEstado = mysqli_query($conexion, $updateEstadoQuery);

    if ($responseUpdateEstado) {
        echo "success"; // Ambas operaciones se completaron con éxito
    } else {
        echo "error al actualizar el estado a 'disponible'";
    }
} else {
    echo "error al insertar el registro de atención";
}

// Cerramos la conexión
$conexion->close();
