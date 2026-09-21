let nombre = "ANA";
let edad = 20;

let nuevaEdad = 0;

let nombreMayusculas = nombre.toUpperCase();

if (nombreMayusculas === "ANA" || nombreMayusculas === "JUANA" || nombreMayusculas === "NANCY") {
    nuevaEdad = edad + (edad * 0.30);
    console.log("Se aplicó un incremento del 30%.");

} else {
    nuevaEdad = edad + (edad * 0.90);
    console.log("Se aplicó un incremento del 90%.");
}


console.log("Nombre:", nombre);
console.log("Edad original:", edad);
console.log("Nueva edad:", nuevaEdad);

