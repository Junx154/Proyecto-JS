let nombreEmpleado = "Arias";
let horasTrabajadas = 40;
let tarifas = 50;

let salarioBruto = horasTrabajadas * tarifas;
const impuesto = 0.10 * salarioBruto;
let salarioNeto = salarioBruto - impuesto;

console.log(":::::::::BOLETA DE PAGO:::::::::");
console.log("🫵nombre del empleado", nombreEmpleado);
console.log("⌛horas trabajadas", horasTrabajadas);
console.log("💰tarifa por hora S/", tarifas);
console.log("salario bruto S/", salarioBruto);
console.log("📉impuestos S/", impuesto);
console.log("🔷salario neto S/", salarioNeto);

