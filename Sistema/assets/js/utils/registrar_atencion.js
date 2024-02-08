export function registrar_atencion(nombre, habitacion, dia, hora) {
   $.ajax({
      url: "../assets/php/registrar_atencion.php",
      method: "POST",
      data: {
         nombre: nombre,
         habitacion: habitacion,
         dia: dia,
         hora: hora,
      },
      success: function (response) {
         if (response !== "success") {
            alert("Error al registrar");
            return;
         }
      },
      error: function (error) {
         console.log("Error de conexion");
      },
   });
}
