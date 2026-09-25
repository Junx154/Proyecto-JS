<?php

//vamos a declarar todas las variables necesarias
// "[]" se le llama areglo o array
$precio = [
    "pantalones de lana" => 45.00,
    "sueter de casimir"  => 100.00,
    "blusa de seda"      =>14.00,
    "camisola de seda"   =>10.00,
    "falda recta"        =>40.00,
    "saco de lana"       =>120.00
];

$prenda = "sueter de casimir";
$cantidad = 8;


//ahora obtendremos el precio unitario
//desde el areglo

$precioUnitario = $precio [$prenda];

//realizamos el calculo

$montoVenta = $cantidad * $precioUnitario;

//determinamos el porcentaje de descuento

if ($montoVenta < 100) {
    $porcentajeDescuento = 0.02;
}elseif ($montoVenta <= 500) {
    $porcentajeDescuento =0.04;
} elseif ($montoVenta <= 1000) {
    $porcentajeDescuento =0.06;
} elseif ($montoVenta <=1500) {
    $porcentajeDescuento =0.8;
} else {
    $porcentajeDescuento = 0.20;
}

//calculamos el monto del descuento

$montoDescuento = $montoVenta * $porcentajeDescuento;

// calculamos el monto neto a pagar 

$montoNeto = $montoVenta - $montoDescuento;

//calculamos el IGV = 0.18

$tasaIGV =0.18;
$montoIGV = $montoNeto * $tasaIGV;

//fase de salida , imprimimos toda la operacion 

echo "::::::::::detalle de compras de tela y moda de otono FALABELLA::::::::" . "<br>" ;
echo "prenda seleccionada:" . $prenda . "<br>";
echo "cantidad de compra:" . $cantidad . "<br>";
echo "------------------------------------------------" . "<br>";
echo "precio unitario :S/" . $precioUnitario . "<br>";
echo "monto de venta:" . $montoVenta . "<br>";
echo "descuento:" . $montoDescuento . "<br>";
echo "IGV:" . $montoIGV . "<br>";
echo "monto neto a pagar: S/" . $montoNeto . "<br>";
echo "------------------------------------------------" . "<br>";

?>



