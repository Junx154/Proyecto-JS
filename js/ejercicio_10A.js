let numero1 = 25;
let numero2 = 4;
let numero3 = 12;


let numeros = [numero1, numero2, numero3];

// 3. Los ordenamos de menor a mayor (orden ascendente)
numeros.sort((a, b) => a - b);

// 4. Mostramos el resultado
console.log("Números originales:", numero1, numero2, numero3);
console.log("Orden ascendente (menor a mayor):", numeros);