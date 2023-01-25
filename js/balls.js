/*
const search = document.querySelector("#buscar")
btnBuscar = document.querySelector("#searchBox")
contenedor = document.querySelector(".grid-containerPelotas")



// Array 'pelotas':


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
*/