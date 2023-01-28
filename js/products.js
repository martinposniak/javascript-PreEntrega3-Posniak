const search = document.querySelector("#buscar")
contenedor = document.querySelector(".grid-containerProductos")



// Si bien esta variable está bien declarada, se me rompe el codigo porque JSON.parse no puede convertir un variable vacía. 
//let carrito = JSON.parse(localStorage.getItem('carrito')) || []; 


//let carrito = localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : [];

//// Entonces, para eso declaramos de la siguiente forma , diciendo que si existe algo en el LS, que me lo traiga parseado mi array carrito, y sino no hay nada, no pasa nada y la variable carrito sigue siendo un array vació.
let carrito = [];
if(localStorage.getItem('carrito'))
carrito = JSON.parse(localStorage.getItem('carrito'));


// O tambien lo podemos declarar en una sola linea:
// //let carrito = localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : [];

async function fetchAPI(){
    const response = await fetch('../data/data.json');
    const datos = await response.json();

    filtrar(datos)
    crearHtml(datos)
}

fetchAPI()

function filtrar(datos){
    const nombreProd = document.querySelector("#buscar");
    btnBuscar = document.querySelector("#searchBox");

    // Como mi script products.js lo tengo linkeado en carrito.html hay varias cosas a las cuales yo no puedo acceder en carrito.html porque no existen. Entonces yo antes solamente le estaba agregandole un evento al btnBuscar. Este btnBuscar no existe en carrito.html (el id="searchBox" existe solamente en products.html). Y como yo estaba compartiendo el mismo script, para que no rompa el codigo, lo que hice fue validar con un condicional if, para ver si existe.  

    if(btnBuscar) {
    btnBuscar.addEventListener('click', (e)=> {
        e.preventDefault(); 
        filtrarProductos(datos, nombreProd);
    })
}
    crearHtml(datos);
}

function filtrarProductos(datos, nombreProd){
    console.log(datos)
    console.log(nombreProd.value)
    const producto = (nombreProd.value).toUpperCase();
    if(!producto){
        crearHtml(datos)
        console.log(datos);
    }else{
        const filtrado = datos.filter((el)=>{
            let nom = el.nombre.toUpperCase()
            return nom.includes(producto.toUpperCase());
        });
        console.log(filtrado);
        crearHtml(filtrado);
    }
}

//Crear HTML:
function crearHtml(productos) {
// Al igual que en la linea 24 para validar el btnBuscar, acá tambien puse en el contenedor, un condicional if, para validar, ya que yo estaba exhibiendo un contenedor que no existe en carrito.html. Entonces lo que hice acá fue validar si existe o no este contenedor:

if(contenedor){
    contenedor.innerHTML = "";
    //Construir el html
    productos.forEach(producto => {
        let prodCard = document.createElement('div');
        //console.log(producto)
        prodCard.innerHTML =
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
        contenedor.appendChild(prodCard);
    })
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




