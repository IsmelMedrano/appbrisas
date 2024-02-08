// Importamos modulo
import { openModal } from "./abrir_modal.js";
import { ordenarLista, ordenarEnServicio } from "./gestionar_habitaciones.js";

export function cargarHabitaciones() {
   $.ajax({
      url: "../assets/php/cargar_habitaciones.php",
      method: "POST",
      success: function (habitaciones) {
         habitaciones = JSON.parse(habitaciones);

         if (habitaciones) {
            // Limpia las listas antes de agregar nuevos elementos
            $(".list-disponibles").empty();
            $(".list-en-servicio").empty();

            // console.log("Revision");

            habitaciones.forEach((habitacion) => {
               // Creamos el elemento html con  sus atributos basicos
               const casilla = document.createElement("div");
               casilla.classList.add("casilla");
               casilla.id = habitacion.numero;
               casilla.textContent = habitacion.numero;
               casilla.addEventListener("click", () => openModal(casilla));

               // *** LE AÑÁDIMOS UN COLOR ***

               //Si la habitacion tiene el estado "disponible" la ponemos verde
               if (habitacion.estado === "disponible") {
                  casilla.classList.add("green");
                  document
                     .querySelector(".list-disponibles")
                     .appendChild(casilla);
               }

               // Si la habitacion tiene el estado de "en-serivico" la ponemos naranja
               else if (habitacion.estado === "en-servicio") {
                  casilla.classList.add("orange");
                  document
                     .querySelector(".list-en-servicio")
                     .appendChild(casilla);

                  // Si la habitacion tiene el estadfo de "atencion-pendiente" la ponemos roja
               } else if (habitacion.estado === "atencion-pendiente") {
                  casilla.classList.add("red");
                  document
                     .querySelector(".list-en-servicio")
                     .appendChild(casilla);
               }
            });
         }

         ordenarListas();
      },
      complete: function () {
         setTimeout(cargarHabitaciones, 2000);
      },
      error: function (error) {
         console.log("Error de conexion");
      },
   });
}

// Mueve la lógica de ordenamiento fuera de la función cargarHabitaciones
function ordenarListas() {
   ordenarLista(".list-disponibles");
   ordenarEnServicio(".list-en-servicio");
}

// Llama a la función de ordenamiento después de cargar las habitaciones
cargarHabitaciones();
ordenarListas();
