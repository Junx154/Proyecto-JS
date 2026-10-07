document.getElementById('form-contacto').addEventListener('submit', function(e) {
    // 1. Detiene el envío automático del formulario
    e.preventDefault();

    const form = this;

    // 2. Muestra la alerta de confirmación
    Swal.fire({
        title: '¿Deseas enviar el mensaje?',
        text: "Verifica que todos tus datos estén correctos.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#6b5ce7', // Color de tu botón principal
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, enviar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        // 3. Si el usuario presiona "Sí, enviar"
        if (result.isConfirmed) {
            
            // Opcional: Alerta de éxito antes de enviar
            Swal.fire({
                title: '¡Enviado!',
                text: 'Tu mensaje ha sido enviado con éxito.',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                // Envía el formulario al servidor (Formspree, PHP, etc.)
                form.submit();
            });

        }
    });
});