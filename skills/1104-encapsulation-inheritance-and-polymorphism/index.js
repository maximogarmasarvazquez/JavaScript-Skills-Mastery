class Usuario {
  #password; // propiedad privada

  constructor(nombre, password) {
    this.nombre = nombre;
    this.#password = password;
  }

  verificarPassword(pwd) {
    return this.#password === pwd;
  }
}

const user = new Usuario("Maxi", "1234");

console.log(user.verificarPassword("1234")); // true
console.log(user.verificarPassword("12345")); // false

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(`${this.nombre} hace un ruido.`);
  }
}

class Perro extends Animal {
  hablar() {
    console.log(`${this.nombre} ladra.`);
  }
}

const perro = new Perro("Toby");
perro.hablar(); // Toby ladra.


const animales = [
  new Animal("Cosa"),
  new Perro("Roco")
];

animales.forEach(animal => animal.hablar());
// Cosa hace un ruido.
// Roco ladra.
