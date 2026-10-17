/*=================================================
        CONFIGURACIÓN - MiDosis
=================================================*/

/*=================================================
            VARIABLES
=================================================*/

const guardar = document.getElementById("guardar");

const cerrarSesion = document.getElementById("cerrarSesion");

const modoOscuro = document.getElementById("modoOscuro");

const idioma = document.getElementById("idioma");

const tamanoTexto = document.getElementById("tamanoTexto");

const recordatorios = document.getElementById("recordatorios");

const sonido = document.getElementById("sonido");

const vibracion = document.getElementById("vibracion");


/*=================================================
        CARGAR CONFIGURACIÓN
=================================================*/

window.addEventListener("load",()=>{

    if(localStorage.getItem("modoOscuro")=="true"){

        document.body.classList.add("dark");

        modoOscuro.checked=true;

    }

    if(localStorage.getItem("idioma")){

        idioma.value=

        localStorage.getItem("idioma");

    }

    if(localStorage.getItem("tamanoTexto")){

        tamanoTexto.value=

        localStorage.getItem("tamanoTexto");

        document.body.style.fontSize=

        tamanoTexto.value+"px";

    }

    recordatorios.checked=

    localStorage.getItem("recordatorios")!="false";

    sonido.checked=

    localStorage.getItem("sonido")!="false";

    vibracion.checked=

    localStorage.getItem("vibracion")!="false";

});


/*=================================================
        MODO OSCURO
=================================================*/

modoOscuro.addEventListener("change",()=>{

    document.body.classList.toggle("dark");

});


/*=================================================
        TAMAÑO DEL TEXTO
=================================================*/

tamanoTexto.addEventListener("change",()=>{

    document.body.style.fontSize=

    tamanoTexto.value+"px";

});


/*=================================================
        GUARDAR CONFIGURACIÓN
=================================================*/

guardar.addEventListener("click",()=>{

    localStorage.setItem(

        "modoOscuro",

        modoOscuro.checked

    );

    localStorage.setItem(

        "idioma",

        idioma.value

    );

    localStorage.setItem(

        "tamanoTexto",

        tamanoTexto.value

    );

    localStorage.setItem(

        "recordatorios",

        recordatorios.checked

    );

    localStorage.setItem(

        "sonido",

        sonido.checked

    );

    localStorage.setItem(

        "vibracion",

        vibracion.checked

    );

    alert(

        "Configuración guardada correctamente."

    );

});


/*=================================================
        CERRAR SESIÓN
=================================================*/

cerrarSesion.addEventListener("click",()=>{

    const salir=

    confirm(

        "¿Desea cerrar la sesión?"

    );

    if(salir){

        localStorage.removeItem("usuarioActivo");

        window.location.href="index.html";

    }

});


/*=================================================
        ACERCA DE
=================================================*/

document.querySelectorAll(".item").forEach((item)=>{

    item.addEventListener("click",(e)=>{

        const texto=item.innerText;

        if(texto.includes("Acerca")){

            e.preventDefault();

            alert(

`MiDosis

Versión 1.0

Aplicación diseñada para ayudar a los pacientes a administrar sus medicamentos de forma segura y oportuna.

Desarrollado por:
Víctor González.`

            );

        }

    });

});


/*=================================================
        POLÍTICAS
=================================================*/

document.querySelectorAll(".item").forEach((item)=>{

    item.addEventListener("click",(e)=>{

        const texto=item.innerText;

        if(texto.includes("Política")){

            e.preventDefault();

            alert(

"Las políticas de privacidad estarán disponibles en la versión final de MiDosis."

            );

        }

    });

});


/*=================================================
        TÉRMINOS
=================================================*/

document.querySelectorAll(".item").forEach((item)=>{

    item.addEventListener("click",(e)=>{

        const texto=item.innerText;

        if(texto.includes("Términos")){

            e.preventDefault();

            alert(

"Los términos y condiciones serán publicados junto con la versión oficial."

            );

        }

    });

});


/*=================================================
        EFECTOS BOTONES
=================================================*/

document.querySelectorAll("button").forEach((boton)=>{

    boton.addEventListener("mousedown",()=>{

        boton.style.transform="scale(.96)";

    });

    boton.addEventListener("mouseup",()=>{

        boton.style.transform="scale(1)";

    });

});


/*=================================================
        EFECTO TARJETAS
=================================================*/

document.querySelectorAll(".tarjeta").forEach((tarjeta)=>{

    tarjeta.addEventListener("mouseover",()=>{

        tarjeta.style.transform="translateY(-3px)";

    });

    tarjeta.addEventListener("mouseout",()=>{

        tarjeta.style.transform="translateY(0px)";

    });

});


/*=================================================
        MENSAJE BIENVENIDA
=================================================*/

console.log(

"Configuración iniciada correctamente."

);


/*=================================================
        FIN
=================================================*/