//==========================================
// ELEMENTOS DEL DOM
//==========================================

const btnVolver = document.getElementById("btnVolver");
const btnTomado = document.getElementById("btnTomado");
const btnPosponer = document.getElementById("btnPosponer");
const btnOcultar = document.getElementById("btnOcultar");

const modal = document.getElementById("modalConfirmacion");
const mensajeModal = document.getElementById("mensajeModal");
const cerrarModal = document.getElementById("cerrarModal");

const nombreMedicamento = document.getElementById("nombreMedicamento");
const dosisMedicamento = document.getElementById("dosisMedicamento");
const horaMedicamento = document.getElementById("horaMedicamento");


//==========================================
// BOTÓN REGRESAR
//==========================================

btnVolver.addEventListener("click", () => {

    if (window.history.length > 1) {

        window.history.back();

    } else {

        window.location.href = "index.html";

    }

});


//==========================================
// OBTENER MEDICAMENTOS
//==========================================

function obtenerMedicamentos() {

    return JSON.parse(localStorage.getItem("medicamentos")) || [];

}


//==========================================
// FORMATO HORA
//==========================================

function formatearHora(hora) {

    if (!hora) return "--:--";

    let partes = hora.split(":");

    let h = parseInt(partes[0]);

    let m = partes[1];

    let ampm = h >= 12 ? "PM" : "AM";

    h = h % 12;

    if (h === 0) {

        h = 12;

    }

    return `${h}:${m} ${ampm}`;

}


//==========================================
// CARGAR PRÓXIMO MEDICAMENTO
//==========================================

function cargarRecordatorio() {

    let medicamentos = obtenerMedicamentos();

    if (medicamentos.length === 0) {

        nombreMedicamento.textContent = "Sin medicamentos";

        dosisMedicamento.textContent = "";

        horaMedicamento.textContent = "--:--";

        return;

    }

    // Por ahora toma el primer medicamento registrado
    // Luego podrás cambiarlo para tomar el siguiente según la hora.

    const medicamento = medicamentos[0];

    nombreMedicamento.textContent = medicamento.nombre;

    dosisMedicamento.textContent = medicamento.dosis;

    horaMedicamento.textContent =
        formatearHora(medicamento.hora);

}


//==========================================
// MODAL
//==========================================

function mostrarModal(texto){

    mensajeModal.textContent = texto;

    modal.style.display = "flex";

}

cerrarModal.addEventListener("click",()=>{

    modal.style.display="none";

});

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

});


//==========================================
// BOTÓN TOMADO
//==========================================

btnTomado.addEventListener("click",()=>{

    mostrarModal(

        "¡Excelente! El medicamento fue marcado como tomado."

    );

});


//==========================================
// BOTÓN POSPONER
//==========================================

btnPosponer.addEventListener("click",()=>{

    let medicamentos = obtenerMedicamentos();

    if(medicamentos.length===0){

        return;

    }

    let medicamento = medicamentos[0];

    let partes = medicamento.hora.split(":");

    let fecha = new Date();

    fecha.setHours(parseInt(partes[0]));

    fecha.setMinutes(parseInt(partes[1]));

    fecha.setMinutes(fecha.getMinutes()+15);

    let nuevaHora =

        String(fecha.getHours()).padStart(2,"0")

        +":"

        +

        String(fecha.getMinutes()).padStart(2,"0");

    medicamento.hora = nuevaHora;

    medicamentos[0]=medicamento;

    localStorage.setItem(

        "medicamentos",

        JSON.stringify(medicamentos)

    );

    horaMedicamento.textContent=

        formatearHora(nuevaHora);

    mostrarModal(

        "El recordatorio fue pospuesto 15 minutos."

    );

});


//==========================================
// BOTÓN NO MOSTRAR
//==========================================

btnOcultar.addEventListener("click",()=>{

    localStorage.setItem(

        "ocultarRecordatorio",

        "true"

    );

    mostrarModal(

        "Este recordatorio no volverá a mostrarse."

    );

});


//==========================================
// REVISAR SI ESTÁ OCULTO
//==========================================

function revisarEstado(){

    let oculto =

        localStorage.getItem(

            "ocultarRecordatorio"

        );

    if(oculto==="true"){

        btnTomado.disabled=true;

        btnPosponer.disabled=true;

        btnOcultar.disabled=true;

    }

}


//==========================================
// RESTABLECER RECORDATORIO
//==========================================

function activarRecordatorio(){

    localStorage.removeItem(

        "ocultarRecordatorio"

    );

}


//==========================================
// INICIAR
//==========================================

window.onload=()=>{

    activarRecordatorio();

    cargarRecordatorio();

    revisarEstado();

};