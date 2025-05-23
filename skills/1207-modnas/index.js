//Implementación básica de un Maybe Monad
class Maybe {
  constructor(value) {
    this.value = value;
  }

  static of(value) {
    return new Maybe(value);
  }

  isNothing() {
    return this.value === null || this.value === undefined;
  }

  map(fn) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this.value));
  }

  getOrElse(defaultValue) {
    return this.isNothing() ? defaultValue : this.value;
  }
}

// Uso
const nombreUsuario = Maybe.of("Maxi");

const longitud = nombreUsuario
  .map(n => n.toUpperCase())
  .map(n => n.length)
  .getOrElse(0);

console.log("🧮 Longitud del nombre:", longitud); // 5

const usuarioNulo = Maybe.of(null);
const longitudNull = usuarioNulo.map(n => n.length).getOrElse(0);
console.log("🧮 Longitud cuando no hay nombre:", longitudNull); // 0
