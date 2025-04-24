# 🧬 JavaScript – Prototypes and Prototypal Inheritance

Este ejercicio explora cómo funciona la **herencia basada en prototipos** en JavaScript, un mecanismo central del lenguaje para compartir propiedades y comportamientos entre objetos.

---

## 📌 ¿Qué son los prototipos?

En JavaScript, **todo objeto tiene una propiedad interna** llamada `[[Prototype]]` (accesible mediante `__proto__` o `Object.getPrototypeOf()`), que le permite **heredar propiedades y métodos** de otro objeto.

Este sistema se conoce como **herencia prototípica**.

---

## 🔗 ¿Cómo se utiliza?

### 🧪 Ejemplo simple

```js
const animal = {
  sonido: "Hace un ruido",
  hablar: function() {
    console.log(this.sonido);
  }
};

const perro = Object.create(animal);
perro.sonido = "Guau 🐶";

perro.hablar(); // Guau 🐶