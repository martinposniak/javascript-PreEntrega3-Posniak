
const search = document.querySelector("#buscar")
btnBuscar = document.querySelector("#searchBox")
contenedor = document.querySelector(".grid-containerShoes")



// Array 'zapatillas':

const zapatillas = [
    {id:1, nombre: "NIKE REACT VAPOR NXT BLACK/SUNSET LT. BONE", precio: 69000, img: "../assets/img/zapatillas/nike/zapatilla-nike-react-vapor-nxt-black-sunset-lt-bone-mens-shoe-sin-background.png"},
    {id:2, nombre: "NIKE REACT VAPOR NXT DEEP ROYAL BLUE/WHITE", precio: 79000, img: "../assets/img/zapatillas/nike/zapatilla nike-react-vapor-nxt-deep-royal-blue-white-mens-shoe-sin-background.png"},
    {id:3, nombre: "NIKE ZOOM COURT LITE 3 WHITE", precio: 89000, img: "../assets/img/zapatillas/nike/zapatilla-nike-zoom-court-lite-3-white-deep-royal-mens-shoe-sin-background.png"},
    {id:4, nombre: "NIKE AIR ZOOM VAPOR PRO BK MINT/WHITE", precio: 89000, img: "../assets/img/zapatillas/nike/zapatilla-nike-air-zoom-vapor-pro-bk-mint-white-mens-shoe-sin-background.png"},
    {id:5, nombre: "ADIDAS BARRICADE BLACK/WHITE/SOLAR RED", precio: 89000, img: "../assets/img/zapatillas/adidas/adidas-Barricade-White-Black-Solar-Red-Mens-Shoes-sin-background.png"},
    {id:6, nombre: "ADIDAS BARRICADE LAVER CUP BLUE/WHITE", precio: 89000, img: "../assets/img/zapatillas/adidas/adidas-Barricade-laver-cup-white-blue-Mens-Shoes-sin-background.png"},
    {id:7, nombre: "ADIDAS BARRICADE CLAY", precio: 89000, img: "../assets/img/zapatillas/adidas/adidas-Barricade-clay-mens-shoes-sin-background.png"},
    {id:8, nombre: "ADIDAS BARRICADE PURPLE", precio: 89000, img: "../assets/img/zapatillas/adidas/adidas-barricade-purple-sin-background.png"},
    {id:9, nombre: "ASICS SOLUTION SPEED FF 2 INDIGO", precio: 89000, img: "../assets/img/zapatillas/asics/asics-solution-speed-ff-2-indigo-mens-shoes-sin-background.png"},
    {id:10, nombre: "ASICS SOLUTION SPEED FF 2 INDIGO CLAY", precio: 89000, img: "../assets/img/zapatillas/asics/asics-solution-speed-ff-2-indigo-clay-mens-shoes-sin-background.png"},
    {id:11, nombre: "ASICS SOLUTION SPEED FF 2 ELECTRIC RED", precio: 89000, img: "../assets/img/zapatillas/asics/asics-solution-speed-ff-2-electric-red-mens-shoes-sin-background.png"},
    {id:12, nombre: "ASICS SOLUTION SPEED FF 2 GRECKO BLACK", precio: 89000, img: "../assets/img/zapatillas/asics/asics-solution-speed-ff-2-grecko-black-mens-shoes-sin-background.png"},
]

console.log(zapatillas);

// Función filtrar:

function filtrarZapatillas(filtro) {
    let filtrado = zapatillas.filter((el)=>{
        let nom = el.nombre.toLowerCase()
        return nom.includes(filtro.toLowerCase())
    });
    return filtrado;
}


//Crear HTML:
function crearHtml(array) {
    let html;
    //Construir el html
    
    for (const zapatilla of array) {
        html = 
            `<div class="card-container">
                <div class="card">
                    <div class="card-image">
                        <img src="${zapatilla.img}" alt="">
                        <span class="card-title"></span>
                    </div>
                </div>
                <div class="card-content">
                <h5>${zapatilla.nombre}</h5>
                <h5><span>${zapatilla.precio}</span></h5>
                </div>
                <div class="card-action">
                    <button class="btnBuy" id="${zapatilla.id}">Agregar al carrito <img class="carritoLogo" src="../assets/img/carrito/carrito-de-compras.png" alt="icono carrito de compras"></img></button>
                </div>
            </div>`;
            contenedor.innerHTML += html
    }
}

// Llamar a la función crearHtml:

crearHtml(zapatillas);


// Eventos Listeners de Busqueda:

btnBuscar.onclick = (e)=>{
    e.preventDefault()
    contenedor.innerHTML = "";
    let filtro = filtrarZapatillas(search.value)
    console.log(filtro);
    crearHtml(filtro);
}