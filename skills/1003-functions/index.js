//  1. Función Declarada
function saludar(nombre) {
    return `Hola, ${nombre}!`;
  }
  
  console.log(saludar("Carlos")); 
  
  //  2. Función Expresada 
  const despedir = function(nombre) {
    return `Adiós, ${nombre}.`;
  };
  
  console.log(despedir("Pepe")); 
  
  //  3. Función Flecha
  const agradecer = (nombre) => {
    return `Gracias por todo, ${nombre}!`;
  };
  
  console.log(agradecer("Maximo")); 
  
  // ☝️ También puede escribirse de forma más corta si es una sola línea:
  const gritar = nombre => `¡${nombre.toUpperCase()}!`;
  
  console.log(gritar("máximo")); // Output: ¡MÁXIMO!
  