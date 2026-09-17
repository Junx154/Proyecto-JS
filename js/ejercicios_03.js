let nombreObrero = "Arias Ricardo";
let prendasConfeccionadas = 120;

let sueldoBase = prendasConfeccionadas * 10;

let impuesto = sueldoBase * 0.03;
let seguro = sueldoBase * 0.02;
let solidaridad = sueldoBase * 0.01;
let descuentoTotal = impuesto + seguro + solidaridad;

let bonificación = sueldoBase * 0.05;

let sueldoNeto = sueldoBase - descuentoTotal + bonificación;

console.log ("Nombre del personal:", nombreObrero);
console.log ("prendas creadas:", prendasConfeccionadas);
console.log ("sueldo inicial: S/", sueldoBase);
console.log ("descuento Total: S/", descuentoTotal);
console.log ("bonificación: S/", bonificación);
console.log ("sueldo Final: S/", sueldoNeto);


