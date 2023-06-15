// Activando el modo Strict //
 "use strict"


 // Ejercicio número 1 ////////////////////////////////////////////////////////////////////////////
 
/*  let saludo = document.getElementById("saludo");

saludo.addEventListener("click", function(){
    alert ("Hola");
}) */


// Ejercicio número 2 modo strict : No me deja usar variable sin declarar ////////////////////////



/* let nombre = "Juan";

console.log(nombre); */

// Ejercicio número 3 : Crear 2 variables tipo string (Nombre y apellido) ////////////////////////

/* let nombreUsuario = "Juan Miguel";
let apellidoUsuario = "Almario Rojas";

let nombreUsuarioCompleo = nombreUsuario + " " + apellidoUsuario;
console.log("Ejercicios N°3\n\n" + nombreUsuarioCompleo) */

// Ejercicio N°4 : Conversión implícita de variables//////////////////////////////////////////////


let numero1 = 5;
let numero2 = 3;
console.log("Entero + Entero (5 + 3)")
console.log(numero1 + numero2)
let numero3 = "4";
let numero4 = "8";
console.log("String + String (4 + 8)")
console.log(numero3 + numero4)
let numero5 = 4;
let numero6 = "5";
console.log("String + String (4 + 5)")
console.log(numero5 + numero6);


// Ejercicio N°5: Conversión explícita de variables///////////////////////////////////////////////

//Conversion de string a entero //
let numero3Int = parseInt(numero3);
let resultadoInt = numero1 + numero3Int;
console.log (  "Convertir String a entero\n\n" + "5 + 4 = " + resultadoInt )

//Conversion de entero a string //

let numero3String = numero3Int.toString();
let resultadoString = numero1 + numero3String;
console.log (  "Convertir String a entero\n\n" + "5 + 4 = " + resultadoString )

//Conversion a decimal //

let numFloatString = "2.3";
let numIntFloat = parseFloat(numero2);
let numFloatNumber = parseFloat(numFloatString);
let number2Float = 8.1;
console.log ( "Valore: " +numIntFloat + " + " + numFloatNumber + " + " + number2Float + "\n\n" + (numIntFloat + numFloatNumber + number2Float))

//Ajuste decimal hacia arriba//

console.log ( "Ajuste resultados decimal hacia arriba, Valores:\n\n" +numIntFloat + " + " + numFloatNumber + " + " + number2Float + " = " + Math.ceil((numIntFloat + numFloatNumber + number2Float)))
//Ajuste decimal hacia arriba//

console.log ( "Ajuste resultados decimal hacia abajo, Valores:\n\n" +numIntFloat + " + " + numFloatNumber + " + " + number2Float + " = " + Math.floor((numIntFloat + numFloatNumber + number2Float)))


//Limitaciones para declaración de variables//////////////////////////////////////////////////////

//1.No iniciar variables con números//
/* let 1nombre = "Vicente";
let nombre1 = "Vicente";

//2.No poner espacios en el nombre de la variable//
let nombre usuario = "Vicente";
let nombreusuario = "Vicente";

//3.No poner carácteres especiales//
let nombre-usuario = "Vicente";
let nombreUsuario = "Vicente"; */