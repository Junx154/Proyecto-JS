let número = 18;

let tipoSigno = "";
let tipoparosimino= "";

if (número > 0) {
    tipoSigno = "positivo";
} else { (número < 0) 
    tipoSigno = "negativo";
}

if (número % 2 === 0) {
    tipoparosimino = "par";
} else { 
    tipoparosimino = "impar"}

console.log("número agregado:", 18);
console.log("el número es:", tipoSigno);
console.log("el número es:", tipoparosimino);