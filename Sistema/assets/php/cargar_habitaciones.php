<?php
include('conexion.php'); // importamos la conexión

try {
    $query = "SELECT numero, estado FROM habitaciones";
    $result = mysqli_query($conexion, $query);

    if ($result) {
        $results = array();

        while ($row = mysqli_fetch_assoc($result)) {
            $results[] = array(
                "numero" => $row["numero"],
                "estado" => $row["estado"]
            );
        }

        // Devuelve los resultados como JSON
        echo json_encode($results);
    } else {
        echo "Error en la consulta: " . mysqli_error($conexion);
    }

    // Cierra la conexión a la base de datos
    mysqli_close($conexion);
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
