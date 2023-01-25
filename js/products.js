const search = document.querySelector("#buscar")
contenedor = document.querySelector(".grid-containerProductos")

//let carrito;

async function fetchAPI(){
    const response = await fetch('../data/data.json');
    const datos = await response.json();

    filtrar(datos)
    crearHtml(datos)
}

fetchAPI()

function filtrar(datos){
    const nom = document.querySelector("#buscar");

    btnBuscar = document.querySelector("#searchBox");

    btnBuscar.addEventListener('click', (e)=> {
        e.preventDefault(); 
        filtrarProductos(e, datos, nom);
    })

    crearHtml(datos)
}

function filtrarProductos(e, datos, nom){
    console.log(datos)
    console.log(nom.value)
    e.preventDefault();
    if(!nom){
        crearHtml(datos)
        console.log(datos);
    }else{
        const filtrado = datos.filter(el => el.nombre === nom.value)
        console.log(filtrado);
        crearHtml(filtrado);
    }
}

//Crear HTML:
function crearHtml(productos) {

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




