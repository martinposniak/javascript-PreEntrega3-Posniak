  // CARRITO DE COMPRAS!!
  // Por ejemplo, para recuperar el último estado de un carrito de compras del usuario almacenado en localStorage al iniciar mi app podría hacer esto:
/*
let carrito

let carritoLocalStorage = JSON.parse( localStorage.getItem('carrito') )

if (carritoLocalStorage) {
  carrito = carritoLocalStorage
} else {
  carrito = []
}
*/
//O simplificar el proceso con el operador lógico OR ( || )
// Lo que estamos diciendo es que si en la variable 'carrito' el valor del localStorage es null, se va a guardar como un array vacio [], ahora si tiene contenido, carrito va a ser igual al contenido del localStorage.
/*
const carrito = JSON.parse(localStorage.getItem('carrito')) || []
*/
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const tabla = document.querySelector("#tablaCarrito")


console.log(carrito)




















