function renderizar(){
    if (carrito.length) {
      for (const p of carrito) {
        tabla.innerHTML += `
        <tr class="raquetaEnCarritoContenedor">
          <td><img class="carritoImage" src="${p.img}" alt=""></td>
          <td class="carritoName"><h5>${p.nombre}</h5></td>
          <td class="carritoPrice"><span>${p.precio}</span></td>
          <td class="td-input"><input id="btnResta${p.id}" class="btnRe" type="button" value="-"> <h5 class="cantidadCarrito" id="cantidadCarritoTabla">${p.cantidad}</h5><input id="btnSuma1" class="btnSu" value="+" type="button"></input></td>
          <td class="carritoPriceTotal">${/* p.precio * cantidad */ p.precio}</td>
        </tr>
        `
      }
    }
    else {
      tabla.innerHTML = `<h2>No hay productos en el carrito</h2>`
    }
    const btnLimpiarTodoElCarrito = document.querySelectorAll("#limpiarCarrito")
    for (const btnLimpiar of btnLimpiarTodoElCarrito) {
      btnLimpiar.addEventListener("click", () => {
        eliminarTodoElCarrito()
      });
  }
  }
  
  renderizar()
  
  
  
  
  
  const eliminarTodoElCarrito = () => {
    localStorage.setItem("carrito", []);
    carrito.splice(0, carrito.length);
    renderizar()
  };

  
  function suma(id) {
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if (productoEnCarrito.cantidad) {
      productoEnCarrito.cantidad++;
      console.log(`se agrego otro ${productoEnCarrito.nombreJuego} al Carrito!`);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  }
  
  function resta(id) {
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if (productoEnCarrito.cantidad > 1) {
      productoEnCarrito.cantidad--;
      localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
      productoEnCarrito.cantidad = 1;
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  }