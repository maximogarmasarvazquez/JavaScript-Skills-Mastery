// function-composition.js

// Funciones simples
const duplicar = x => x * 2;
const sumarCinco = x => x + 5;
const restarTres = x => x - 3;

// Composición manual de funciones (de derecha a izquierda)
const composicion = (...funciones) => x => funciones.reduceRight((valor, fn) => fn(valor), x);

const funcionCompuesta = composicion(restarTres, duplicar, sumarCinco);
console.log(funcionCompuesta(4)); // ((4 + 5) * 2) - 3 = 15


