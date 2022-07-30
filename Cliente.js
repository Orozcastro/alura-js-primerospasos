export class Cliente {
  nombreCliente;
  dniCliente;
  rutCliente;
  #clave;

  // el constructor puede recibir variables
  // son utilizados para inicializar los atributos
  // al crear una instancia solo se usa  const cliente2 = new Cliente("maria", 456952, "785164");
  constructor(nombreCliente, dniCliente, rutCliente) {
    this.nombreCliente = nombreCliente;
    this.dniCliente = dniCliente;
    this.rutCliente = rutCliente;
    this.#clave = "";
  }

  asignarClave(clave) {
    this.#clave = clave;
  }

  /** uso de interfaz relacionada con SistemaAutentificacion
   * el uso de interfaces se puede cambiar la funcionalidad
   * ejemplo qui es diferente a la de empleados,
   * porque el cliente siempre debe ser false
   */
  autenticable(clave) {
    return false;
  }
}
