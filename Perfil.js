/*=========================================
        Mi Perfil - MiDosis
==========================================*/

//==================================
// BOTÓN VOLVER
//==================================

const volver = document.getElementById("volver");

if (volver) {

    volver.addEventListener("click", () => {

        history.back();

    });

}

//==================================
// CAMBIAR FOTO DE PERFIL
//==================================

const inputFoto = document.getElementById("cambiarFoto");
const fotoPerfil = document.getElementById("fotoPerfil");

if (inputFoto) {

    inputFoto.addEventListener("change", function () {

        const archivo = this.files[0];

        if (archivo) {

            const lector = new FileReader();

            lector.onload = function (e) {

                fotoPerfil.src = e.target.result;

            }

            lector.readAsDataURL(archivo);

        }

    });

}

//==================================
// CERRAR SESIÓN
//==================================

const cerrar = document.getElementById("cerrarSesion");

if (cerrar) {

    cerrar.addEventListener("click", function (e) {

        e.preventDefault();

        let respuesta = confirm(
            "¿Deseas cerrar la sesión?"
        );

        if (respuesta) {

            window.location.href = "index.html";

        }

    });

}

//==================================
// ACTIVAR MENÚ INFERIOR
//==================================

const botones = document.querySelectorAll(".bottom a");

botones.forEach((boton) => {

    boton.addEventListener("click", () => {

        botones.forEach((b) => {

            b.classList.remove("activo");

        });

        boton.classList.add("activo");

    });

});

//==================================
// ANIMACIÓN DE ENTRADA
//==================================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = ".4s";

        document.body.style.opacity = "1";

    }, 100);

});

//==================================
// EFECTO TARJETAS
//==================================

const items = document.querySelectorAll(".item");

items.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        item.style.transform = "translateX(5px)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "translateX(0px)";

    });

});

//==================================
// EFECTO BOTONES
//==================================

const botonesTodos = document.querySelectorAll("button");

botonesTodos.forEach((btn) => {

    btn.addEventListener("mousedown", () => {

        btn.style.transform = "scale(.95)";

    });

    btn.addEventListener("mouseup", () => {

        btn.style.transform = "scale(1)";

    });

});

//==================================
// MENSAJE BIENVENIDA
//==================================

console.log("Pantalla Mi Perfil cargada correctamente.");

//==================================
// ABRIR EDITAR PERFIL
//==================================

const editar = document.querySelector('a[href="editar-perfil.html"]');

if (editar) {

    editar.addEventListener("click", () => {

        console.log("Ir a editar perfil");

    });

}

//==================================
// CAMBIAR CONTRASEÑA
//==================================

const password = document.querySelector('a[href="cambiar-password.html"]');

if (password) {

    password.addEventListener("click", () => {

        console.log("Cambiar contraseña");

    });

}

//==================================
// CONFIGURACIÓN
//==================================

const configuracion = document.querySelector('a[href="configuracion.html"]');

if (configuracion) {

    configuracion.addEventListener("click", () => {

        console.log("Configuración");

    });

}

//==================================
// FINAL
//==================================