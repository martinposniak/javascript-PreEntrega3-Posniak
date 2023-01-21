const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const tabla = document.querySelector("#tablaCarrito")

console.log(carrito)

if (carrito.length) {
  for (const p of carrito) {
    tabla.innerHTML += `
    <tr class="raquetaEnCarritoContenedor">
      <td><img class="carritoImage" src="${p.img}" alt=""></td>
      <td class="carritoName"><h5>${p.nombre}</h5></td>
      <td class="carritoPrice"><span>${p.precio}</span></td>
      <td><input id="btnResta"${/* p.cantidad */1}</td>
      <td class="carritoPriceTotal">${/* p.precio * cantidad */ p.precio}</td>
    </tr>
    `
  }
}
else {
  tabla.innerHTML = `<h2>No hay productos en el carrito</h2>`
}



























