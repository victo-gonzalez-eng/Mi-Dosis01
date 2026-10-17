// ===============================
// PARTE 3 - REPORTAR PROBLEMA
// ===============================

// 🔙 Volver a soporte
document.getElementById("btnVolverSoporte").addEventListener("click", () => {
    window.location.href = "soporte.html";
});

// 📅 Mostrar fecha actual automáticamente
const fechaInput = document.getElementById("fecha");
if (fechaInput) {
    const hoy = new Date();
    const fechaFormateada = hoy.toISOString().split("T")[0];
    fechaInput.value = fechaFormateada;
}

// 🔢 Contador de caracteres en tiempo real
const descripcion = document.getElementById("descripcion");
const contador = document.getElementById("contadorCaracteres");

if (descripcion) {
    descripcion.addEventListener("input", () => {
        const longitud = descripcion.value.length;
        contador.textContent = `${longitud} caracteres`;
    });
}

// 📎 Mostrar archivo seleccionado
const archivo = document.getElementById("archivo");

if (archivo) {
    archivo.addEventListener("change", () => {
        const nombreArchivo = document.getElementById("nombreArchivo");
        if (archivo.files.length > 0) {
            nombreArchivo.textContent = archivo.files[0].name;
        } else {
            nombreArchivo.textContent = "Ningún archivo seleccionado";
        }
    });
}

// 📧 Validación de correo
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// 🎫 Generar número de ticket
function generarTicket() {
    const fecha = Date.now().toString().slice(-6);
    const aleatorio = Math.floor(Math.random() * 900 + 100);
    return `TCK-${fecha}-${aleatorio}`;
}

// 📩 Envío del formulario
const form = document.getElementById("formReporte");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Campos
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const descripcionVal = document.getElementById("descripcion").value.trim();

        // Validaciones
        if (!nombre || !correo || !descripcionVal) {
            alert("⚠️ Todos los campos obligatorios deben completarse.");
            return;
        }

        if (!validarEmail(correo)) {
            alert("⚠️ Ingresa un correo electrónico válido.");
            return;
        }

        // Generar ticket
        const ticket = generarTicket();

        // Confirmación
        alert(`✅ Reporte enviado correctamente.\n🎫 Ticket: ${ticket}`);

        // Limpieza del formulario
        form.reset();

        // Reset contador
        if (contador) contador.textContent = "0 caracteres";

        // Reset archivo
        if (document.getElementById("nombreArchivo")) {
            document.getElementById("nombreArchivo").textContent = "Ningún archivo seleccionado";
        }

        // Reset fecha
        if (fechaInput) {
            const hoy = new Date();
            fechaInput.value = hoy.toISOString().split("T")[0];
        }
    });
}

// 📱 Activación barra inferior (ejemplo interactivo)
const itemsBarra = document.querySelectorAll(".barra-inferior .item");

itemsBarra.forEach(item => {
    item.addEventListener("click", () => {
        itemsBarra.forEach(i => i.classList.remove("activo"));
        item.classList.add("activo");
    });
});