const nombreUsuario = "Ricardo";
let sueldo = 2000;
let bonificación = 0.14;
let servicio = 3;



if (servicio >= 3 ) {
    bonificación = sueldo * bonificación;

console.log(":::::BONIFICACION:::::");
console.log("nombre del personal:", nombreUsuario);
console.log("✅ felicidades por su bonificación del 14%.")
} else {
    console.log("❌ no es posible si bonificación.")
}