function User(nombre, apellido, mail, password)
{
    this.nombre=nombre;
    this.apellido=apellido;
    this.mail=mail;
    this.password=password;
}

const nombre = prompt("Ingrese su nombre")
const apellido = prompt("Ingrese su apellido")
const mail = prompt("Ingrese su casilla de correo")
const password = prompt("Ingrese su contraseña")
alert("Registracion ok, inicie sesion");

login()

function login() {
    const mail = prompt("Ingrese su casilla de correo");
    const password = prompt("Ingrese su password");

    const validacion =  mail === mail && password === password;

    if(validacion == true){
        alert("INICIO EXITOSO")
    }
    else{
        alert("USUARIO Y/O CONTRASEÑA INCORRECTOS, REINTENTAR")
        while(validacion !== true){
            i=0
            i++ 
            login()
        }
    }
}