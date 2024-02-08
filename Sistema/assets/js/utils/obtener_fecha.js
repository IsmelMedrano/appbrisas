export function obtenerFechaActual() {
   const fecha = new Date();
   const day = fecha.getDate().toString().padStart(2, "0"); // Obtiene el día y lo formatea a 2 dígitos
   const month = (fecha.getMonth() + 1).toString().padStart(2, "0"); // El mes es 0-based, así que agregamos 1 y luego formateamos
   const year = fecha.getFullYear();

   // Formatea la fecha como "yyy/mm/dd"
   const fechaFormateada = `${year}-${month}-${day}`;

   return fechaFormateada;
}
