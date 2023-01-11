
const search = document.querySelector("#buscar")
btnBuscar = document.querySelector("#searchBox")
contenedor = document.querySelector(".grid-containerClothes")



// Array 'remeras':

const remeras = [
    {id:1, nombre: "REMERA NIKE RAFA SLIM POLO HOMBRE", precio: 69000, img: "../assets/img/indumentaria/remera-nike-mens-Rafa-Slim-Polo-sin-background.png"},
    {id:2, nombre: "REMERA NIKE WINTER RAFA CHALLENGER CREW HOMBRE", precio: 79000, img: "../assets/img/indumentaria/remera-nike-mens-winter-rafa-challenger-crew-sin-background.png"},
    {id:3, nombre: "REMERA NIKE CORE RAFA CHALLENGER TOP HOMBRE", precio: 89000, img: "../assets/img/indumentaria/remera-nike-mens-core-rafa-challenger-top-sin-background.png"},
    {id:4, nombre: "CAMPERA NIKE WINTER RAFA JACKET HOMBRE", precio: 89000, img: "../assets/img/indumentaria/remera-nike-mens-winter-rafa-jacket-sin-background.png"},

]

console.log(remeras);

// Función filtrar:

function filtrarRemeras(filtro) {
    let filtrado = remeras.filter((el)=>{
        let nom = el.nombre.toLowerCase()
        return nom.includes(filtro.toLowerCase())
    });
    return filtrado;
}


//Crear HTML:
function crearHtml(array) {
    let html;
    //Construir el html
    
    for (const remera of array) {
        html = 
            `<div class="card-container">
                <div class="card">
                    <div class="card-image">
                        <img src="${remera.img}" alt="">
                        <span class="card-title"></span>
                    </div>
                </div>
                <div class="card-content">
                <h5>${remera.nombre}</h5>
                <h5><span>${remera.precio}</span></h5>
                </div>
                <div class="card-action">
                    <button class="btnBuy" id="${remera.id}">Agregar al carrito <img class="carritoLogo" src="../assets/img/carrito/carrito-de-compras.png" alt="icono carrito de compras"></img></button>
                </div>
            </div>`;
            contenedor.innerHTML += html
    }
}

// Llamar a la función crearHtml:

crearHtml(remeras);


// Eventos Listeners de Busqueda:

btnBuscar.onclick = (e)=>{
    e.preventDefault()
    contenedor.innerHTML = "";
    let filtro = filtrarRemeras(search.value)
    console.log(filtro);
    crearHtml(filtro);
}