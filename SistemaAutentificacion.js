// clase abstracta porque se puede usar tanto para cliente copmo para empleado
export class SistemaAutentificacion {
  // funcion estatica
  static login(usuario, clave) {
    if ("autenticable" in usuario && usuario.autenticable instanceof Function) {
      return usuario.autenticable(clave);
      // return usuario.clave === clave; // regresa si es true o false, if en una linea
    } else {
      return false;
    }
  }
}
