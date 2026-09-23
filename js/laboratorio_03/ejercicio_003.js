//validacion de login (usuario y contraseña)

let usuario = prompt ("Usuario:");
let password = prompt("Contraseña:");

if ( usuario == "admin" && password == "123") {
    console.log("🫵 acceso consedid. !Bienvenido¡")
} else {
    console.log (" usuario y/o passaword incorrecto. AFUERA LADRON...!")
}
