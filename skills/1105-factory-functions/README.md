# 🧩 JavaScript – Factory Functions

Las **Factory Functions** son funciones que retornan **nuevos objetos personalizados** cada vez que se invocan. Son muy útiles cuando se desea **flexibilidad** en la creación de instancias y evitar el uso directo de clases.

---

## 🏭 ¿Qué son las Factory Functions?

Una **Factory Function** es una función que crea y retorna un objeto. A diferencia de las clases, las Factory Functions permiten tener un mayor control sobre el proceso de creación de objetos y no dependen del `new` ni del uso del prototipo.

---

## 🚀 Ejemplo de Factory Function

Aquí te muestro un ejemplo básico de una Factory Function:

```js
function crearCarro(marca, modelo) {
  return {
    marca,
    modelo,
    encender() {
      console.log(`${this.marca} ${this.modelo} está encendido.`);
    }
  };
}

const miCarro = crearCarro("Toyota", "Corolla");
miCarro.encender(); // Toyota Corolla está encendido.
