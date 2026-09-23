//==================================================
// JAVASCRIPT GENERAL DE LA TIENDA DE MOTOS
//==================================================


//==================================================
// FORMULARIO DE CONTACTO
//==================================================

const formulario = document.querySelector(".formulario-contacto form");

// Verificamos si existe el formulario
if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (
            nombre === "" ||
            correo === "" ||
            telefono === "" ||
            mensaje === ""
        ) {

            alert("Por favor, completa todos los campos.");

            return;
        }

        // Número de WhatsApp
        const numeroWhatsApp = "503 68327438";

        // Mensaje que llegará a WhatsApp
        const texto =
            "Hola, Tienda de Motos.%0A%0A" +
            "Nuevo mensaje de contacto%0A%0A" +
            "Nombre: " + nombre + "%0A" +
            "Correo: " + correo + "%0A" +
            "Teléfono: " + telefono + "%0A" +
            "Mensaje: " + mensaje;

        // Enlace de WhatsApp
        const enlace =
            "https://wa.me/" +
            numeroWhatsApp +
            "?text=" +
            texto;

        // Abrir WhatsApp
        window.open(enlace, "_blank");

    });

}