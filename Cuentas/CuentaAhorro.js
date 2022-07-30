import { Cuenta } from "./Cuenta.js";
import { Cliente } from "../Cliente.js";

export class CuentaAhorro extends Cuenta {
  constructor(cliente, numero, agencia, saldo) {
    super(cliente, numero, agencia, saldo);
  }

  retirarDeCuenta(valor) {
    // valor y comision se pasan a padre
    super._retirarDeCuenta(valor, 2);
  }
}
