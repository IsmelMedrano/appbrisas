//Funcion que se activa al hacer click en una casilla
export function cambiarColor(casilla) {
   // Esta verde?
   if (casilla.classList.contains("green")) {
      document.querySelector(".list-disponibles").removeChild(casilla); // La quitamos de disponibles
      casilla.classList.remove("green"); // Le quitamos la clase green
      casilla.classList.add("orange"); // Le agregamos la clase orange
      document.querySelector(".list-en-servicio").appendChild(casilla); // La agregamos a (en servicio)
      cambiarARojo(casilla); // Cambiar a rojo despues del tiempo establecido
      ordenarEnServicio(".list-en-servicio");

      return;
   }

   // Esta Rojo?
   if (casilla.classList.contains("red")) {
      document.querySelector(".list-en-servicio").removeChild(casilla); // La quitamos de (en servicio)
      casilla.classList.remove("red"); // le quitamos la clase red
      casilla.classList.add("green"); // le agregamos la clase green
      document.querySelector(".list-disponibles").appendChild(casilla); // la agregamos a disponibles
      ordenarLista(".list-disponibles"); // Ordenamos la lista correspondiente

      return;
   }
   //Es naranja
   else {
      document.querySelector(".list-en-servicio").removeChild(casilla); // La quitamos de (en servicio)
      casilla.classList.remove("orange"); // le quitamos la clase red
      casilla.classList.add("green"); // le agregamos la clase green
      document.querySelector(".list-disponibles").appendChild(casilla); // la agregamos a disponibles
      ordenarLista(".list-disponibles"); // Ordenamos la lista correspondiente

      return;
   }
}

function cambiarARojo(casilla) {
   setTimeout(function () {
      casilla.classList.remove("orange"); // Quitamos naranja
      casilla.classList.add("red"); // Agregamos Rojo
      ordenarEnServicio(".list-en-servicio");
   }, 10000);
}

// Ordena de forma ascendente los hijos de un elemento html
export function ordenarLista(claseLista) {
   const lista = document.querySelector(claseLista); //Obtenemos contenedor de la lista
   const casillas = Array.from(lista.children); // Obtenemos los elementos de esa lista
   casillas.sort((a, b) => a.innerText.localeCompare(b.innerText)); //ordenamos menor a mayor
   lista.innerHTML = ""; // Eliminamos children de la lista
   casillas.forEach((casilla) => lista.appendChild(casilla)); // agregamos 1 por 1 las casillas a la lista
}

// Esta funcion ordena las habitaciones en servicio (ordenado especial)
export function ordenarEnServicio(claseLista) {
   const lista = document.querySelector(claseLista); //Obtenemos contenedor de la lista
   const casillas = Array.from(lista.children); // Obtenemos todos los elementos de esa lista

   // Guardamos las casillas naranjas en una nueva lista y las ordenamos de forma ascendente
   const listOrange = casillas
      .filter((casillaActual) => casillaActual.classList.contains("orange"))
      .sort((a, b) => a.innerText.localeCompare(b.innerText));

   // Guardamos las casillas rojas en una nueva lista y las ordenamos de forma ascendente
   const listRed = casillas
      .filter((casillaActual) => casillaActual.classList.contains("red"))
      .sort((a, b) => a.innerText.localeCompare(b.innerText));

   lista.innerHTML = ""; //Eliminamos todos los hijos de la lista

   listRed.forEach((casilla) => lista.appendChild(casilla)); //Agregamos las casillas rojas ya ordenadas
   listOrange.forEach((casilla) => lista.appendChild(casilla)); // Agregamos las casillas naranjas ordenadas
}
