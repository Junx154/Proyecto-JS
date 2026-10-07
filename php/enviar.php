<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = strip_tags(trim($_POST["nombre"]));
    $empresa = strip_tags(trim($_POST["empresa"]));
    $telefono = strip_tags(trim($_POST["telefono"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $asunto = strip_tags(trim($_POST["asunto"]));
    $mensaje = trim($_POST["mensaje"]);

   
    $destino = "ralua2007@gmail.com";
    $titulo_correo = "Contacto Web: " . $asunto;

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Empresa: $empresa\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Correo: $email\n\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    $headers = "From: $nombre <$email>";

    if (mail($destino, $titulo_correo, $contenido, $headers)) {
        echo "¡Gracias! Tu mensaje ha sido enviado.";
    } else {
        echo "Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.";
    }
}
?>