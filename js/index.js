 var usuarios = new Map();

 function crearUsuario(usuarios){
    var nombre = prompt("Introduce el nombre de usuario");
    if (usuarios.has(nombre)) {
        alert("El usuario ya existe");
    } else {
        var contraseña = prompt("Introduce la contraseña");
        usuarios.set(nombre, contraseña);
    }
}

function borrarUsuario(usuarios){
    var nombre = prompt("Introduce el nombre de usuario a eliminar");
    if (usuarios.has(nombre)) {
        usuarios.delete(nombre);
    } else {
        alert("El usuario no existe");
    }
}

function mostrarUsuarios(usuarios){
    usuarios.forEach(function(value, key) {
        alert(`Usuario: ${key}, Contraseña: ${value}`);
    });
}


function menu(){
    var usuarios = new Map();
    do{
        var opcion=prompt("OPCIONES:\n\n1. Nuevo usuario.\n2. Eliminar usuario.\n3. Mostrar usuarios\n4. Salir\n\nEscoge una opción");
  
        switch (opcion){
            case "1": crearUsuario(usuarios); break;
            case "2": borrarUsuario(usuarios); break;
            case "3": mostrarUsuarios(usuarios); break;
        }
    }
    while (opcion!="4")
}
menu();