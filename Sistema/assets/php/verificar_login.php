<?php
session_start();

include('conexion.php'); // importamos la conexion

// Obtener las credenciales del formulario y limpiarlas
$user = mysqli_real_escape_string($conexion, $_POST['user']);
$password = mysqli_real_escape_string($conexion, $_POST['password']);

// Formular consulta
$query = "SELECT*FROM usuarios where user = '$user' and password = '$password'";

$result = mysqli_query($conexion, $query); //Realizar consulta

// la consulta devolvio resultado ?
if ($result && mysqli_num_rows($result) > 0) {

    //Obtener datos del resultado
    $row = mysqli_fetch_assoc($result);
    $usuario = $row['user'];

    //Guardar usuario en la sesion
    $_SESSION['user'] = $usuario;

    //Devolver respuesta
    $response = $usuario;
    echo $response;
} else {
    session_destroy();

    echo "error";
}


// Cerrar la conexión a la base de datos
$conexion->close();
