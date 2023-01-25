const search = document.querySelector("#buscar")
btnBuscar = document.querySelector("#searchBox")
contenedor = document.querySelector(".grid-containerProductos")





// Array 'raquetas':
/*
const productos = [
    { id: 1, nombre: "BABOLAT BOOST USA", precio: 69000, img: "../assets/img/raquetas/babolat/boost/raqueta-babolat-boost-usa-sin-background.png", categoria: "raquets"},
    { id: 2, nombre: "BABOLAT BOOST DRIVE", precio: 79000, img: "../assets/img/raquetas/babolat/boost/raqueta-babolat-boost-drive-sin-background.png", categoria: "raquets"},
    { id: 3, nombre: "BABOLAT BOOST AERO DRIVE YELLOW", precio: 89000, img: "../assets/img/raquetas/babolat/boost/raqueta-babolat-boost-aero-yellow-sin-background.png", categoria: "raquets"},
    { id: 4, nombre: "BABOLAT BOOST AERO RAFA", precio: 89000, img: "../assets/img/raquetas/babolat/boost/babolat-boost-aero-rafa-sin-background.png", categoria: "raquets"},
    { id: 5, nombre: "BABOLAT PURE STRIKE VS", precio: 89000, img: "../assets/img/raquetas/babolat/pure-strike/babolat-pure-strike-vs-sin-background.png", categoria: "raquets"},
    { id: 6, nombre: "BABOLAT PURE STRIKE TOUR", precio: 99000, img: "../assets/img/raquetas/babolat/pure-strike/babolat-Pure-Strike-tour-sin-background.png", categoria: "raquets"},
    { id: 7, nombre: "BABOLAT PURE STRIKE 100", precio: 89000, img: "../assets/img/raquetas/babolat/pure-strike/babolat-Pure-Strike-100-3rd-Gen-sin-background.png", categoria: "raquets"},
    { id: 8, nombre: "BABOLAT PURE STRIKE 16x19", precio: 99000, img: "../assets/img/raquetas/babolat/pure-strike/babolat-Pure-Strike-16x-19-3rd-Gen-white-and-red-sin-background.png", categoria: "raquets"},
    { id: 9, nombre: "BABOLAT PURE AERO TEAM 2023", precio: 99000, img: "../assets/img/raquetas/babolat/pure-aero/babolat-Pure-Aero-Team-2023-sin-background.png", categoria: "raquets"},
    { id: 10, nombre: "BABOLAT PURE AERO TEAM", precio: 99000, img: "../assets/img/raquetas/babolat/pure-aero/babolat-pure-aero-rafa-team-sin-background.png", categoria: "raquets"},
    { id: 11, nombre: "BABOLAT PURE AERO", precio: 99000, img: "../assets/img/raquetas/babolat/pure-aero/babolat-pure-aero-top-seller-sin-background.png", categoria: "raquets"},
    { id: 12, nombre: "BABOLAT PURE AERO RAFA", precio: 79000, img: "../assets/img/raquetas/babolat/pure-aero/babolat-pure-aero-rafa-sin-background.png", categoria: "raquets"},
    { id: 13, nombre: "Head GRAPHENE 360 MP", precio: 79000, img: "../assets/img/raquetas/head/graphene/raqueta-head-graphene-360-mp-sin-background.png", categoria: "raquets"},
    { id: 14, nombre: "Head RADICAL PRO", precio: 89000, img: "../assets/img/raquetas/head/radical/head-radical-pro-sin-background.png", categoria: "raquets"},
    { id: 15, nombre: "Head SPEED PRO 2022 18x20", precio: 89000, img: "../assets/img/raquetas/head/speed/head-Speed-Pro-2022-18x20-sin-background.png", categoria: "raquets"},
    { id: 16, nombre: "Head SPEED MP 2022 16x19", precio: 89000, img: "../assets/img/raquetas/head/speed/head-Speed-mp-2022-16x19-sin-background.png", categoria: "raquets"},
    { id:17, nombre: "NIKE REACT VAPOR NXT BLACK/SUNSET LT. BONE", precio: 69000, img: "../assets/img/zapatillas/nike/zapatilla-nike-react-vapor-nxt-black-sunset-lt-bone-mens-shoe-sin-background.png", categoria: "shoes"},
    { id:18, nombre: "NIKE REACT VAPOR NXT DEEP ROYAL BLUE/WHITE", precio: 79000, img: "../assets/img/zapatillas/nike/zapatilla nike-react-vapor-nxt-deep-royal-blue-white-mens-shoe-sin-background.png", categoria: "shoes"},
    { id:19, nombre: "NIKE ZOOM COURT LITE 3 WHITE", precio: 89000, img: "../assets/img/zapatillas/nike/zapatilla-nike-zoom-court-lite-3-white-deep-royal-mens-shoe-sin-background.png", categoria: "shoes"},
    { id:20, nombre: "NIKE AIR ZOOM VAPOR PRO BK MINT/WHITE", precio: 89000, img: "../assets/img/zapatillas/nike/zapatilla-nike-air-zoom-vapor-pro-bk-mint-white-mens-shoe-sin-background.png", categoria: "shoes"},
    { id:21, nombre: "ADIDAS BARRICADE BLACK/WHITE/SOLAR RED", precio: 89000, img: "../assets/img/zapatillas/adidas/adidas-Barricade-White-Black-Solar-Red-Mens-Shoes-sin-background.png", categoria: "shoes"},
    { id:22, nombre: "ADIDAS BARRICADE LAVER CUP BLUE/WHITE", precio: 89000, img: "../assets/img/zapatillas/adidas/adidas-Barricade-laver-cup-white-blue-Mens-Shoes-sin-background.png", categoria: "shoes"},
    { id:23, nombre: "ADIDAS BARRICADE CLAY", precio: 89000, img: "../assets/img/zapatillas/adidas/adidas-Barricade-clay-mens-shoes-sin-background.png", categoria: "shoes"},
    { id:24, nombre: "ADIDAS BARRICADE PURPLE", precio: 89000, img: "../assets/img/zapatillas/adidas/adidas-barricade-purple-sin-background.png", categoria: "shoes"},
    { id:25, nombre: "ASICS SOLUTION SPEED FF 2 INDIGO", precio: 89000, img: "../assets/img/zapatillas/asics/asics-solution-speed-ff-2-indigo-mens-shoes-sin-background.png", categoria: "shoes"},
    { id:26, nombre: "ASICS SOLUTION SPEED FF 2 INDIGO CLAY", precio: 89000, img: "../assets/img/zapatillas/asics/asics-solution-speed-ff-2-indigo-clay-mens-shoes-sin-background.png", categoria: "shoes"},
    { id:27, nombre: "ASICS SOLUTION SPEED FF 2 ELECTRIC RED", precio: 89000, img: "../assets/img/zapatillas/asics/asics-solution-speed-ff-2-electric-red-mens-shoes-sin-background.png", categoria: "shoes"},
    { id:28, nombre: "ASICS SOLUTION SPEED FF 2 GRECKO BLACK", precio: 89000, img: "../assets/img/zapatillas/asics/asics-solution-speed-ff-2-grecko-black-mens-shoes-sin-background.png", categoria: "shoes"},
    { id:29, nombre: "REMERA NIKE RAFA SLIM POLO HOMBRE", precio: 69000, img: "../assets/img/indumentaria/remera-nike-mens-Rafa-Slim-Polo-sin-background.png", categoria: "clothes"},
    { id:30, nombre: "REMERA NIKE WINTER RAFA CHALLENGER CREW HOMBRE", precio: 79000, img: "../assets/img/indumentaria/remera-nike-mens-winter-rafa-challenger-crew-sin-background.png", categoria: "clothes"},
    { id:31, nombre: "REMERA NIKE CORE RAFA CHALLENGER TOP HOMBRE", precio: 89000, img: "../assets/img/indumentaria/remera-nike-mens-core-rafa-challenger-top-sin-background.png", categoria: "clothes"},
    { id:32, nombre: "CAMPERA NIKE WINTER RAFA JACKET HOMBRE", precio: 89000, img: "../assets/img/indumentaria/remera-nike-mens-winter-rafa-jacket-sin-background.png", categoria: "clothes"},
    { id:33, nombre: "TUBO DE PELOTAS DUNLOP AO X 3U", precio: 3500, img: "../assets/img/pelotas/pelotas-tenis-dunlop-australian-open-tubox3-sin-background-280-280.png", categoria: "balls"},
    { id:34, nombre: "TUBO DE PELOTAS DUNLOP EXTRA DUTY X 3U", precio: 3200, img: "../assets/img/pelotas/pelotas-tenis-dunlop-extra-duty-tubox3-sin-background-280-280.png", categoria: "balls"},
    { id:35, nombre: "TUBO DE PELOTAS DUNLOP FORT CLAY COURT X 4U", precio: 5500, img:"../assets/img/pelotas/pelotas-tenis-dunlop-fort-clay-court-tubox4-sin-background-280-280.png", categoria: "balls"},
    { id:36, nombre: "TUBO DE PELOTAS NASSAU SMASH X 3U", precio: 2999, img: "../assets/img/pelotas/pelotas-tenis-nassau-smash-tubox3-sin-background-280-279.png", categoria: "balls"},

]
*/
//let carrito;

 async function fetchAPI(){
    const response = await fetch('../data/data.json');
    const datos = await response.json();

    filtrar(datos)
    crearHtml(datos)
}

