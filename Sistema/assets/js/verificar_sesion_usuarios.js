$(document).ready(function () {
   // Realiza una solicitud AJAX para verificar la sesión
   $.ajax({
      url: "../assets/php/verificar_sesion_usuarios.php",
      method: "POST",
      success: function (response) {
         if (response === "error") {
            window.location.href = "../";
         }
      },
   });
});
