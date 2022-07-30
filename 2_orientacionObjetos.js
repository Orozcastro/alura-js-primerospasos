/*********************************************** REPETICION DE CODIGO  **********************************************/
// const cliente = {
//   nombre: "Maria",
//   dni: "123456",
//   numeroCuenta: "987456",
//   saldoCuenta: "1000",
// };
// console.log(cliente);

// uso de clases
/*** DEFINICION DE CLASES */

/** importar clases */
import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuentas/Cuenta.js";
import { CuentaCorriente } from "./Cuentas/CuentaCorriente.js";
import { CuentaAhorro } from "./Cuentas/CuentaAhorro.js";
import { CuentaNomina } from "./Cuentas/CuentaNomina.js";

const cliente1 = new Cliente();
cliente1.nombreCliente = "jose";
cliente1.dniCliente = 123456;
cliente1.rutCliente = "456123";

const cuenta1 = new CuentaCorriente(cliente1, 456789, 1001);

let saldo = cuenta1.verSaldo();
// console.log(`El saldo actual es de ${saldo}`);
saldo = cuenta1.depositoEnCuenta(1000);

// cuenta1.retirarDeCuenta(20000);

// console.log(cuenta1);
// console.log(`El saldo actual del cliente 1 es de ${saldo}`);

/**** cleinte 2 */
/*
const cliente2 = new Cliente();
cliente2.nombreCliente = "maria";
cliente2.dniCliente = 456952;
cliente1.rutCliente = "785164";
*/
const cliente2 = new Cliente("maria", 456952, "785164");
// console.log(cliente2);
const cuenta2 = new CuentaAhorro(cliente2, 965874, 1002);

// console.log(`El saldo actual es de ${saldo2}`);

cuenta1.transferirParaCuenta(200, cuenta2);
let saldo2 = cuenta2.verSaldo();

// console.log(`El saldo actual del cleinte 2 es de ${saldo2}`);

// console.log(`El saldo actual del cliente 1 es de ${cuenta1.verSaldo()}`);
// console.log(Cuenta.cantidadCuentas);

// console.log(cuenta1);
// console.log(cuenta2);

/************ ejemplos con uso de clases abstractas */
const cuentaNominaMaria = new CuentaNomina(cliente2, 458745, 698521, 100);
cuentaNominaMaria.depositoEnCuenta(150);
// console.log(cuentaNominaMaria.verSaldo());
cuentaNominaMaria.retirarDeCuenta(100);
// console.log(cuentaNominaMaria.verSaldo());

/*********************************************** NULL UNDEFINED **********************************************/
/***
 * UNDEFINED
 * Creamos la variable pero aun no existe
 *
 * NULL
 * no existe pero esta implcicito
 * inicializar la variable como null para que no aparezca como undefined si aun no se a asignado un valor
 *
 */

/*********************************************** MODULARIZANDO CODIGO **********************************************/

/*********************************************** ACCEDIENDO A ATRIBUTOS PRIVADOS **********************************************/
/****
 * SET
 *
 *  GET
 */
/*********************************************** CONSTRUCTORES Y ATRIBUTOS ESTATICOS **********************************************/
/**
 * CONSTRUCTORES
 * son utilizados para inicializar los atributos
 *
 *
 * ATRIBUTOS ESTATICOS
 * el atributo esta compartido para todo el programa, no para cada instancia
 */
