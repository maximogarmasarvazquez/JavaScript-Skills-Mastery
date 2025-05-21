//  Ejemplo 1: Función que recibe otra función

function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

function procesarEntrada(nombre, callback) {
  return callback(nombre);
}

console.log(procesarEntrada("Maxi", saludar)); // Hola, Maxi!

//  Ejemplo 2: Función que devuelve otra función

function multiplicador(factor) {
  return function (numero) {
    return numero * factor;
  };
}

const porDos = multiplicador(2);
const porCinco = multiplicador(5);

console.log(porDos(4));   // 8
console.log(porCinco(3)); // 15

// Ejemplo 3: Uso práctico con map, filter, reduce

const numeros = [1, 2, 3, 4, 5];

const alCuadrado = numeros.map(n => n * n);
const pares = numeros.filter(n => n % 2 === 0);
const suma = numeros.reduce((acc, n) => acc + n, 0);

console.log(alCuadrado); // [1, 4, 9, 16, 25]
console.log(pares);      // [2, 4]
console.log(suma);       // 15