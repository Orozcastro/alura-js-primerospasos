import { Cliente } from "../Cliente.js";
export class Cuenta {
  //(ENCAPSULAMIENTO) # antes de la variable le indica que es un campo privado
  #cliente;
  numero;
  agencia;
  #saldo;
  // atributo estatico | esta compartido para todo el programa
  static cantidadCuentas = 0;

  /** para proteger los datos se uasa set/get  */
  //asiganr el valor privado de cliente con set
  set cliente(valor) {
    if (valor instanceof Cliente) {
      this.#cliente = valor;
    }
  }

  //obtener el valor con get, solo devuelve el valor
  get cliente() {
    return this.#cliente;
  }
  //   inicializar valores en el cosntructor
  //es el paso siguyiente para armar una instancia
  constructor(cliente, numero, agencia, saldo) {
    if (this.constructor == Cuenta) {
      throw new Error("No se debe instanciar objetos de la clase cuenta");
    }
    this.cliente = cliente;
    this.numero = numero;
    this.agencia = agencia;
    this.#saldo = saldo;
    Cuenta.cantidadCuentas++;
  }

  depositoEnCuenta(valor) {
    // this.saldo = this.saldo + valor;
    if (valor > 0) {
      this.#saldo += valor;
    }
    return this.#saldo;
  }

  // retiro sin comision
  //medodo abstracto solo tiene la definicion pero no la implementacion
  //solo es el esqueleto, el marco, pero no hace nada
  retirarDeCuenta(valor) {
    // metodo abstracto
    throw new Error("Debe implementar el metodo retirarDeCuenta en su clase");
  }

  //metodo privado
  _retirarDeCuenta(valor, comision) {
    valor = valor * (1 + comision / 100);
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
    }
    return this.#saldo;
  }

  verSaldo() {
    return this.#saldo;
  }
  //COMBINACION DE METODOS DENTRO DE UN METODO
  transferirParaCuenta(valor, cuentaDestino) {
    this.retirarDeCuenta(valor);
    cuentaDestino.depositoEnCuenta(valor);
  }
}
