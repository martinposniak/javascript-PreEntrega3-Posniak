
const search = document.querySelector("#buscar")
btnBuscar = document.querySelector("#searchBox")
contenedor = document.querySelector(".grid-containerRaquetas")



// Array 'raquetas':

const raquetas = [
    {id:1, nombre: "Babolat Boost USA", precio: 69000, img: "../assets/img/raquetas/babolat/boost/raqueta-babolat-boost-usa-sin-background.png"},
    {id:2, nombre: "Babolat Boost Drive", precio: 79000, img: "../assets/img/raquetas/babolat/boost/raqueta-babolat-boost-drive-sin-background.png"},
    {id:3, nombre: "Babolat Boost Aero Drive Yellow", precio: 89000, img: "../assets/img/raquetas/babolat/boost/raqueta-babolat-boost-aero-yellow-sin-background.png"},
    {id:4, nombre: "Babolat Boost Aero Rafa", precio: 89000, img: "../assets/img/raquetas/babolat/boost/babolat-boost-aero-rafa-sin-background.png"},
    {id:5, nombre: "Babolat Pure Strike VS", precio: 89000, img: "../assets/img/raquetas/babolat/pure-strike/babolat-pure-strike-vs-sin-background.png"},
    {id:6, nombre: "Babolat Pure Strike Tour", precio: 99000, img: "../assets/img/raquetas/babolat/pure-strike/babolat-Pure-Strike-tour-sin-background.png"},
    {id:7, nombre: "Babolat Pure Strike 100", precio: 89000, img: "../assets/img/raquetas/babolat/pure-strike/babolat-Pure-Strike-100-3rd-Gen-sin-background.png"},
    {id:8, nombre: "Babolat Pure Strike 16x19", precio: 99000, img: "../assets/img/raquetas/babolat/pure-strike/babolat-Pure-Strike-16x-19-3rd-Gen-white-and-red-sin-background.png"},
    {id:9, nombre: "Babolat Pure Aero Team 2023", precio: 99000, img: "../assets/img/raquetas/babolat/pure-aero/babolat-Pure-Aero-Team-2023-sin-background.png"},
    {id:10, nombre: "Babolat Pure Aero Team", precio: 99000, img: "../assets/img/raquetas/babolat/pure-aero/babolat-pure-aero-rafa-team-sin-background.png"},
    {id:11, nombre: "Babolat Pure Aero", precio: 99000, img: "../assets/img/raquetas/babolat/pure-aero/babolat-pure-aero-top-seller-sin-background.png"},
    {id:12, nombre: "Babolat Pure Aero Rafa", precio: 79000, img: "../assets/img/raquetas/babolat/pure-aero/babolat-pure-aero-rafa-sin-background.png"},
    {id:13, nombre: "Head Graphene 360 MP", precio: 79000, img: "../assets/img/raquetas/head/graphene/raqueta-head-graphene-360-mp-sin-background.png"},
    {id:14, nombre: "Head Radical Pro", precio: 89000, img: "../assets/img/raquetas/head/radical/head-radical-pro-sin-background.png"},
    {id:15, nombre: "Head Speed Pro 2022 18x20", precio: 89000, img: "../assets/img/raquetas/head/speed/head-Speed-Pro-2022-18x20-sin-background.png"},
    {id:16, nombre: "Head Speed MP 2022 16x19", precio: 89000, img: "../assets/img/raquetas/head/speed/head-Speed-mp-2022-16x19-sin-background.png"},
]

console.log(raquetas);

// Función filtrar:

function filtrarRaquetas(filtro) {
    let filtrado = raquetas.filter((el)=>{
        return el.nombre.includes(filtro);
    });
    return filtrado;
}


//Crear HTML:
function crearHtml(array) {
    let html;
    //Construir el html
    
    for (const raqueta of array) {
        html = 
            `<div class="card-container">
                <div class="card">
                    <div class="card-image">
                        <img src="${raqueta.img}" alt="">
                        <span class="card-title"></span>
                    </div>
                </div>
                <div class="card-content">
                <h4>${raqueta.nombre}</h4>
                <h5><span>${raqueta.precio}</span></h5>
                </div>
                <div class="card-action">
                    <button class="btnBuy" id="${raqueta.id}">Comprar</button>
                </div>
            </div>`;
            contenedor.innerHTML += html
    }
}

// Llamar a la función crearHtml:

crearHtml(raquetas);


// Eventos Listeners de Busqueda:

btnBuscar.onclick = (e)=>{
    e.preventDefault()
    contenedor.innerHTML = "";
    let filtro = filtrarRaquetas(search.value)
    console.log(filtro);
    crearHtml(filtro);
}


