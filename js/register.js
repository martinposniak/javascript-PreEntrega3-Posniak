// Acceso a nodos:
// Lo vamos a guardar en variables:
/*
const section = document.getElementById('pantalla-dividida')
console.log(section);

const imagen = document.getElementsByClassName("izquierda")
console.log(imagen);

const registro = document.getElementsByClassName("register")
console.log(registro);

const boton = document.getElementsByClassName("input-box")
console.log(boton);
*/

/*
console.log(boton[0].innerHTML);
console.log(boton[1].innerHTML);
console.log(boton[2].innerHTML);
console.log(boton[3].innerHTML);

const casilla = document.getElementsByClassName("check-box")
console.log(casilla);
*/
// A través del bucle for of, Vamos a recorrer los nodo texto de los elementos de los input que contengan la clase input-box de nuestro HTML
/*
for (const botones of boton) {
    console.log(botones.innerText);
}
*/
// A continuación vemos como podemos crear y modificar el contenido del nodo texto (a traves de innerText) de lo que nosotros queramos del HTML desde JS. El problema es que lo que creamos acá con innerText, lo hace literal, es decir, en la pagina web se va a ver incluso las etiquetas "<h2>Estoy siendo modificado</h2>". Es por eso que si queremos crear una etiqueta HTML, es mejor utilizar el metodo innerHTML, ya que de esta manera no aparecen las etiquetas en los costados.
/*
const label = document.getElementById('labelUser')

label.innerText = "<h2>Estoy siendo modificado</h2>"
*/

// A continuación vemos como podemos crear una etiqueta HTML (a traves de innerHTML) de lo que nosotros queramos desde JS:
/*
const label = document.getElementById('labelUser')

label.innerHTML = "<h2>RAQUETAS DE TENIS</h2>"
*/
/*
btnLogin = document.querySelector('#btnLogin')
console.log(btnLogin);
*/
// Le voy a agregar un evento click al boton 'ingresar'
/*
btnLogin.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log("Hiciste click en el boton ingresar");
})
*/
/*
btnLogin.addEventListener('submit',(e)=>{
    e.preventDefault()
})
*/


const registro = document.querySelector(".register")
email = document.querySelector("#emailReg")
nombre = document.querySelector("#nombreReg")
userReg = document.querySelector("#userReg")
passReg = document.querySelector("#passReg")
btnRegistrar = document.querySelector("#registrar")

let usuarios;
// Si hay datos en el Local Storage (LS), entonces le digo que usuarios se igual al contenido que hay en el Local Storage, es decir, le digo que usuarios = LS
// Y Si No hay usuarios, entonces le digo que usuarios sea igual a un array vacío, es decir, usuarios = [] para que esos usuarios (variables) ya tengan un valor. (Es decir, o los datos que tengo en el LS o que sea un array vacío, porque luego los voy a llamar)
// Recordemos que tanto el local como el session storage, cualquier objeto o array que esté en formato JSON y lo queremos trabajar como un objeto, para poder trabajar correctamente con esos objetos o arrays, vamos a utilizar el metodo de conversión JSON.parse
// Entonces, vamos a utilizar un condicional (if) donde lo que le voy a estar diciendo es que SI hay algo en el Local Storage, se lo estoy asignando a la variable 'usuarios', y si no hay nada (else) le digo que la variable 'usuarios' sea igual a un array vacio
if(localStorage.getItem("usuarios")){
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
}else{
    usuarios = [];
}




// constructor de usuario:
// CLASES:
// Una clase, en JavaScript, construye un objeto al igual que lo hace una función constructora.
// Una clase y una función constructora son lo mismo. La diferencia entre ambos es que se escribe de manera diferente. Nada mas!
// Las clases de JavaScript, introducidas en ES6, proveen una sintaxis mucho más clara y simple para crear objetos personalizados. Son una equivalencia al empleo de función constructora y permite definir distintos tipos de métodos.
// En la declaración de clase, la función constructora es reemplazada por el método constructor. Los métodos en las clases no referencian a propiedades, se declaran dentro del bloque sin la palabra function.
// Es decir, en vez de utilizar la palabra 'function' para construir un objeto, vamos reemplazarla por la palabra 'class'. 

// Acá vamos a utilizar un operador que se llama 'this'. 'this' tiene muchos usos dentro de los que es la programación en si, y dentro de lo que es JavaScript. Pero nosotros a 'this' vamos a darle un uso especifico. Cuando yo declaro 'this.nombre' y la igualo al nombre del paramétro, cuando yo llame a la función, y construya este objeto, lo que voy a estar haciendo con el 'this' es asegurarme de que estoy haciendo referencia al nombre que recibo por parámetro. Lo mismo vamos a hacer con las otras propiedades (usuario, email, password).

class Usuario {
    constructor(nombre, userLog, email, passLog) {
        this.nombre = nombre;
        this.userLog = userLog;
        this.email = email;
        this.passLog = passLog;
    }
}



// Limpiar campos:

function limpiarCampos() {
    nombre.value = "";
    userReg.value = "";
    passReg.value = "";
    email.value = "";
}



//función guardarUsuario:
// METODO PUSH (METODO PARA AGREGAR ELEMENTOS AL FINAL DE UN ARRAY)

