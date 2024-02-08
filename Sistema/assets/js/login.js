$(document).ready(function () {
   // Escuchar el evento de clic en el botón de inicio de sesión
   $("#login-button").click(function (event) {
      event.preventDefault();
      let user = $("#usuario").val();
      let password = $("#password").val();
      let action_url = $("#login-form").attr("action");

      // Realizar una solicitud AJAX al servidor para verificar las credenciales
      $.ajax({
         url: action_url, // Nombre del archivo PHP que verificará las credenciales
         type: "POST",
         data: {
            user: user,
            password: password,
         },
         success: function (response) {
            // La respuesta del servidor se maneja aquí
            if (response === "capitan") {
               // redireccionamos a la interfaz de capitan
               window.location.href = "./pages/Interfaz_de_capitan.html";
            } else if (response === "administrador") {
               // redireccionamos a la interfaz de administrador
               window.location.href = "./pages/Interfaz_de_administrador.html";
            } else {
               // Muestra un mensaje de error al usuario
               alert(
                  "Credenciales incorrectas. Por favor, inténtalo de nuevo."
               );
            }
         },
      });
   });
});
