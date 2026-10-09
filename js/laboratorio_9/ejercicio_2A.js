const pinCorrecto = "1234";
const intentos = ["1534" , "1582" , "3546"];
let intentosRealizados = 0;
const maximoIntento= 3;

let accesoConcedido= false;

do {
    let pinIngresado= intentos [intentosRealizados];
    intentosRealizados++;

    console.log(`intento ${intentosRealizados}: ingresando pin...`)
    if(pinIngresado === pinCorrecto){
        console.log("pin aceptado bienvenido al sistema");
        accesoConcedido =true; 
    }else {
        console.log ("pin incorrecto ")
    }
} while (!accesoConcedido && intentosRealizados < maximoIntento);

if (!accesoConcedido) {
    console.log("tarjeta bloqueada =(")
}







