import { Cuenta } from "./Cuenta.js";
import { Cliente } from "../Cliente.js";

export class CuentaCorriente extends Cuenta {
  static cantidadCuentas = 0;

  constructor(cliente, numero, agencia) {
    super(cliente, numero, agencia, 0);
    CuentaCorriente.cantidadCuentas++;
  }

  retirarDeCuenta(valor) {
    //sobreescribir dentro del padre
    // valor y comision se pasan a padre
    super._retirarDeCuenta(valor, 5);
  }
}
