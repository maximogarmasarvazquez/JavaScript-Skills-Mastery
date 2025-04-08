# 🧠  1004 Scope y Hoisting en JavaScript

## 📌 ¿Qué es el Scope (Ámbito)?

El **scope** determina dónde son accesibles las variables. Existen tres tipos principales:

| Tipo de Scope   | Descripción                                     | Ejemplo común                  |
|-----------------|-------------------------------------------------|--------------------------------|
| Global          | Disponible en todo el código                    | Variables fuera de cualquier función |
| Local (Función) | Solo accesible dentro de la función              | Declaradas con `var`, `let`, `const` dentro de una función |
| De bloque       | Solo accesible dentro de un bloque `{}`         | `let` o `const` dentro de `if`, `for`, etc. |

---

## 📌 ¿Qué es el Hoisting?

El **hoisting** es el comportamiento por el cual JavaScript "eleva" las declaraciones al inicio del scope.

| Elemento       | ¿Se eleva? | ¿Se inicializa? | Resultado                  |
|----------------|------------|------------------|-----------------------------|
| `var`          | ✅ Sí      | ❌ No             | `undefined`                |
| `let` y `const`| ✅ Sí      | ❌ No             | ❌ ReferenceError si se accede antes |
| Funciones declaradas | ✅ Sí | ✅ Sí             | Se pueden llamar antes de definir |
| Funciones expresadas | ❌ No | ❌ No             | ❌ ReferenceError o TypeError |

---

## 🧪 Ejemplos

```js
// var con hoisting
console.log(a); // undefined
var a = 5;

// let y const
// console.log(b); ❌ ReferenceError
let b = 10;

// Función declarada
saludo(); // ✅ Funciona
function saludo() {
  console.log("Hola!");
}

// Función expresada
// despedida(); ❌ TypeError
const despedida = function() {
  console.log("Chau!");
};
