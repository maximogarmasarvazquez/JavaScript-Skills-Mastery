// Declaración con var, let y const
var saludo = "Hola desde var";
let edad = 21;
const pais = "Argentina";

console.log(saludo); // Se puede reasignar y redeclarar
console.log(edad);   // Se puede reasignar pero no redeclarar
console.log(pais);   // No se puede reasignar ni redeclarar

// Tipos primitivos
let texto = "JavaScript es genial"; // string
let numero = 42;                    // number
let booleano = true;                // boolean
let indefinido;                     // undefined
let vacio = null;                   // null

console.log(typeof texto);      // string
console.log(typeof numero);     // number
console.log(typeof booleano);   // boolean
console.log(typeof indefinido); // undefined
console.log(typeof vacio);      // object (quirk histórico)

// Objeto
const persona = {
  nombre: "Máximo",
  edad: 21,
  pais: "Argentina"
};

console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Pais:", persona.pais);
