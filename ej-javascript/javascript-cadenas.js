console.log("Node.js");

//Pasar todo a mayuscula o minuscula///////////////
function palabraMayusculaMinuscula() {
    let nombre = "Juan";
    return console.log(nombre.toLocaleUpperCase()) + //Mayúscula // 
    console.log(nombre.toLocaleLowerCase()) //Minúscula
}

function primeraLetraMayuscula(){
    let ciudad = "pitalito";
    let ciudadMayuscula= ciudad[0].toUpperCase() + ciudad.slice(1).toLowerCase();
    return ciudadMayuscula;
}

function extraerPartesCadena(){
    let year = 2023;
    let yearStr = year.toString();
    let yearLenght = yearStr.length;
    let yearParte = yearStr.slice(2,yearLenght);
    return yearParte;
}

function longitudCadena(){
    let nombre = "Juan Miguel Almario Rojas";
    let nombreLenght = nombre.length;
    return nombreLenght;
}

function obtenerFechaHora(){
    let timeGMT = new Date();
    return timeGMT;
}

console.log(obtenerFechaHora())