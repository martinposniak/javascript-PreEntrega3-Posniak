const logIn = document.querySelector(".logIn")
const btnIngresar = document.querySelector("#ingresar")
userLog = document.querySelector("#userLog")
passLog = document.querySelector("#passLog")
check = document.querySelector("#recordar")

// Funciones:
// Primero creamos una función que vamos a llamar 'inicioSesion' y va a recibir por parametro el array 'usuarios'.
// Dentro de la función 'inicioSesion' vamos a crear una variable que vamos a llamar 'userFound', y lo que va a hacer esta variable es una busqueda de un usuario. El metodo find (devuelve un elemento u objeto que está dentro del array) le voy a decir "Buscame, dentro del array 'usuarios' que recibiste por parametro en la función 'inicioSesion', buscame el usuario y devolveme el usuario que, en su propiedad 'nombre' (usuario.nombre) sea igual al campo 'userLog', es decir, que sea igual a su valor" (usuario.nombre == userLog.value) y ademas (&&) el usuario, en su propiedad 'passLog' que sea igual al valor del campo 'passLog' (usuario.passLog == passLog.value;)
function inicioSesion(usuarios){
    //Codigo inicio de sesión
    let userFound = usuarios.find(usuario=>{
        return usuario.nombre == userLog.value && usuario.passLog == passLog.value;
    });
    //Si userFound está encontrado, entonces redireccionar a la pagina index.html. Si userFound NO está encontrado, entonces sale 'undefined' y no redirecciona a ningun lado.
    if(userFound){
        window.location.href = "../index.html"
    }else{
        document.querySelector(".mensajeLog").innerText = "Usuario no encontrado";
    }
}



// Función para recuperar los datos del Local Storage:
function recuperarLS(){
    let datos = JSON.parse(localStorage.getItem("usuarios"));
    return datos;
}


// Ejecución de funciones:
// Esta variable 'usuariosLS' va a contener los datos que me devuelva la función 'recuperarLS()'. Y esos datos se encuentran dentro de la función 'recuperarLS()'
 
const usuariosLS = recuperarLS();



// Eventos:

btnIngresar.addEventListener("click", (e)=>{
    //Codigo a ejecutar
    e.preventDefault();
    inicioSesion(usuariosLS);
});


