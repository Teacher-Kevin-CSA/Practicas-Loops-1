// GENERADOR DE NÚMEROS - USANDO FOR

// 1. Obtén el botón usando su id "generateBtn".
// 2. Obtén el contenedor donde aparecerán los números (id: "numbers").
// 3. Asigna un evento click al botón.
// 4. Crea una función llamada generateNumbers.

// Dentro de la función:

// 6. Crea un ciclo for que empiece en 1 y termine en 10.
// 7. Dentro del ciclo:
//      - Crea un nuevo elemento div.
//      - Asigna como texto el valor actual del contador (i).
//      - Agrega la clase "number-box" al div.
//      - Agrega el div al contenedor.
// 8. Cierra el ciclo.s

let button = document.getElementById("generateBtn");
let container = document.getElementById("numbers");
button.onclick = generateNumbers;

function generateNumbers() {
    container.textContent = "";
    
    for(let i = 1; i <= 10; i++){
        let div = document.createElement("div");
        div.textContent = i;
        container.appendChild(div);
    }
}

