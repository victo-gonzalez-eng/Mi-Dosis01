/*=========================================
        SOPORTE - MiDosis
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

            window.location.href = "dashboard.html";

        }

    });

}

//==================================
// ACTIVAR BOTÓN DEL MENÚ INFERIOR
//==================================

const menuInferior = document.querySelectorAll(".bottom a");

menuInferior.forEach((boton) => {

    boton.addEventListener("click", () => {

        menuInferior.forEach((b) => {

            b.classList.remove("activo");

        });

        boton.classList.add("activo");

    });

});

//==================================
// EFECTO TARJETAS
//==================================

const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-6px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

//==================================
// PREGUNTAS FRECUENTES
//==================================

const preguntas = document.querySelector('a[href="preguntas.html"]');

if (preguntas) {

    preguntas.addEventListener("click", () => {

        console.log("Abriendo Preguntas Frecuentes");

    });

}

//==================================
// ENVIAR MENSAJE
//==================================

const mensaje = document.querySelector('a[href="mensaje.html"]');

if (mensaje) {

    mensaje.addEventListener("click", () => {

        console.log("Abriendo formulario de contacto");

    });

}

//==================================
// REPORTAR PROBLEMA
//==================================

const reporte = document.querySelector('a[href="reporte.html"]');

if (reporte) {

    reporte.addEventListener("click", () => {

        console.log("Reportando problema");

    });

}

//==================================
// LLAMAR AL SOPORTE
//==================================

const telefono = document.querySelector('a[href^="tel:"]');

if (telefono) {

    telefono.addEventListener("click", () => {

        console.log("Llamando al soporte...");

    });

}

//==================================
// EFECTO BOTONES
//==================================

const botones = document.querySelectorAll("button");

botones.forEach((btn) => {

    btn.addEventListener("mousedown", () => {

        btn.style.transform = "scale(.95)";

    });

    btn.addEventListener("mouseup", () => {

        btn.style.transform = "scale(1)";

    });

});

//==================================
// EFECTO CARGA
//==================================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = ".4s";

        document.body.style.opacity = "1";

    }, 100);

});

//==================================
// ANIMACIÓN TARJETAS
//==================================

tarjetas.forEach((card) => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(.97)";

        setTimeout(() => {

            card.style.transform = "scale(1)";

        }, 150);

    });

});

//==================================
// MENSAJE DE BIENVENIDA
//==================================

console.log("Pantalla Soporte cargada correctamente");

//==================================
// RESALTAR PÁGINA ACTUAL
//==================================

const paginaActual = window.location.pathname.split("/").pop();

menuInferior.forEach((link) => {

    if (link.getAttribute("href") === paginaActual) {

        link.classList.add("activo");

    }

});

//==================================
// ATAJOS DE TECLADO
//==================================

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        if (window.history.length > 1) {

            history.back();

        } else {

            window.location.href = "dashboard.html";

        }

    }

});

//==================================
// FINAL
//==================================