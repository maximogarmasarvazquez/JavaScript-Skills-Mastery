// Ejemplo 1: Función clásica vs currificada
function sumar(a, b) {
  return a + b;
}

function curriedSum(a) {
  return function(b) {
    return a + b;
  };
}

console.log("sumar(2, 3):", sumar(2, 3)); // 5
const sumar2 = curriedSum(2);
console.log("curriedSum(2)(3):", sumar2(3)); // 5


// Ejemplo 2: Currying con saludo
function saludar(saludo) {
  return function(nombre) {
    return `${saludo}, ${nombre}!`;
  };
}

const hola = saludar("Hola");
const buenosDias = saludar("Buenos días");

console.log(hola("Maxi"));         // Hola, Maxi!
console.log(buenosDias("Lucía"));  // Buenos días, Lucía!


// Ejemplo 3: Currying con función flecha
const multiplicar = a => b => a * b;
const porTres = multiplicar(3);
console.log("multiplicar(3)(5):", porTres(5)); // 15

