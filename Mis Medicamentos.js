//=======================================
// ELEMENTOS DEL DOM
//=======================================

const listaMedicamentos = document.getElementById("listaMedicamentos");
const sinMedicamentos = document.getElementById("sinMedicamentos");

const btnAgregar = document.getElementById("btnAgregar");
const btnVolver = document.getElementById("btnVolver");
const btnFiltro = document.getElementById("btnFiltro");

const menuOpciones = document.getElementById("menuOpciones");
const btnEditar = document.getElementById("editarMedicamento");
const btnEliminar = document.getElementById("eliminarMedicamento");
const btnInfo = document.getElementById("verInformacion");

let medicamentoSeleccionado = null;

//=======================================
// BOTÓN REGRESAR
//=======================================

btnVolver.addEventListener("click", () => {

    if (window.history.length > 1) {

        window.history.back();

    } else {

        window.location.href = "index.html";

    }

});

//=======================================
// AGREGAR MEDICAMENTO
//=======================================

btnAgregar.addEventListener("click", () => {

    window.location.href = "registrar-medicamento.html";

});

//=======================================
// FILTRO
//=======================================

btnFiltro.addEventListener("click", () => {

    alert("Aquí puedes implementar filtros por nombre, fecha o frecuencia.");

});

//=======================================
// OBTENER MEDICAMENTOS
//=======================================

function obtenerMedicamentos() {

    return JSON.parse(localStorage.getItem("medicamentos")) || [];

}

//=======================================
// GUARDAR MEDICAMENTOS
//=======================================

function guardarMedicamentos(lista) {

    localStorage.setItem(
        "medicamentos",
        JSON.stringify(lista)
    );

}

//=======================================
// ICONO SEGÚN POSICIÓN
//=======================================

function obtenerColor(indice){

    const colores=[

        "verde",
        "azul",
        "morado"

    ];

    return colores[indice % colores.length];

}

//=======================================
// CREAR TARJETAS
//=======================================

function cargarMedicamentos(){

    const medicamentos = obtenerMedicamentos();

    listaMedicamentos.innerHTML="";

    if(medicamentos.length===0){

        sinMedicamentos.style.display="block";

        return;

    }

    sinMedicamentos.style.display="none";

    medicamentos.forEach((medicamento,indice)=>{

        const color = obtenerColor(indice);

        const card=document.createElement("div");

        card.className="card";

        card.innerHTML=`

            <div class="info">

                <div class="icono ${color}">

                    💊

                </div>

                <div class="detalles">

                    <h3 class="${color}-texto">

                        ${medicamento.nombre}

                    </h3>

                    <p>${medicamento.dosis}</p>

                    <p>${medicamento.frecuencia}</p>

                    <div class="horas">

                        <div class="hora">

                            <i class="fa-regular fa-clock"></i>

                            ${formatearHora(medicamento.hora)}

                        </div>

                    </div>

                </div>

            </div>

            <button
                class="opciones"
                data-id="${medicamento.id}">

                <i class="fa-solid fa-ellipsis-vertical"></i>

            </button>

        `;

        listaMedicamentos.appendChild(card);

    });

    activarOpciones();

}

//=======================================
// FORMATO HORA
//=======================================

function formatearHora(hora){

    if(!hora) return "";

    let partes=hora.split(":");

    let h=parseInt(partes[0]);

    let m=partes[1];

    let ampm=h>=12?"PM":"AM";

    h=h%12;

    if(h===0) h=12;

    return `${h}:${m} ${ampm}`;

}

//=======================================
// BOTONES OPCIONES
//=======================================

function activarOpciones(){

    document.querySelectorAll(".opciones")
    .forEach(boton=>{

        boton.addEventListener("click",(e)=>{

            medicamentoSeleccionado=Number(
                e.currentTarget.dataset.id
            );

            menuOpciones.style.display="block";

            menuOpciones.style.left=
                (e.pageX-160)+"px";

            menuOpciones.style.top=
                (e.pageY+10)+"px";

        });

    });

}

//=======================================
// CERRAR MENÚ
//=======================================

document.addEventListener("click",(e)=>{

    if(
        !menuOpciones.contains(e.target)
        &&
        !e.target.closest(".opciones")
    ){

        menuOpciones.style.display="none";

    }

});

//=======================================
// ELIMINAR
//=======================================

btnEliminar.addEventListener("click",()=>{

    if(medicamentoSeleccionado===null) return;

    if(confirm("¿Eliminar este medicamento?")){

        let medicamentos=obtenerMedicamentos();

        medicamentos=medicamentos.filter(item=>{

            return item.id!==medicamentoSeleccionado;

        });

        guardarMedicamentos(medicamentos);

        cargarMedicamentos();

    }

    menuOpciones.style.display="none";

});

//=======================================
// EDITAR
//=======================================

btnEditar.addEventListener("click",()=>{

    if(medicamentoSeleccionado===null) return;

    localStorage.setItem(

        "editarMedicamento",

        medicamentoSeleccionado

    );

    window.location.href="registrar-medicamento.html";

});

//=======================================
// INFORMACIÓN
//=======================================

btnInfo.addEventListener("click",()=>{

    if(medicamentoSeleccionado===null) return;

    const medicamentos=obtenerMedicamentos();

    const med=medicamentos.find(item=>{

        return item.id===medicamentoSeleccionado;

    });

    if(med){

        alert(

`Medicamento: ${med.nombre}

Dosis: ${med.dosis}

Frecuencia: ${med.frecuencia}

Hora: ${formatearHora(med.hora)}

Fecha inicio: ${med.fechaInicio}

Fecha final: ${med.fechaFinal || "No definida"}`

        );

    }

    menuOpciones.style.display="none";

});

//=======================================
// INICIAR
//=======================================

cargarMedicamentos();