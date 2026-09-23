<?php
// el simbolo "$" es la variable en php
//fase de entrada: declaracion de variables y preguntas

$producto = "Zapatillas Adidas";

//const curso = "lógica de programción";

$precio = 350;
$descuento = 0.08;
$IGV = 0.18;


// fase de proceso: es la logica del programa

$precioIGV = $precio * $IGV;
$precioDescuento = $precio * $descuento;
$precioFinal = $precio + $precioIGV - $descuento;

//fase de salida: impresion a la consola
//modo js console.log ("precio del producto es:", precio)

echo "el precio del producto es:" . $precio . "<br>";
echo "IGV es:" . $precioIGV . "<br>";
echo "precio final: S/" . $precioFinal . "<br>";


