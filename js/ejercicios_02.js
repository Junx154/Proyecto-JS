let nombreProducto = "Mouse optico";
let precioProducto = 100;

const porcentajeDescuento= 0.08;
const porcentajeIgv= 0.18;

let descuento= precioProducto * porcentajeDescuento;
let subTotal= precioProducto - descuento;
let montoIgv= subTotal * porcentajeIgv;
let totalPagar= subTotal + montoIgv;


console.log("🛒 Producto: ", nombreProducto );
console.log("💰Precio base:", precioProducto);
console.log("📉Descuento (8%):", descuento);
console.log("✅Subotal S/: ", subTotal);
console.log("🏦IGV (18%):", montoIgv);
console.log("✅Total a Pagar S/:", totalPagar);




