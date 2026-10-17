/*=========================================
        LLAMAR AL SOPORTE - MiDosis
==========================================*/

//==================================
// BOTÓN VOLVER
//==================================

const volver = document.getElementById("volver");

if (volver) {

    volver.addEventListener("click", () => {

        if (window.history.length > 1) {

            history.back();

        } else {

            window.location.href = "soporte.html";

        }

    });

}

//==================================
// CREAR INDICADOR DE ESTADO
//==================================

const cabecera = document.querySelector(".cabecera");

const estado = document.createElement("div");

estado.classList.add("estado");

cabecera.appendChild(estado);

//==================================
// HORARIO DE SOPORTE
//==================================

function actualizarEstado() {

    const ahora = new Date();

    const dia = ahora.getDay(); // 0 = domingo

    const hora = ahora.getHours();

    if (dia >= 1 && dia <= 5 && hora >= 8 && hora < 18) {

        estado.innerHTML = "Soporte disponible ahora";

        estado.style.color = "#2E7D32";

    } else {

        estado.innerHTML = "Fuera del horario de atención";

        estado.style.color = "#E53935";

    }

}

actualizarEstado();

//==================================
// BOTONES DE ACCIÓN
//==================================

const btnLlamar = document.querySelector(".btnLlamar");

const btnWhatsapp = document.querySelector(".btnWhatsapp");

const btnCorreo = document.querySelector(".btnCorreo");

//==================================
// CONFIRMAR LLAMADA
//==================================

if (btnLlamar) {

    btnLlamar.addEventListener("click", function (e) {

        const confirmar = confirm(

            "¿Desea llamar al Centro de Soporte MiDosis?"

        );

        if (!confirmar) {

            e.preventDefault();

        }

    });

}

//==================================
// CONFIRMAR WHATSAPP
//==================================

if (btnWhatsapp) {

    btnWhatsapp.addEventListener("click", function () {

        console.log("Abriendo WhatsApp...");

    });

}

//==================================
// CONFIRMAR CORREO
//==================================

if (btnCorreo) {

    btnCorreo.addEventListener("click", function () {

        console.log("Abriendo cliente de correo...");

    });

}

//==================================
// EFECTO BOTONES
//==================================

const botones = document.querySelectorAll("a, button");

botones.forEach((boton) => {

    boton.addEventListener("mousedown", () => {

        boton.style.transform = "scale(.96)";

    });

    boton.addEventListener("mouseup", () => {

        boton.style.transform = "scale(1)";

    });

});

//==================================
// EFECTO TARJETAS
//==================================

const tarjetas = document.querySelectorAll(".info");

tarjetas.forEach((tarjeta) => {

    tarjeta.addEventListener("mouseenter", () => {

        tarjeta.style.transform = "translateY(-4px)";

    });

    tarjeta.addEventListener("mouseleave", () => {

        tarjeta.style.transform = "translateY(0)";

    });

});

//==================================
// EFECTO DE ENTRADA
//==================================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = ".5s";

        document.body.style.opacity = "1";

    }, 100);

});

//==================================
// MENÚ INFERIOR
//==================================

const menu = document.querySelectorAll(".bottom a");

menu.forEach((item) => {

    item.addEventListener("click", () => {

        menu.forEach((i) => {

            i.classList.remove("activo");

        });

        item.classList.add("activo");

    });

});

//==================================
// RESALTAR PÁGINA ACTUAL
//==================================

const paginaActual = window.location.pathname.split("/").pop();

menu.forEach((link) => {

    if (link.getAttribute("href") === paginaActual) {

        link.classList.add("activo");

    }

});

//==================================
// ATAJO ESC
//==================================

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        if (window.history.length > 1) {

            history.back();

        } else {

            window.location.href = "soporte.html";

        }

    }

});

//==================================
// INFORMACIÓN EN CONSOLA
//==================================

console.log("Centro de Soporte MiDosis cargado correctamente.");

console.log("Horario de atención: Lunes a Viernes de 8:00 a.m. a 6:00 p.m.");

//==================================
// FIN DEL SCRIPT
//==================================