// DECLARACIÓN:
// Se declara a través de la palabra reservada function. Deben tener un nombre en minuscula y sin espacios seguidos de los caracteristicos paréntesis (). El contenido de la función se escribe entre las llaves. El nombre de la función no se puede repetir en otra.

// RESULTADO DE UNA FUNCIÓN:
// Cuando utilizamos funciones, las funciones pueden contener un valor de retorno que se llama 'return'. Lo que va a hacer la función es DEVOLVER un resultado. Entonces el resultado que vamos a obtener cuando la función lo devuelva con la palabra reservada 'return', nosotros lo vamos a poder reutilizar en otro lugar que nosotros necesitemos.

// Acá lo que estamos haciendo es creando una función llamada 'guardarUsuario' y como elemento le vamos a poner (usuario) y dentro de esta función, vamos a retornar (return) la variable 'usuarios' (LINEA 70) que habíamos dicho que iba a ser un array, y vamos a utilizar el metodo 'push' para agregar (guardar) el elemento 'usuario' (el cual el elemento 'usuario' va a ser un objeto) dentro de mi array 'usuarios'.

function guardarUsuario(usuario) {
    return usuarios.push(usuario)
}

// Guardar en LS (Local Storage):
// En el setItem vamos a pasarle una clave y un valor (en este caso el valor es el elemento que va a recibir esta función, que en este caso le pusimos 'elemento', y como este 'elemento' yo pretendo que sea un objeto, lo tengo que convertir a un formato que me permita a mi guardarlo en el Local Storage, osea, debo convertirlo a un formato JSON. Entonces dentro del return, voy a utilizar el metodo de conversión JSON.stringify ), en este caso la clave será 'usuarios' porque anteriormente en el getItem le pusimos el mismo nombre a su clave, en la LINEA 79 (osea, 'usuarios')
function guardarEnStorage(elemento) {
    return localStorage.setItem('usuarios', JSON.stringify(elemento))
}


// Evento:
// El boton registrar (btnRegistar) me va a permitir crear el usuario. El boton registar (btnRegistar), lo voy a guardar en mi array de usuarios, y ademas lo voy a guardar en el Local Storage. Recordemos que en el Local Storage no voy a guardar el usuario creado, sino lo que voy a guardar es el array de usuarios. Entonces al boton registrar,(btnRegistar), con addEventListener le vamos a agregar un evento "click" y como 2do parametro le vamos a pasar una función flecha donde indiquemos que por un lado prevenga que la pagina me borre los datos al recargar la pagina, por eso al evento (e) le ponemos el metodo 'preventDefault', luego vamos a crear una variable llamada 'newUser' donde dentro de esa variable, vamos a guardar la clase constructora 'new Usuario' (LINEA 94) donde le vamos a pasar los elementos que llamamos previamente mas arriba (LINEA 64 a 68) y que nos traiga el valor de cada uno de esos elementos.  Luego vamos a imprimir por consola, la variable 'newUser' para que nosotros podamos ver los datos que guardó el usuario al realizar el registro en el formulario de la pagina. Luego vamos a llamar a la función 'guardarUsuario' (LINEA 127) y como parametro le vamos a indicar que guarde la variable 'newUser' la cual contiene los elementos de la función constructora 'New Usuario' (recordemos que nosotros en la función 'guardarUsuario' (LINEA 127) le pasamos el metodo 'push' para que nos guarde un nuevo elemento en nuestro array 'usuarios'). Es por eso que primero debemos llamar a la función 'guardarUsuario' porque la función 'guardarUsuario' es la que me está pusheando (guardando) el 'usuario' al array 'usuarios'. Entonces el array 'usuarios' cuando yo cree un usuario, va a tener ese valor, es decir, va a tener ese objeto dentro. Y por ultimo vamos a llamar a la función 'guardarEnStorage' y le vamos a decir que nos guarde el array 'Usuarios'.
btnRegistrar.addEventListener("click", (e)=>{
    e.preventDefault()
    let newUser = new Usuario(nombre.value, userReg.value, email.value, passReg.value);
    console.log(newUser);
    limpiarCampos();
    guardarUsuario(newUser);
    guardarEnStorage(usuarios);
})

// VER MINUTO 01:12:40 DE LA CLASE 11
// COMO HACER PARA EL CARRITO DE COMPRAS!
// Lo mismo puedo hacer con un producto. Es decir, creo un array vacío que se llame 'carrito' y luego en vez de agregar usuarios, en el boton comprar, voy agregando productos.  Que cuando el usuario haga click en el boton 'comprar' se vaya agregando a un array 'carrito'.

// METODO CLEAR:
// El metodo clear borra todo. Lo puedo usar para borrar en el local o en el session!

//localStorage.clear()

//sessionStorage.clear()

// REMOVER (BORRAR) LOS ITEMS DEL LOCAL STORAGE O DEL SESSION STORAGE:
// Tambien puedo remover los items, a traves de un metodo que se llama 'removeItem'. El metodo 'removeItem' recibe por parametro() el nombre del elemento que yo quiero remover. En este caso vamos a sacar el 'usuarios' (LINEA 70)
//localStorage.removeItem('usuarios')
