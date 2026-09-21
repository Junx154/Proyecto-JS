let numero = 6;
let resultado = 0;

if (numero >= 4 && numero <= 10) {
    if (numero % 2 === 0) {
        resultado = numero * numero * numero;
        console.log("El número es par. El cubo es:", resultado);
    } else {
        resultado = numero * 0.16;
        console.log("El número es impar. El 16% es:", resultado);
    }

} else {
    console.log("El número no está dentro del rango de 4 a 10.");
}