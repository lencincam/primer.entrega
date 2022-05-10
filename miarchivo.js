const user=prompt("Ingrese un usuario");
const pass = prompt("Ingrese una password");  

alert("Registracion ok, inicie sesion");

login()

function login(){
    const usuario = prompt("Ingrese su nombre de usuario");
    const contraseña = prompt("Ingrese su password");

    const validacion =  usuario === user && contraseña === pass;

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