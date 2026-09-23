//un sistema de precios segun su edad
//parseInt sirve para convertir un dato a valor numerico entero
let edad = parseInt(prompt("ingrese su edad:"));

if (edad < 10) {
    console.log("entrada gratuita");
} else if ( edad < 14) {
    console.log ("precio de entrada: S/ 8.00 (adolecente)");
} else if (edad <= 60) {
    console.log(" precio de entrada: S/ 12.00 (adulto)");
} else {
    console.log (" precio del adulto mayor. S/ 7.00 (adulto mayor)");
}



