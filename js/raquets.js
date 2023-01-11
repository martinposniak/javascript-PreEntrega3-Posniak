
const search = document.querySelector("#buscar")
btnBuscar = document.querySelector("#searchBox")
contenedor = document.querySelector(".grid-containerRaquetas")



// Array 'raquetas':

const raquetas = [
    {id:1, nombre: "BABOLAT BOOST USA", precio: 69000, img: "../assets/img/raquetas/babolat/boost/raqueta-babolat-boost-usa-sin-background.png"},
    {id:2, nombre: "BABOLAT BOOST DRIVE", precio: 79000, img: "../assets/img/raquetas/babolat/boost/raqueta-babolat-boost-drive-sin-background.png"},
    {id:3, nombre: "BABOLAT BOOST AERO DRIVE YELLOW", precio: 89000, img: "../assets/img/raquetas/babolat/boost/raqueta-babolat-boost-aero-yellow-sin-background.png"},
    {id:4, nombre: "BABOLAT BOOST AERO RAFA", precio: 89000, img: "../assets/img/raquetas/babolat/boost/babolat-boost-aero-rafa-sin-background.png"},
    {id:5, nombre: "BABOLAT PURE STRIKE VS", precio: 89000, img: "../assets/img/raquetas/babolat/pure-strike/babolat-pure-strike-vs-sin-background.png"},
    {id:6, nombre: "BABOLAT PURE STRIKE TOUR", precio: 99000, img: "../assets/img/raquetas/babolat/pure-strike/babolat-Pure-Strike-tour-sin-background.png"},
    {id:7, nombre: "BABOLAT PURE STRIKE 100", precio: 89000, img: "../assets/img/raquetas/babolat/pure-strike/babolat-Pure-Strike-100-3rd-Gen-sin-background.png"},
    {id:8, nombre: "BABOLAT PURE STRIKE 16x19", precio: 99000, img: "../assets/img/raquetas/babolat/pure-strike/babolat-Pure-Strike-16x-19-3rd-Gen-white-and-red-sin-background.png"},
    {id:9, nombre: "BABOLAT PURE AERO TEAM 2023", precio: 99000, img: "../assets/img/raquetas/babolat/pure-aero/babolat-Pure-Aero-Team-2023-sin-background.png"},
    {id:10, nombre: "BABOLAT PURE AERO TEAM", precio: 99000, img: "../assets/img/raquetas/babolat/pure-aero/babolat-pure-aero-rafa-team-sin-background.png"},
    {id:11, nombre: "BABOLAT PURE AERO", precio: 99000, img: "../assets/img/raquetas/babolat/pure-aero/babolat-pure-aero-top-seller-sin-background.png"},
    {id:12, nombre: "BABOLAT PURE AERO RAFA", precio: 79000, img: "../assets/img/raquetas/babolat/pure-aero/babolat-pure-aero-rafa-sin-background.png"},
    {id:13, nombre: "Head GRAPHENE 360 MP", precio: 79000, img: "../assets/img/raquetas/head/graphene/raqueta-head-graphene-360-mp-sin-background.png"},
    {id:14, nombre: "Head RADICAL PRO", precio: 89000, img: "../assets/img/raquetas/head/radical/head-radical-pro-sin-background.png"},
    {id:15, nombre: "Head SPEED PRO 2022 18x20", precio: 89000, img: "../assets/img/raquetas/head/speed/head-Speed-Pro-2022-18x20-sin-background.png"},
    {id:16, nombre: "Head SPEED MP 2022 16x19", precio: 89000, img: "../assets/img/raquetas/head/speed/head-Speed-mp-2022-16x19-sin-background.png"},
]

console.log(raquetas);


// Función filtrar:

function filtrarRaquetas(filtro) {
    let filtrado = raquetas.filter((el)=>{
        let nom = el.nombre.toLowerCase()
        return nom.includes(filtro.toLowerCase())
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
                <h5>${raqueta.nombre}</h5>
                <h5><span>${raqueta.precio}</span></h5>
                </div>
                <div class="card-action">
                    <button class="btnBuy" id="${raqueta.id}">Agregar al carrito <img class="carritoLogo" src="../assets/img/carrito/carrito-de-compras.png" alt="icono carrito de compras"></img></button>
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


