
const search = document.querySelector("#buscar")
btnBuscar = document.querySelector("#searchBox")
contenedor = document.querySelector(".grid-containerPelotas")



// Array 'pelotas':

const pelotas = [
    {id:1, nombre: "TUBO DE PELOTAS DUNLOP AO X 3U", precio: 3500, img: "../assets/img/pelotas/pelotas-tenis-dunlop-australian-open-tubox3-sin-background-280-280.png"},
    {id:2, nombre: "TUBO DE PELOTAS DUNLOP EXTRA DUTY X 3U", precio: 3200, img: "../assets/img/pelotas/pelotas-tenis-dunlop-extra-duty-tubox3-sin-background-280-280.png"},
    {id:3, nombre: "TUBO DE PELOTAS DUNLOP FORT CLAY COURT X 4U", precio: 5500, img:"../assets/img/pelotas/pelotas-tenis-dunlop-fort-clay-court-tubox4-sin-background-280-280.png"},
    {id:4, nombre: "TUBO DE PELOTAS NASSAU SMASH X 3U", precio: 2999, img: "../assets/img/pelotas/pelotas-tenis-nassau-smash-tubox3-sin-background-280-279.png"},
]

console.log(pelotas);

// Función filtrar:

function filtrarPelotas(filtro) {
    let filtrado = pelotas.filter((el)=>{
        let nom = el.nombre.toLowerCase()
        return nom.includes(filtro.toLowerCase())
    });
    return filtrado;
}


//Crear HTML:
function crearHtml(array) {
    let html;
    //Construir el html
    
    for (const pelota of array) {
        html = 
            `<div class="card-container">
                <div class="card">
                    <div class="card-image">
                        <img src="${pelota.img}" alt="">
                        <span class="card-title"></span>
                    </div>
                </div>
                <div class="card-content">
                <h5>${pelota.nombre}</h5>
                <h5><span>${pelota.precio}</span></h5>
                </div>
                <div class="card-action">
                    <button class="btnBuy" id="${pelota.id}">Agregar al carrito <img class="carritoLogo" src="../assets/img/carrito/carrito-de-compras.png" alt="icono carrito de compras"></img></button>
                </div>
            </div>`;
            contenedor.innerHTML += html
    }
}

// Llamar a la función crearHtml:

crearHtml(pelotas);


// Eventos Listeners de Busqueda:

btnBuscar.onclick = (e)=>{
    e.preventDefault()
    contenedor.innerHTML = "";
    let filtro = filtrarPelotas(search.value)
    console.log(filtro);
    crearHtml(filtro);
}