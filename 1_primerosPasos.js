// instalar nodeJS
// correr archivo en terminal con node <nombreArchivo>

/*********************************************** VARIABLES **********************************************/
/**
 * sensible a mayusculas y minusculas | no es lo mismo Nombre y nombre
 * no usar caracteres especiales al nombrar la variable
 * no usar palabras reservadas para nombrar una variable
 * nombre de variable entendible a que se refiere
 * no necesita especificar que tipo de dato es | lenguaje no tipado
 */
const nombre = "Marifer"; // CONST | se tiene que inicializar y No puede cambiar el valor(MARCA ERROR AL QUEREL VOLVERLE ASIGNAR UN VALOR)
// console.log(`Mi nombre es ${nombre}`); // PLATILLAS DE TEXTO  Mi nombre es Marifer

let nuevoTexto = "el valor puede cambiar"; // scope de bloque(funcion)

var texto = "variable en todo el programa"; // scope global

/******* tipos de datos */
/******* operaciones aritmeticas */
// ()  ->   *  /    ->  + -
//concatenacion si es texto
let suma = 2 + 2;
// console.log(suma);

/******* conversion de tipos de datos */
// console.log(parseInt("10") + parseInt("20")); //30
// console.log("10" / "2"); // 5   conversion automatica
// console.log("maria" / 2); // NaN

/***** IMMUTABILIDAD */
let variableTexto = "un texto";
// console.log(variableTexto); //un texto

variableTexto = "otro valor";
// console.log(variableTexto); //otro valor
/// no se puede cambiar a otro tipo de dato

/*********************************************** MULTIPLES ELEMENTOS **********************************************/
/*** listas  | arreglos | arrays*/
const numeros = new Array();
// console.log(numeros); //arreglo vacio [ ]

// agregar elementoa a la lista
numeros.push(1);
numeros.push(2);
console.log(numeros); //1,2

const ciudades = ["Bogota", "Lima", "Santiago", "Buenos Aires"];
// console.log(ciudades); //[ 'Bogota', 'Lima', 'Santiago', 'Buenos Aires' ]

// acceder a los elementos de un array
console.log(ciudades[2]); // Santiago

//length
// console.log(`Tenemos ${ciudades.length} ciudades disponibles`); // Tenemos 4 ciudades disponibles

//devuelve el elemento entre los espacios asignados
// console.log(ciudades.splice(1, 1));

// console.log(ciudades.pop());

/*********************************************** CONDICIONALES Y FLUJOS DE EJECUCION **********************************************/
/**************
 * OPERADORES LOGICOS
 *  >
 *  >=
 *  <
 *  <=
 *  ==
 *  !=
 *
 * and    &&
 * or     ||
 * no     !
 */
const edad = 17;
const acompanante = false;
const tienePasaje = true;

if (edad >= 18 || acompanante) {
  console.log("el comprador es mayor de edad");
} else if (edad >= 18 && acompanante) {
  console.log("el comprador esta acompañado");
} else {
  console.log("No es posible ofrecer viajes");
}

// proceso de embarque
console.log(`proceso de embarque \n \n`);
if ((tienePasaje && edad >= 18) || acompanante) {
  console.log("comprador con pasaje");
} else {
  console.log("comprador sin pasaje");
}

/*********************************************** ITERANDO SOBRE LISTAS **********************************************/
/***
 * for
 * while ir incrementando para que no se haga buclef
 *
 */
const ciudadDestino = "Lima";
let esCiudadDisponible = false;
let puedeComprar = false;

puedeComprar = edad >= 18 || acompanante;
console.log(puedeComprar);
console.log(ciudades);
for (let index = 0; index < ciudades.length; index++) {
  const ciudad = ciudades[index];
  if (ciudadDestino === ciudad) {
    console.log("ciudad disponible");
    break;
}

/******* depuracion de codigo
 * ir viendo linea a linea como se ejecuta el programa
 *  run and debub en la barra de la izq
 * seleccionar de donde a donde y luego run and debug
 *
 * create launch.json
 */

