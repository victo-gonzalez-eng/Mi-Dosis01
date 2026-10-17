/*=========================================
        PREGUNTAS FRECUENTES - MiDosis
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
// ACORDEÓN
//==================================

const preguntas = document.querySelectorAll(".pregunta");

preguntas.forEach((pregunta) => {

    const boton = pregunta.querySelector(".acordeon");

    boton.addEventListener("click", () => {

        if (pregunta.classList.contains("activa")) {

            pregunta.classList.remove("activa");

        } else {

            preguntas.forEach((item) => {

                item.classList.remove("activa");

            });

            pregunta.classList.add("activa");

        }

    });

});

//==================================
// BUSCADOR
//==================================

const buscador = document.getElementById("buscarPregunta");

buscador.addEventListener("keyup", function () {

    const texto = this.value.toLowerCase();

    preguntas.forEach((pregunta) => {

        const contenido = pregunta.innerText.toLowerCase();

        if (contenido.includes(texto)) {

            pregunta.style.display = "block";

        } else {

            pregunta.style.display = "none";

        }

    });

});

//==================================
// BOTÓN CONTACTAR SOPORTE
//==================================

const contacto = document.querySelector(".btnContacto");

if (contacto) {

    contacto.addEventListener("click", () => {

        console.log("Abriendo formulario de contacto...");

    });

}

//==================================
// MENÚ INFERIOR
//==================================

const menu = document.querySelectorAll(".bottom a");

menu.forEach((boton) => {

    boton.addEventListener("click", () => {

        menu.forEach((item) => {

            item.classList.remove("activo");

        });

        boton.classList.add("activo");

    });

});

//==================================
// EFECTO TARJETAS
//==================================

preguntas.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        item.style.transform = "translateY(-3px)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "translateY(0px)";

    });

});

//==================================
// EFECTO BOTONES
//==================================

const botones = document.querySelectorAll("button");

botones.forEach((btn) => {

    btn.addEventListener("mousedown", () => {

        btn.style.transform = "scale(.96)";

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
// RESALTAR PÁGINA ACTUAL
//==================================

const paginaActual = window.location.pathname.split("/").pop();

menu.forEach((link) => {

    if (link.getAttribute("href") === paginaActual) {

        link.classList.add("activo");

    }

});

//==================================
// ATAJO TECLA ESC
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
// CONTADOR DE PREGUNTAS
//==================================

const totalPreguntas = preguntas.length;

console.log("Preguntas disponibles: " + totalPreguntas);

//==================================
// MENSAJE DE BIENVENIDA
//==================================

console.log("Pantalla Preguntas Frecuentes cargada correctamente.");

//==================================
// FIN DEL SCRIPT
//==================================