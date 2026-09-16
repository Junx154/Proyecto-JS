const nombreProducto = "Laptop Gamer";
let PrecioOriginal = "4500.99";
const descuento = 15;
let stockDisponible = "5";
let enOferta = "true";

// calcular el precio con descuento usando operadores
let PrecioFinal = PrecioOriginal - PrecioOriginal * descuento / 100;

// Mostrar informacion del producto

console.log("🔷 Producto", nombreProducto);
console.log("🔷 Precio Original: S/", PrecioOriginal);
console.log("🔷 Descuento:", descuento, "%");
console.log("🔷 Precio Final: S/", PrecioFinal.toFixed/(2));
console.log("🔷StockDisponible:", stockDisponible);
console.log("🔷 En oferta", enOferta ? "Si" : "No");


// simular compra y actualizar stock
let cantidadComprada = 2;

// Validar si hay stock  suficiente

if (cantidadComprada < stockDisponible) {
    stockDisponible -= cantidadComprada;
    console.log("✅ compra realizada con exito.");
    console.log("📦 stock actualizado:", stockDisponible);
} else {
    console.log("❌ No hay suficiente stock disponible. ");
}














