const numeros = [1, 2, 3];
const duplicados = numeros.map(n => n * 2);
console.log(duplicados); // [2, 4, 6]


class Caja {
  constructor(valor) {
    this.valor = valor;
  }

  map(fn) {
    return new Caja(fn(this.valor));
  }

  toString() {
    return `Caja(${this.valor})`;
  }
}

const resultado = new Caja(5)
  .map(x => x + 3)
  .map(x => x * 2);

console.log(resultado.toString()); // Caja(16)