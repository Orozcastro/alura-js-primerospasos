import { Empleado } from "./Empleado.js";
export class Director extends Empleado {
  constructor(nombre, dni, salario) {
    super(nombre, dni, salario);
  }

  //polimorfismo: permite ejecutar ese metodo de diferentes formas
  verBonificacion() {
    const bono = 10;
    return super._verBonificacion(bono);
  }
}
