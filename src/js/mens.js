document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioColaboracion');
    const mensajeDiv = document.getElementById('mensaje-confirmacion');
    if (formulario && mensajeDiv) {
        mensajeDiv.style.display = 'none';
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); 
            mensajeDiv.style.display = 'block';
            formulario.style.display = 'none';
            setTimeout(() => {
                mensajeDiv.style.display = 'none';
            }, 5000); 
        });
    }
});