<?php
include('conexion.php'); // importamos la conexión

// Obtener datos del formulario
$limite = mysqli_real_escape_string($conexion, $_POST['limite']);
$fecha_inicial = mysqli_real_escape_string($conexion, $_POST['fecha_inicial']);
$fecha_final = mysqli_real_escape_string($conexion, $_POST['fecha_final']);

// Si existe un rango de fechas
if ($fecha_inicial != '' && $fecha_final != '') {
    $queryGetPeriode = "SELECT DISTINCT h.numero AS numero_habitacion, p.fecha AS fecha_pedido, a.fecha AS fecha_atencion, p.nombre AS empleado_pedido,a.nombre AS empleado_atencion, p.folio AS folio
    FROM habitaciones h JOIN pedidos p ON h.numero = p.habitacion_id LEFT JOIN atencion a ON a.fecha = (SELECT MIN(at.fecha) FROM atencion at WHERE at.fecha >= p.fecha
    AND at.habitacion_id = h.numero ) WHERE a.fecha IS NOT NULL AND a.nombre IS NOT NULL AND p.dia >= '$fecha_inicial' AND p.dia <= '$fecha_final' ORDER BY p.fecha LIMIT $limite;";

    $responseGetPeriode = mysqli_query($conexion, $queryGetPeriode);
    if ($responseGetPeriode) {


        $results = array();

        while ($row = mysqli_fetch_assoc($responseGetPeriode)) {
            $results[] = array(
                "habitacion" => $row["numero_habitacion"],
                "fecha_pedido" => $row["fecha_pedido"],
                "fecha_atencion" => $row["fecha_atencion"],
                "responsable_pedido" => $row["empleado_pedido"],
                "responsable_atencion" => $row["empleado_atencion"],
                "folio" => $row["folio"]
            );
        }

        // Devuelve los resultados como JSON
        echo json_encode($results);
    } else {
        // echo "Error en la consulta: " . mysqli_error($conexion);
        echo "error";
    }
}


// No hay rango de fechas
else {

    $queryGetAll = "SELECT DISTINCT h.numero AS numero_habitacion, p.fecha AS fecha_pedido, a.fecha AS fecha_atencion, p.nombre AS empleado_pedido,a.nombre AS empleado_atencion, p.folio AS folio FROM habitaciones h JOIN pedidos p ON h.numero = p.habitacion_id LEFT JOIN atencion a ON a.fecha = (SELECT MIN(at.fecha) FROM atencion at WHERE at.fecha >= p.fecha
    AND at.habitacion_id = h.numero ) WHERE a.fecha IS NOT NULL AND a.nombre IS NOT NULL ORDER BY p.fecha LIMIT $limite;";

    $responseGetAll = mysqli_query($conexion, $queryGetAll);

    if ($responseGetAll) {

        $results = array();

        while ($row = mysqli_fetch_assoc($responseGetAll)) {
            $results[] = array(
                "habitacion" => $row["numero_habitacion"],
                "fecha_pedido" => $row["fecha_pedido"],
                "fecha_atencion" => $row["fecha_atencion"],
                "responsable_pedido" => $row["empleado_pedido"],
                "responsable_atencion" => $row["empleado_atencion"],
                "folio" => $row["folio"]
            );
        }

        // Devuelve los resultados como JSON
        echo json_encode($results);
    } else {
        // echo "Error en la consulta: " . mysqli_error($conexion);
        echo "error";
    }
}


// Cerramos la conexión
$conexion->close();
