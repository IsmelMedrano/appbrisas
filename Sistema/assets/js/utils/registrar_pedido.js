export function registrar_pedido(nombre, habitacion, dia, hora, folio) {
   $.ajax({
      url: "../assets/php/registrar_pedido.php",
      method: "POST",
      data: {
         nombre: nombre,
         habitacion: habitacion,
         dia: dia,
         hora: hora,
         folio: folio,
      },
      success: function (response) {
         if (response !== "success") {
            alert("Error al registrar");
            console.log(response);
            return;
         }
      },
      error: function (error) {
         console.log("Error de conexion");
      },
   });
}
