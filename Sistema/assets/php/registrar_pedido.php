<?php

include('conexion.php'); // Importamos la conexión

// Obtenemos datos
$nombre = mysqli_real_escape_string($conexion, $_POST['nombre']);
$habitacion = mysqli_real_escape_string($conexion, $_POST['habitacion']);
$dia = mysqli_real_escape_string($conexion, $_POST['dia']);
$hora = mysqli_real_escape_string($conexion, $_POST['hora']);
$folio = mysqli_real_escape_string($conexion, $_POST['folio']);

$fecha = $dia . ' ' . $hora . ":00";

// Iniciar una transacción
mysqli_autocommit($conexion, false);

// Formular la consulta para insertar el pedido
$queryInsertPedido = "INSERT INTO pedidos (habitacion_id, nombre, dia, hora, fecha, folio) VALUES ('$habitacion','$nombre', '$dia', '$hora','$fecha','$folio')";
$responseInsertPedido = mysqli_query($conexion, $queryInsertPedido);

if ($responseInsertPedido) {
    // La inserción del pedido fue exitosa, actualizamos el estado de la habitación a "en servicio"
    $updateEstadoQuery = "UPDATE habitaciones SET estado = 'en-servicio' WHERE numero = '$habitacion'";
    $responseUpdateEstado = mysqli_query($conexion, $updateEstadoQuery);

    if ($responseUpdateEstado) {
        // Todas las acciones se completaron con éxito
        mysqli_commit($conexion);
        echo "success";
    } else {
        // Error al actualizar el estado de la habitación a "en servicio"
        mysqli_rollback($conexion);
        echo "error al actualizar el estado a 'en-servicio'";
    }
} else {
    // Error al insertar el pedido
    echo "error al insertar el pedido";
}

// Cerramos la conexión
$conexion->close();
