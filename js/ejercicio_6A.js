
let diaNacimiento = 7;
let mesNacimiento = 1;
let anioNacimiento = 2007;


let diaActual = 20;
let mesActual = 9;
let anioActual = 2026;


let edad = anioActual - anioNacimiento;


if (mesActual < mesNacimiento) {
  edad = edad - 1;
} else if (mesActual === mesNacimiento && diaActual < diaNacimiento) {
  edad = edad - 1;
}

console.log("Fecha de nacimiento:", diaNacimiento + "/" + mesNacimiento + "/" + anioNacimiento);
console.log("Fecha actual:", diaActual + "/" + mesActual + "/" + anioActual);
console.log("---------------------------------");
console.log("Edad exacta:", edad, "años");