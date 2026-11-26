// Valida el formulario de entrada en el navegador. El servidor comprueba si la
// contraseña es correcta: JavaScript no puede saberlo.
const formulario = document.getElementById("entrar");
const campoEmail = document.getElementById("email");
const campoClave = document.getElementById("password");

formulario.addEventListener("submit", (evento) => {
    limpiarErrores(formulario);
    let hayErrores = false;

    if (!campoEmail.value.includes("@")) {
        mostrarError(campoEmail, "El correo debe contener una arroba.");
        hayErrores = true;
    }
    if (campoClave.value === "") {
        mostrarError(campoClave, "Escribe tu contraseña.");
        hayErrores = true;
    }

    if (hayErrores) {
        evento.preventDefault();
    }
});
