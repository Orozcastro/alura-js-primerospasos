/** importar clases */
import { Cliente } from "./Cliente.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";
import { SistemaAutentificacion } from "./SistemaAutentificacion.js";

/********************** CLEINTES */
const cliente = new Cliente("majo", "45874", "9875");
cliente.asignarClave("111");
/*************************** EMPLEADOS ***************** */
const empleado = new Empleado("Gabriela", "123587", 10000);
empleado.asignarClave("123");
const gerente = new Gerente("Pedro", "785485", 12000);
const director = new Director("Marjo", "846952", 15000);
// console.log(empleado.verBonificacion());
// console.log(gerente.verBonificacion());
// console.log(director.verBonificacion());

console.log(SistemaAutentificacion.login(empleado, "123"));
console.log(SistemaAutentificacion.login(cliente, "111"));
