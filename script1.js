//MODULE Operator %

let num = 9;

if (num % 2 === 0) {
    console.log(num + "es par");
} else {
    console.log(num + "es impar");
}

let userInput = document.getElementById("numberInput");
let button = document.getElementById("generateBtn");
let resultContainer = document.getElementById("result");
let button2 = document.getElementById("compararContrasena");

button.onclick = compararNumero;
button2.onclick = compararPassword;

function compararNumero() {
    let number = userInput.value;

    if (number % 2 === 0) {
        resultContainer.textContent = number + " es par";
    } else {
        resultContainer.textContent = number + " es impar";
    }
}

function compararPassword() {
    let userPassword = userInput.value;

    if(userPassword === "123"){
        resultContainer.textContent = "Bienvenido";
    }else{
        resultContainer.textContent = "Contraseña Incorrecta"
    }
}











// let button = document.getElementById("generateBtn");
// let button2 = document.getElementById("compararPw");
// let userInput = document.getElementById("numberInput");
// let resultContainer = document.getElementById("result");

// button.onclick = compararNumero

// function compararNumero() {
//     let number = userInput.value;

//     if (number % 2 === 0) {
//         resultContainer.textContent = number + " es par";
//     } else {
//         resultContainer.textContent = number + " es impar";
//     }
// }

// button2.onclick = compararPassword;
// function compararPassword() {
//     let userPassword = userInput.value

//     if (userPassword === "123") {
//         resultContainer.textContent = "Correcto, bienvenido"
//     } else {
//         resultContainer.textContent = "Contraseña Incorrecta"
//     }
// }


