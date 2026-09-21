// 1. Definimos los 4 números (puedes cambiar sus valores)
let num1 = 15;
let num2 = 8;
let num3 = 24;
let num4 = 5;


let menor = num1;


if (num2 < menor) {
  menor = num2;
}

if (num3 < menor) {
  menor = num3;
}

if (num4 < menor) {
  menor = num4;
}


console.log("Los números son:", num1, num2, num3, num4);
console.log("El menor de los cuatro números es:", menor);