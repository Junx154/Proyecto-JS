let numero = -42;
let resultado = 0;


let numeroPositivo = Math.abs(numero);
let segundoDigito = numeroPositivo % 10;


if (numero >= -54 && numero <= -20 && segundoDigito % 2 === 0) {
    resultado = numero * 2;
    console.log("Cumple las condiciones. El doble es:", resultado);

} else {
    resultado = numero / 3;
    console.log("No cumple las condiciones. La tercera parte es:", resultado);

}