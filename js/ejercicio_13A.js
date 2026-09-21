let numero = 100;
let resultado = 0;


if ((numero >= -18 && numero <= 29) || (numero >= 90 && numero <= 105) || (numero >= 140 && numero <= 250)) {
    if (numero > 0) {
        resultado = numero * 2;
        console.log(" El doble es:", resultado);
    } else {
        resultado = numero / 2;
        console.log(" La mitad es:", resultado);
    }

} else {
    console.log("El número no está dentro de ninguno de los rangos válidos.");
}