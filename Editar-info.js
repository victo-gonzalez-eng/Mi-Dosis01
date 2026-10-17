/*=========================================
        EDITAR PERFIL - MiDosis
=========================================*/

/*=========================================
        VARIABLES
=========================================*/

const formulario = document.getElementById("formulario");

const imagen = document.getElementById("imagen");

const foto = document.getElementById("foto");

const nombre = document.getElementById("nombre");

const apellido = document.getElementById("apellido");

const correo = document.getElementById("correo");

const telefono = document.getElementById("telefono");

const fecha = document.getElementById("fecha");

const genero = document.getElementById("genero");

const direccion = document.getElementById("direccion");

const grupo = document.getElementById("grupo");

const contacto = document.getElementById("contacto");

const telefonoEmergencia = document.getElementById("telefonoEmergencia");


/*=========================================
        CAMBIAR FOTO
=========================================*/

imagen.addEventListener("change", function(){

    const archivo = this.files[0];

    if(archivo){

        const lector = new FileReader();

        lector.onload = function(e){

            foto.src = e.target.result;

        }

        lector.readAsDataURL(archivo);

    }

});


/*=========================================
        VALIDAR CORREO
=========================================*/

function correoValido(email){

    const expresion =

    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return expresion.test(email);

}


/*=========================================
        VALIDAR TELÉFONO
=========================================*/

function telefonoValido(numero){

    return numero.length >= 10;

}


/*=========================================
        GUARDAR DATOS
=========================================*/

formulario.addEventListener("submit",function(e){

e.preventDefault();

if(nombre.value.trim()===""){

alert("Ingrese su nombre");

nombre.focus();

return;

}

if(apellido.value.trim()===""){

alert("Ingrese su apellido");

apellido.focus();

return;

}

if(!correoValido(correo.value)){

alert("Ingrese un correo válido");

correo.focus();

return;

}

if(telefono.value!="" &&

!telefonoValido(telefono.value)){

alert("El teléfono debe tener mínimo 10 dígitos");

telefono.focus();

return;

}

if(contacto.value==="" ){

alert("Ingrese el contacto de emergencia");

contacto.focus();

return;

}

if(telefonoEmergencia.value==="" ){

alert("Ingrese el teléfono del contacto");

telefonoEmergencia.focus();

return;

}


/*=========================================
        GUARDAR EN LOCALSTORAGE
=========================================*/

const usuario={

nombre:nombre.value,

apellido:apellido.value,

correo:correo.value,

telefono:telefono.value,

fecha:fecha.value,

genero:genero.value,

direccion:direccion.value,

grupo:grupo.value,

contacto:contacto.value,

telefonoEmergencia:telefonoEmergencia.value

};

localStorage.setItem(

"usuarioMiDosis",

JSON.stringify(usuario)

);

alert(

"Información actualizada correctamente"

);

window.location.href="perfil.html";

});


/*=========================================
        CARGAR DATOS
=========================================*/

window.addEventListener("load",()=>{

const datos=

JSON.parse(

localStorage.getItem("usuarioMiDosis")

);

if(datos){

nombre.value=datos.nombre;

apellido.value=datos.apellido;

correo.value=datos.correo;

telefono.value=datos.telefono;

fecha.value=datos.fecha;

genero.value=datos.genero;

direccion.value=datos.direccion;

grupo.value=datos.grupo;

contacto.value=datos.contacto;

telefonoEmergencia.value=datos.telefonoEmergencia;

}

});


/*=========================================
        EFECTO INPUTS
=========================================*/

const inputs=document.querySelectorAll(

"input,select"

);

inputs.forEach((campo)=>{

campo.addEventListener("focus",()=>{

campo.style.background="#EAF3FF";

});

campo.addEventListener("blur",()=>{

campo.style.background="white";

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

const cancelar=

document.querySelector(".cancelar");

cancelar.addEventListener("click",()=>{

const salir=

confirm(

"¿Desea cancelar los cambios?"

);

if(salir){

window.location.href="perfil.html";

}

});


/*=========================================
        MENSAJE BIENVENIDA
=========================================*/

console.log(

"Editar Perfil iniciado correctamente."

);


/*=========================================
        FIN
=========================================*/