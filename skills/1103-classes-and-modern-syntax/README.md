# 🧩 JavaScript – Classes and Modern Syntax

Este ejercicio cubre el uso de **clases en JavaScript moderno**, introducido con ES6. Las clases proveen una forma más clara y estructurada de crear objetos y establecer herencia mediante `class`, `extends` y `super`.

---

## 🧱 ¿Qué es una clase?

Una clase es una **plantilla para crear objetos** con propiedades y métodos comunes.

```js
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const maxi = new Persona("Máximo");
maxi.saludar(); // Hola, soy Máximo
