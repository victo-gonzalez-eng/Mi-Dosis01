/*=========================================
        CUIDADOR - MI DOSIS
==========================================*/

//==========================================
// VARIABLES
//==========================================

const menu = document.getElementById("menuLateral");
const overlay = document.getElementById("overlay");
const botonMenu = document.getElementById("abrirMenu");

const personas = document.querySelectorAll(".persona-card");
const recordatorios = document.querySelectorAll(".recordatorio-card");
const botonesBottom = document.querySelectorAll(".bottom a");
const enlacesMenu = document.querySelectorAll(".menu-lateral a");

//==========================================
// ABRIR MENÚ
//==========================================

botonMenu.addEventListener("click",()=>{

    menu.classList.add("activo");
    overlay.classList.add("activo");

});

//==========================================
// CERRAR MENÚ
//==========================================

function cerrarMenu(){

    menu.classList.remove("activo");
    overlay.classList.remove("activo");

}

overlay.addEventListener("click",cerrarMenu);

//==========================================
// CERRAR CON ESC
//==========================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        cerrarMenu();

    }

});

//==========================================
// CERRAR MENÚ AL SELECCIONAR OPCIÓN
//==========================================

enlacesMenu.forEach((link)=>{

    link.addEventListener("click",()=>{

        cerrarMenu();

    });

});

//==========================================
// TARJETAS PERSONAS
//==========================================

personas.forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-5px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

    card.addEventListener("click",()=>{

        card.style.transform="scale(.98)";

        setTimeout(()=>{

            card.style.transform="scale(1)";

        },180);

    });

});

//==========================================
// TARJETAS RECORDATORIOS
//==========================================

recordatorios.forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-5px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

    card.addEventListener("click",()=>{

        card.style.transform="scale(.98)";

        setTimeout(()=>{

            card.style.transform="scale(1)";

        },180);

    });

});

//==========================================
// BARRA INFERIOR
//==========================================

botonesBottom.forEach((boton)=>{

    boton.addEventListener("click",()=>{

        botonesBottom.forEach((b)=>{

            b.classList.remove("activo");

        });

        boton.classList.add("activo");

    });

});

//==========================================
// CONFIRMAR CERRAR SESIÓN
//==========================================

const salir = document.querySelector('a[href="index.html"]');

if(salir){

    salir.addEventListener("click",(e)=>{

        const respuesta = confirm(
            "¿Deseas cerrar la sesión?"
        );

        if(!respuesta){

            e.preventDefault();

        }

    });

}

//==========================================
// EFECTO DE CARGA
//==========================================

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition=".4s";

        document.body.style.opacity="1";

    },100);

});