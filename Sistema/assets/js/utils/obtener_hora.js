export function obtenerHoraActual() {
   const fecha = new Date();
   const hora = fecha.getHours().toString().padStart(2, "0"); // Obtiene las horas y las formatea a 2 dígitos
   const minutos = fecha.getMinutes().toString().padStart(2, "0"); // Obtiene los minutos y los formatea a 2 dígitos
   // const segundos = fecha.getSeconds().toString().padStart(2, "0"); // Obtiene los segundos y los formatea a 2 dígitos
   // const horaActual = `${hora}:${minutos}:${segundos}`;
   const horaActual = `${hora}:${minutos}`;

   return horaActual;
}
