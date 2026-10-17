/*=========================================
        HISTORIAL - MI DOSIS
==========================================*/

//==========================================
// VARIABLES
//==========================================

const menu = document.getElementById("menuLateral");
const overlay = document.getElementById("overlay");
const botonMenu = document.getElementById("abrirMenu");

const tarjetas = document.querySelectorAll(".actividad-card");
const tabs = document.querySelectorAll(".tab");
const botonesBottom = document.querySelectorAll(".bottom a");
const enlacesMenu = document.querySelectorAll(".menu-lateral a");

//==========================================
// ABRIR MENÚ
//==========================================

if(botonMenu){

    botonMenu.addEventListener("click",()=>{

        menu.classList.add("activo");
        overlay.classList.add("activo");

    });

}

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
// CERRAR MENÚ AL ELEGIR UNA OPCIÓN
//==========================================

enlacesMenu.forEach((link)=>{

    link.addEventListener("click",()=>{

        cerrarMenu();

    });

});

//==========================================
// ACTIVAR BARRA INFERIOR
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
// CAMBIAR ENTRE PESTAÑAS
//==========================================

tabs.forEach((tab)=>{

    tab.addEventListener("click",()=>{

        tabs.forEach((t)=>{

            t.classList.remove("activo");

        });

        tab.classList.add("activo");

    });

});

//==========================================
// EFECTO TARJETAS
//==========================================

tarjetas.forEach((card)=>{

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

        },150);

    });

});

//==========================================
// CONFIRMAR CERRAR SESIÓN
//==========================================

const salir=document.querySelector('a[href="index.html"]');

if(salir){

    salir.addEventListener("click",(e)=>{

        const respuesta=confirm(
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

//==========================================
// ANIMACIÓN DEL PORCENTAJE
//==========================================

const porcentaje = document.getElementById("porcentaje");

if(porcentaje){

    let valor = 0;
    const objetivo = 85;

    const contador = setInterval(()=>{

        valor++;

        porcentaje.innerHTML = valor + "%";

        if(valor >= objetivo){

            clearInterval(contador);

        }

    },20);

}

//==========================================
// CONTADORES
//==========================================

function animarContador(id, objetivo){

    const elemento = document.getElementById(id);

    if(!elemento) return;

    let numero = 0;

    const intervalo = setInterval(()=>{

        numero++;

        elemento.innerHTML = numero;

        if(numero >= objetivo){

            clearInterval(intervalo);

        }

    },60);

}

animarContador("tomadas",17);
animarContador("omitidas",3);
animarContador("pendientes",2);

//==========================================
// BOTÓN VER TODAS
//==========================================

const verTodas = document.querySelector(".ver-todas a");

if(verTodas){

    verTodas.addEventListener("click",(e)=>{

        e.preventDefault();

        alert(
"Próximamente podrás consultar todo el historial de medicamentos."
);

    });

}

//==========================================
// EFECTO CÍRCULO
//==========================================

const circulo = document.querySelector(".circulo");

if(circulo){

    circulo.addEventListener("mouseenter",()=>{

        circulo.style.transform="scale(1.05)";

    });

    circulo.addEventListener("mouseleave",()=>{

        circulo.style.transform="scale(1)";

    });

}

//==========================================
// CAMBIO DE PESTAÑAS
//==========================================

tabs.forEach((tab)=>{

    tab.addEventListener("click",()=>{

        if(tab.textContent.trim()==="Calendario"){

            alert(
"📅 El calendario estará disponible en una próxima actualización."
);

        }

    });

});

//==========================================
// BOTÓN VOLVER
//==========================================

const volver = document.querySelector(".volver a");

if(volver){

    volver.addEventListener("mouseenter",()=>{

        volver.style.transform="translateX(-5px)";

    });

    volver.addEventListener("mouseleave",()=>{

        volver.style.transform="translateX(0px)";

    });

}

//==========================================
// EFECTO TARJETAS AL CARGAR
//==========================================

window.addEventListener("load",()=>{

    tarjetas.forEach((card,index)=>{

        card.style.opacity="0";

        card.style.transform="translateY(20px)";

        setTimeout(()=>{

            card.style.transition=".4s";

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        },index*180);

    });

});

//==========================================
// MENSAJE DE BIENVENIDA
//==========================================

setTimeout(()=>{

    console.log("Historial cargado correctamente.");

},500);

//==========================================
// FIN DEL ARCHIVO
//==========================================