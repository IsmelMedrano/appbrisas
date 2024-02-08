import { obtenerFechaActual } from "./obtener_fecha.js";
import { obtenerHoraActual } from "./obtener_hora.js";
//*** VENTANAS MODALES ***
// Esta funcion abre la ventana modal correspondiente a la casilla
export function openModal(casilla) {
   let padre = casilla.parentNode.classList; //Obtenemos el padre de la casilla
   // La casilla esta disponible?
   if (padre.value === "list-disponibles") {
      document.getElementById("modal-pedido").style.display = "flex"; // abrimos el modal
      document.getElementById("habitacion-pedido").value = casilla.innerText; // colocamos la habitacion en el formulario
      document.getElementById("dia-pedido").value = obtenerFechaActual(); // colocamos la feha actual en el formulario
      document.getElementById("hora-pedido").value = obtenerHoraActual(); // colocamos la hora actual en el formulario

      // La casilla esta en servicio?
   } else if (padre.value === "list-en-servicio") {
      document.getElementById("modal-atencion").style.display = "flex"; //Abrimos el modal
      document.getElementById("habitacion-atencion").value = casilla.innerText; //colocamos la habitacion el el formulario
      document.getElementById("dia-atencion").value = obtenerFechaActual(); // colocamos la feha actual en el formulario
      document.getElementById("hora-atencion").value = obtenerHoraActual(); // colocamos la hora actual en el formulario
   }
}
