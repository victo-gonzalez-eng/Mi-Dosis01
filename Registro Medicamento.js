//=============================
// BOTÓN REGRESAR
//=============================

const btnRegresar = document.getElementById("btnRegresar");

btnRegresar.addEventListener("click", () => {

    // Si existe una página anterior
    if (window.history.length > 1) {

        window.history.back();

    } else {

        // Cambia "index.html" por tu página principal
        window.location.href = "index.html";

    }

});


//=============================
// FORMULARIO
//=============================

const formulario = document.getElementById("formMedicamento");

const mensaje = document.getElementById("mensaje");


//=============================
// GUARDAR MEDICAMENTO
//=============================

formulario.addEventListener("submit", function (e) {

    e.preventDefault();


    const nombre = document.getElementById("nombre").value.trim();

    const dosis = document.getElementById("dosis").value.trim();

    const frecuencia = document.getElementById("frecuencia").value;

    const hora = document.getElementById("hora").value;

    const fechaInicio = document.getElementById("fechaInicio").value;

    const fechaFinal = document.getElementById("fechaFinal").value;



    //-----------------------------
    // VALIDACIONES
    //-----------------------------

    if (
        nombre === "" ||
        dosis === "" ||
        frecuencia === "" ||
        hora === "" ||
        fechaInicio === ""
    ) {

        mostrarMensaje(
            "Todos los campos obligatorios deben completarse.",
            false
        );

        return;

    }



    if (fechaFinal !== "") {

        const inicio = new Date(fechaInicio);

        const fin = new Date(fechaFinal);

        if (fin < inicio) {

            mostrarMensaje(
                "La fecha final no puede ser menor que la fecha de inicio.",
                false
            );

            return;

        }

    }



    //-----------------------------
    // CREAR OBJETO
    //-----------------------------

    const medicamento = {

        id: Date.now(),

        nombre,

        dosis,

        frecuencia,

        hora,

        fechaInicio,

        fechaFinal

    };



    //-----------------------------
    // OBTENER LOCALSTORAGE
    //-----------------------------

    let medicamentos = JSON.parse(
        localStorage.getItem("medicamentos")
    ) || [];



    medicamentos.push(medicamento);



    localStorage.setItem(
        "medicamentos",
        JSON.stringify(medicamentos)
    );



    //-----------------------------
    // MENSAJE
    //-----------------------------

    mostrarMensaje(
        "Medicamento registrado correctamente.",
        true
    );



    //-----------------------------
    // LIMPIAR
    //-----------------------------

    formulario.reset();

});




//=============================
// MENSAJES
//=============================

function mostrarMensaje(texto, correcto) {

    mensaje.innerHTML = texto;

    mensaje.classList.remove("correcto");

    mensaje.classList.remove("error");

    if (correcto) {

        mensaje.classList.add("correcto");

    } else {

        mensaje.classList.add("error");

    }

    setTimeout(() => {

        mensaje.classList.remove("correcto");

        mensaje.classList.remove("error");

        mensaje.innerHTML = "";

    }, 3000);

}



//=============================
// CARGAR FECHA ACTUAL
//=============================

window.addEventListener("load", () => {

    const hoy = new Date();

    const año = hoy.getFullYear();

    const mes = String(hoy.getMonth() + 1).padStart(2, "0");

    const dia = String(hoy.getDate()).padStart(2, "0");

    document.getElementById("fechaInicio").value =
        `${año}-${mes}-${dia}`;

});




//=============================
// IMPEDIR FECHA FINAL MENOR
//=============================

document
.getElementById("fechaInicio")
.addEventListener("change", function () {

    document
    .getElementById("fechaFinal")
    .min = this.value;

});




//=============================
// SOLO LETRAS EN NOMBRE
//=============================

document
.getElementById("nombre")
.addEventListener("input", function () {

    this.value = this.value.replace(/\s{2,}/g, " ");

});




//=============================
// EVITAR ESPACIOS EN DOSIS
//=============================

document
.getElementById("dosis")
.addEventListener("input", function () {

    this.value = this.value.replace(/\s{2,}/g, " ");

});




//=============================
// CONSULTAR MEDICAMENTOS
//=============================

function obtenerMedicamentos() {

    return JSON.parse(
        localStorage.getItem("medicamentos")
    ) || [];

}




//=============================
// ELIMINAR MEDICAMENTO
//=============================

function eliminarMedicamento(id) {

    let medicamentos = obtenerMedicamentos();

    medicamentos = medicamentos.filter(item => item.id !== id);

    localStorage.setItem(
        "medicamentos",
        JSON.stringify(medicamentos)
    );

}




//=============================
// ACTUALIZAR MEDICAMENTO
//=============================

function actualizarMedicamento(id, datos) {

    let medicamentos = obtenerMedicamentos();

    medicamentos = medicamentos.map(item => {

        if (item.id === id) {

            return {

                ...item,

                ...datos

            };

        }

        return item;

    });

    localStorage.setItem(
        "medicamentos",
        JSON.stringify(medicamentos)
    );

}