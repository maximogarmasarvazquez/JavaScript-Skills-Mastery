const persona = { nombre: "Maxi", edad: 21 };

// Creamos una nueva copia con los cambios
const nuevaPersona = { ...persona, edad: 22 };

console.log(persona);       // { nombre: 'Maxi', edad: 21 }
console.log(nuevaPersona);  // { nombre: 'Maxi', edad: 22 }


const numeros = [1, 2, 3];

// Crear un nuevo array con un número agregado
const nuevosNumeros = [...numeros, 4];

console.log(numeros);        // [1, 2, 3]
console.log(nuevosNumeros);  // [1, 2, 3, 4]
