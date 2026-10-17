/*=========================================
        ENVIAR MENSAJE - MiDosis
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
// ELEMENTOS DEL FORMULARIO
//==================================

const formulario = document.getElementById("formMensaje");

const nombre = document.getElementById("nombre");

const correo = document.getElementById("correo");

const asunto = document.getElementById("asunto");

const mensaje = document.getElementById("mensaje");

const archivo = document.getElementById("archivo");

const contador = document.getElementById("contador");

//==================================
// CONTADOR DE CARACTERES
//==================================

mensaje.addEventListener("input", () => {

    contador.textContent = mensaje.value.length;

});

//==================================
// VALIDAR EMAIL
//==================================

function validarCorreo(email){

    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return expresion.test(email);

}

//==================================
// ENVIAR FORMULARIO
//==================================

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    if(nombre.value.trim()==""){

        alert("Ingrese su nombre.");

        nombre.focus();

        return;

    }

    if(correo.value.trim()==""){

        alert("Ingrese su correo.");

        correo.focus();

        return;

    }

    if(!validarCorreo(correo.value)){

        alert("Correo electrónico inválido.");

        correo.focus();

        return;

    }

    if(asunto.value==""){

        alert("Seleccione un asunto.");

        asunto.focus();

        return;

    }

    if(mensaje.value.trim()==""){

        alert("Escriba un mensaje.");

        mensaje.focus();

        return;

    }

    // Simulación de envío

    alert("✅ Su mensaje fue enviado correctamente.\n\nNuestro equipo responderá lo antes posible.");

    formulario.reset();

    contador.textContent="0";

});

//==================================
// ARCHIVO ADJUNTO
//==================================

archivo.addEventListener("change", function(){

    if(this.files.length>0){

        alert("Archivo seleccionado:\n\n"+this.files[0].name);

    }

});

//==================================
// EFECTO BOTONES
//==================================

const botones=document.querySelectorAll("button");

botones.forEach(btn=>{

    btn.addEventListener("mousedown",()=>{

        btn.style.transform="scale(.96)";

    });

    btn.addEventListener("mouseup",()=>{

        btn.style.transform="scale(1)";

    });

});

//==================================
// EFECTO ENTRADA
//==================================

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition=".4s";

        document.body.style.opacity="1";

    },100);

});

//==================================
// ACTIVAR MENÚ INFERIOR
//==================================

const menu=document.querySelectorAll(".bottom a");

menu.forEach(item=>{

    item.addEventListener("click",()=>{

        menu.forEach(i=>{

            i.classList.remove("activo");

        });

        item.classList.add("activo");

    });

});

//==================================
// MARCAR PÁGINA ACTUAL
//==================================

const pagina=window.location.pathname.split("/").pop();

menu.forEach(link=>{

    if(link.getAttribute("href")==pagina){

        link.classList.add("activo");

    }

});

//==================================
// ATAJO ESC
//==================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        if(window.history.length>1){

            history.back();

        }else{

            window.location.href="soporte.html";

        }

    }

});

//==================================
// MENSAJE CONSOLA
//==================================

console.log("Pantalla Enviar Mensaje cargada correctamente.");

//==================================
// FIN
//==================================