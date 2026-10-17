function mostrarPassword(id,icono){

let input=document.getElementById(id);

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

document.getElementById("registroForm").addEventListener("submit",function(e){

e.preventDefault();

let pass=document.getElementById("password").value;

let confirmar=document.getElementById("confirmar").value;

if(pass!==confirmar){

alert("Las contraseñas no coinciden.");

return;

}

window.location.href="Dashboard.html";

});