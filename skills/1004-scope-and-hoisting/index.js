// 🧠 Ejemplos de Scope (Ámbito)

// Scope global
var globalVar = 'Soy global';

function mostrarGlobal() {
  console.log(globalVar); // ✅ Accede a la variable global
}

mostrarGlobal();

// Scope local
function saludar() {
  let mensaje = 'Hola desde adentro';
  console.log(mensaje); // ✅ Solo accesible dentro de la función
}

// console.log(mensaje); ❌ Error: mensaje is not defined

// Scope de bloque
if (true) {
  const bloque = 'Estoy en un bloque';
  console.log(bloque); // ✅
}
// console.log(bloque); ❌ Error: bloque is not defined


// 🧠 Ejemplos de Hoisting

// Hoisting con var
console.log(a); // undefined (hoisted pero sin valor)
var a = 10;

// Hoisting con let / const
// console.log(b); ❌ ReferenceError
let b = 20;

// Hoisting con funciones declaradas
saludo(); // ✅ Funciona gracias al hoisting
function saludo() {
  console.log("¡Hola mundo!");
}

// Hoisting con funciones expresadas
// despedida(); ❌ Error: despedida is not a function
const despedida = function() {
  console.log("¡Chau mundo!");
};
