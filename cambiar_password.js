/*=========================================
        CAMBIAR CONTRASEÑA - MiDosis
==========================================*/

/*=========================================
            VARIABLES
=========================================*/

const formulario = document.getElementById("formPassword");

const actual = document.getElementById("actual");

const nueva = document.getElementById("nueva");

const confirmar = document.getElementById("confirmar");

const verActual = document.getElementById("verActual");

const verNueva = document.getElementById("verNueva");

const verConfirmar = document.getElementById("verConfirmar");

const caracteres = document.getElementById("caracteres");

const mayuscula = document.getElementById("mayuscula");

const minuscula = document.getElementById("minuscula");

const numero = document.getElementById("numero");


/*=========================================
      MOSTRAR / OCULTAR CONTRASEÑAS
=========================================*/

function mostrarPassword(input,icono){

    if(input.type==="password"){

        input.type="text";

        icono.classList.remove("fa-eye");

        icono.classList.add("fa-eye-slash");

    }else{

        input.type="password";

        icono.classList.remove("fa-eye-slash");

        icono.classList.add("fa-eye");

    }

}

verActual.addEventListener("click",()=>{

    mostrarPassword(actual,verActual);

});

verNueva.addEventListener("click",()=>{

    mostrarPassword(nueva,verNueva);

});

verConfirmar.addEventListener("click",()=>{

    mostrarPassword(confirmar,verConfirmar);

});


/*=========================================
      VALIDAR REQUISITOS
=========================================*/

function validarPassword(password){

    const tiene8 = password.length >= 8;

    const tieneMayuscula = /[A-Z]/.test(password);

    const tieneMinuscula = /[a-z]/.test(password);

    const tieneNumero = /[0-9]/.test(password);

    caracteres.className = tiene8 ? "correcto" : "";

    mayuscula.className = tieneMayuscula ? "correcto" : "";

    minuscula.className = tieneMinuscula ? "correcto" : "";

    numero.className = tieneNumero ? "correcto" : "";

    return(

        tiene8 &&

        tieneMayuscula &&

        tieneMinuscula &&

        tieneNumero

    );

}

nueva.addEventListener("keyup",()=>{

    validarPassword(nueva.value);

});


/*=========================================
      CONTRASEÑA GUARDADA
=========================================*/

let passwordGuardada =

localStorage.getItem("passwordMiDosis");

if(passwordGuardada===null){

    passwordGuardada="123456";

}


/*=========================================
      CAMBIAR CONTRASEÑA
=========================================*/

formulario.addEventListener("submit",(e)=>{

    e.preventDefault();

    if(actual.value!==passwordGuardada){

        alert("La contraseña actual es incorrecta.");

        actual.focus();

        return;

    }

    if(!validarPassword(nueva.value)){

        alert("La nueva contraseña no cumple los requisitos.");

        nueva.focus();

        return;

    }

    if(nueva.value!==confirmar.value){

        alert("Las contraseñas no coinciden.");

        confirmar.focus();

        return;

    }

    if(nueva.value===actual.value){

        alert("La nueva contraseña debe ser diferente a la anterior.");

        return;

    }

    localStorage.setItem(

        "passwordMiDosis",

        nueva.value

    );

    alert("Contraseña actualizada correctamente.");

    window.location.href="perfil.html";

});


/*=========================================
      EFECTO INPUTS
=========================================*/

const inputs=document.querySelectorAll("input");

inputs.forEach((input)=>{

    input.addEventListener("focus",()=>{

        input.style.background="#EAF3FF";

    });

    input.addEventListener("blur",()=>{

        input.style.background="white";

    });

});


/*=========================================
      ANIMACIÓN BOTONES
=========================================*/

const botones=document.querySelectorAll("button");

botones.forEach((boton)=>{

    boton.addEventListener("mousedown",()=>{

        boton.style.transform="scale(.96)";

    });

    boton.addEventListener("mouseup",()=>{

        boton.style.transform="scale(1)";

    });

});


/*=========================================
      CANCELAR
=========================================*/

const cancelar=document.querySelector(".cancelar");

cancelar.addEventListener("click",()=>{

    const salir=confirm(

        "¿Desea cancelar el cambio de contraseña?"

    );

    if(salir){

        window.location.href="perfil.html";

    }

});


/*=========================================
      MENSAJE DE BIENVENIDA
=========================================*/

console.log("Módulo Cambiar Contraseña iniciado.");


/*=========================================
      FIN
=========================================*/