fetchAPI()

function filtrar(datos){
    const categ = document.querySelector("#buscar")
    
    if(!categ){
        crearHtml(datos)
        console.log(datos);
    }else{
        const filtrado = datos.filter(el => el.categoria === categ)
        crearHtml(filtrado);
        console.log(filtrado);
    }
}


// Función filtrar:

function filtrarProductos(filtro) {
    let filtrado = datos.filter((el) => {
        let nom = el.nombre.toLowerCase()
        return nom.includes(filtro.toLowerCase())
    });
    return filtrado;
}


// Eventos Listeners de Busqueda:

btnBuscar.onclick = (e) => {
    e.preventDefault()
    contenedor.innerHTML = "";
    let filtro = filtrarProductos(search.value)
    console.log(filtro);
    crearHtml(filtro);
}


//Crear HTML:
function crearHtml(productos) {
    let html;
    //Construir el html

    for (const producto of productos) {
        html =
            `<div class="card-container">
                <div class="card">
                    <div class="card-image">
                        <img src="${producto.img}" alt="">
                        <span class="card-title"></span>
                    </div>
                </div>
                <div class="card-content">
                <h5>${producto.nombre}</h5>
                <h5><span>${producto.precio}</span></h5>
                </div>
                <div class="card-action">
                    <button class="btnBuy" id="${producto.id}">Agregar al carrito <img class="carritoLogo" src="../assets/img/carrito/carrito-de-compras.png" alt="icono carrito de compras"></img></button>
                </div>
            </div>`;
        contenedor.innerHTML += html
    }

    const btnComprar = document.querySelectorAll(".btnBuy")
    for (const btn of btnComprar) {
        btn.addEventListener("click", () => {
            const producto = productos.find(prod => prod.id === parseInt(btn.id))
            if(btn){
                Swal.fire({
                    position: 'center-center',
                    icon: 'success',
                    title: 'Se agregó a tu carrito de compras',
                    showConfirmButton: false,
                    timer: 2500
                  })
                //document.querySelector(".mensajeReg2").innerHTML = "Muchas gracias " + nombre.value + "!" + " ya puedes iniciar sesión " + "!";
            }
            carrito.push(producto)
            console.log(carrito)
            guardarCarritoEnStorage(carrito)
        });
    }
};











function guardarCarritoEnStorage(elemento) {
    return localStorage.setItem('carrito', JSON.stringify(elemento))
}

function recuperarLS() {
    let datosCarrito = JSON.parse(localStorage.getItem("carrito"));
    return datosCarrito;
}

/*
if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
} else {
    carrito.empty();
}
*/






 //localStorage.clear(carrito)



