# 🔐 1005 - Closures

## 📌 ¿Qué es un Closure?

Un **closure** (o cierre) en JavaScript ocurre cuando una función **interna** accede a variables de una función **externa**, **incluso después** de que la función externa haya terminado de ejecutarse.

Esto es posible porque en JavaScript las funciones **"recuerdan"** el contexto en el que fueron creadas. Esa "memoria" del entorno es lo que se conoce como **closure**.

---

## 🧠 ¿Cómo funciona?

Cuando una función se define dentro de otra, puede **capturar** variables de su entorno exterior. Aunque la función externa haya finalizado, la interna mantiene el acceso a esas variables.

Esto se usa mucho para:

- Crear datos **privados**.
- Mantener estado sin necesidad de clases.
- Controlar el acceso a variables internas.

---

## 📍 Ejemplo Básico:

```js
function crearContador() {
  let contador = 0;

  return function () {
    contador++;
    return contador;
  };
}

const miContador = crearContador();

console.log(miContador()); // 1
console.log(miContador()); // 2
console.log(miContador()); // 3