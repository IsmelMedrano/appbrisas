$(document).ready(function () {
   $("#cerrar-sesion-button").click(function (event) {
      $.ajax({
         url: "../assets/php/cerrar_sesion.php",
         method: "POST",
         success: function (response) {
            window.location.href = "../";
         },
         error: function (error) {
            alert("Error de conexion");
         },
      });
   });
});
