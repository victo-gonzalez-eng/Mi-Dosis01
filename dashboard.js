/*=========================================
        DASHBOARD - MI DOSIS
==========================================*/

//==========================================
// VARIABLES
//==========================================

const menu = document.getElementById("menuLateral");
const overlay = document.getElementById("overlay");
const botonMenu = document.getElementById("abrirMenu");

const tarjetas = document.querySelectorAll(".card");
const botonesBottom = document.querySelectorAll(".bottom a");
const enlacesMenu = document.querySelectorAll(".menu-lateral a");
const campana = document.querySelector(".notificaciones");

//==========================================
// ABRIR MENÚ
//==========================================

botonMenu.addEventListener("click", () => {

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

overlay.addEventListener("click", cerrarMenu);

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

        card.style.transform="scale(.97)";

        setTimeout(()=>{

            card.style.transform="scale(1)";

        },150);

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

        const respuesta = confirm("¿Deseas cerrar la sesión?");

        if(!respuesta){

            e.preventDefault();

        }

    });

}

//==========================================
// NOTIFICACIONES
//==========================================

if(campana){

    campana.addEventListener("click",()=>{

        alert(
`📢 Recordatorios pendientes

• Paracetamol - 8:00 AM
• Losartán - 2:00 PM
• Vitamina D - 8:00 PM`
);

    });

}

//==========================================
// EFECTO BOTONES
//==========================================

const botones = document.querySelectorAll("button");

botones.forEach((btn)=>{

    btn.addEventListener("mousedown",()=>{

        btn.style.transform="scale(.96)";

    });

    btn.addEventListener("mouseup",()=>{

        btn.style.transform="scale(1)";

    });

});

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
// SALUDO AUTOMÁTICO
//==========================================

const saludo = document.querySelector(".saludo h4");

if(saludo){

    const hora = new Date().getHours();

    if(hora < 12){

        saludo.innerHTML = "🌞 Buenos días, Víctor";

    }

    else if(hora < 18){

        saludo.innerHTML = "🌤 Buenas tardes, Víctor";

    }

    else{

        saludo.innerHTML = "🌙 Buenas noches, Víctor";

    }

}

//==========================================
// ANIMACIÓN ICONOS MENÚ
//==========================================

const iconos = document.querySelectorAll(".menu-lateral i");

iconos.forEach((icono)=>{

    icono.addEventListener("mouseenter",()=>{

        icono.style.transform="scale(1.2)";

    });

    icono.addEventListener("mouseleave",()=>{

        icono.style.transform="scale(1)";

    });

});

//==========================================
// EFECTO FOTO PERFIL
//==========================================

const foto = document.querySelector(".fotoPerfil");

if(foto){

    foto.addEventListener("mouseenter",()=>{

        foto.style.transform="scale(1.08)";

    });

    foto.addEventListener("mouseleave",()=>{

        foto.style.transform="scale(1)";

    });

}

//==========================================
// EFECTO CAMPANA
//==========================================

if(campana){

    setInterval(()=>{

        campana.style.transform="scale(1.08)";

        setTimeout(()=>{

            campana.style.transform="scale(1)";

        },250);

    },7000);

}

//==========================================
// FIN DEL SCRIPT
//==========================================