// Traer registros para la bitacora

// Al cargar la pagina
$(document).ready(function () {
   const limite = 40;
   const fecha_inicial = "";
   const fecha_final = "";
   // const fecha_inicial = "2023-10-2";
   // const fecha_final = "2023-10-15";

   ObtenerRegistros(limite, fecha_inicial, fecha_final);
});

// Presionar boton de consultar
$(document).ready(function () {
   $("#bitacora-button").click(function (event) {
      event.preventDefault();
      const limite = $("#limit").val();
      const fecha_inicial = $("#desde").val();
      const fecha_final = $("#hasta").val();

      ObtenerRegistros(limite, fecha_inicial, fecha_final);
   });
});

function ObtenerRegistros(limite, fecha_inicial, fecha_final) {
   $.ajax({
      url: "../assets/php/bitacora.php",
      method: "POST",
      data: {
         limite: limite,
         fecha_inicial: fecha_inicial,
         fecha_final: fecha_final,
      },
      success: function (response) {
         if (response !== "error") {
            response = JSON.parse(response);

            //borramos registros anteriores de la tabla
            $(".bitacora-table").empty();
            // Colocamos nombres de las columnas
            setColumnsTable();

            // Agregamos los registros a la tabla
            response.forEach((currentRegister) => {
               // creamos fila
               const fila = document.createElement("tr");
               fila.classList.add("register-item");

               // creamos los campos

               const habitacion = document.createElement("td");
               habitacion.textContent = currentRegister.habitacion;

               const fecha_pedido = document.createElement("td");
               fecha_pedido.textContent = currentRegister.fecha_pedido;

               const fecha_atencion = document.createElement("td");
               fecha_atencion.textContent = currentRegister.fecha_atencion;

               const responsable_pedido = document.createElement("td");
               responsable_pedido.textContent =
                  currentRegister.responsable_pedido;

               const responsable_atencion = document.createElement("td");
               responsable_atencion.textContent =
                  currentRegister.responsable_atencion;

               const folio = document.createElement("td");
               folio.textContent = currentRegister.folio;

               // Agregamos los campos a la fila
               fila.appendChild(habitacion);
               fila.appendChild(fecha_pedido);
               fila.appendChild(fecha_atencion);
               fila.appendChild(responsable_pedido);
               fila.appendChild(responsable_atencion);
               fila.appendChild(folio);

               //Agregamos la fila a la tabla
               document
                  .getElementsByClassName("bitacora-table")[0]
                  .appendChild(fila);
            });
         }
         //  console.log(response);
      },
      error: function (error) {
         alert("Error al conectar...");
      },
   });
}

// Colocar nombre a las columnas
function setColumnsTable() {
   //creamos el tr
   const colums = document.createElement("tr");
   colums.classList.add("col-names");

   // creamos cada una de las columnas

   const habitacion = document.createElement("td");
   habitacion.textContent = "Habitacion";

   const fecha_pedido = document.createElement("td");
   fecha_pedido.textContent = "Fecha pedido";

   const fecha_atencion = document.createElement("td");
   fecha_atencion.textContent = "Fecha atencion";

   const responsable_pedido = document.createElement("td");
   responsable_pedido.textContent = "Responsable-pedido";

   const responsable_atencion = document.createElement("td");
   responsable_atencion.textContent = "Responsable-atencion";

   const folio = document.createElement("td");
   folio.textContent = "Folio";

   // Agregamos los campos a la fila
   colums.appendChild(habitacion);
   colums.appendChild(fecha_pedido);
   colums.appendChild(fecha_atencion);
   colums.appendChild(responsable_pedido);
   colums.appendChild(responsable_atencion);
   colums.appendChild(folio);

   //Agregamos la fila a la tabla
   document.getElementsByClassName("bitacora-table")[0].appendChild(colums);
}

// ******* Boton de pdf

$(document).ready(function () {
   $("#pdf-button").click(function (event) {
      event.preventDefault();

      const tabla = document.getElementsByClassName("bitacora-table")[0];
      const { jsPDF } = window.jspdf;

      const pdf = new jsPDF("p", "mm", "a4");

      // Agrega la tabla de HTML al PDF (reemplaza "bitacora-table" con el ID de tu tabla)
      pdf.autoTable({ html: tabla });

      pdf.save("Bitacora.pdf");
   });
});
