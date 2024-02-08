// Importamos modulo
import { cargarHabitaciones } from "./utils/cargar_habitaciones.js";
import {
   procesarPedido,
   procesarAtencion,
} from "./utils/procesar_formularios_modales.js";

cargarHabitaciones(); // Cargamos las habitaciones

//Ventanas modales
//Agregamos evento submit al formulario de pedidos
document
   .getElementById("form-pedido")
   .addEventListener("submit", procesarPedido);

//Agregamos evento submit al formulario de atencion
document
   .getElementById("form-atencion")
   .addEventListener("submit", procesarAtencion);

// cerrar modal pedido
document.getElementById("x-pedido").addEventListener("click", function () {
   document.getElementById("modal-pedido").style.display = "none";
});

//Seleccionar nombre (modal pedido)
document
   .getElementById("nombres-pedido")
   .addEventListener("change", function () {
      const name = $("#nombres-pedido").val();

      document.getElementById("nombre-pedido").value = name;
   });

// cerrar modal atencion
document.getElementById("x-atencion").addEventListener("click", function () {
   document.getElementById("modal-atencion").style.display = "none";
});

//Seleccionar nombre (modal atencion)
document
   .getElementById("nombres-atencion")
   .addEventListener("change", function () {
      const name = $("#nombres-atencion").val();

      document.getElementById("nombre-atencion").value = name;
   });
