// import { cambiarColor } from "./gestionar_habitaciones.js";
import { registrar_pedido } from "./registrar_pedido.js";
import { registrar_atencion } from "./registrar_atencion.js";

// *** FORMULARIO DE PEDIDO ***

// Recibe y registra datos de pedido
export function procesarPedido(event) {
   event.preventDefault();

   //Obtenemos  y procesamos los datos
   const nombre = document.getElementById("nombre-pedido").value;
   const habitacion = document.getElementById("habitacion-pedido").value;
   const dia = document.getElementById("dia-pedido").value;
   const hora = document.getElementById("hora-pedido").value;
   const folio = document.getElementById("folio-pedido").value;

   if (!nombre || !habitacion || !dia || !hora || !folio) {
      alert("Por favor complete el formulario");
   }

   try {
      registrar_pedido(nombre, habitacion, dia, hora, folio);
      document.getElementById("modal-pedido").style.display = "none";
   } catch (error) {
      alert("Error de conexion");
   }
}

//*** FORMULARIO DE ATENCION ***

//Recibe y registra los datos de atencion
export function procesarAtencion(event) {
   event.preventDefault();

   //Obtenemos y procesamos los datos
   const nombre = document.getElementById("nombre-atencion").value;
   const habitacion = document.getElementById("habitacion-atencion").value;
   const dia = document.getElementById("dia-atencion").value;
   const hora = document.getElementById("hora-atencion").value;
   // const folio = document.getElementById("folio-atencion").value;

   if (!nombre || !habitacion || !dia || !hora) {
      alert("Por favor complete el formulario");
   }

   try {
      registrar_atencion(nombre, habitacion, dia, hora);
      document.getElementById("modal-atencion").style.display = "none";
   } catch (error) {
      alert("Error de conexion");
   }
}
