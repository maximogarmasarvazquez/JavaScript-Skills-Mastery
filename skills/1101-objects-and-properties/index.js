// 1. Crear un objeto
const persona = {
  nombre: "Maxi",
  edad: 21,
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

// 2. Acceder a propiedades
console.log(persona.nombre);       // "Maxi"
console.log(persona["edad"]);      // 21

// 3. Agregar nuevas propiedades
persona.altura = 1.76;
persona["peso"] = 61;

// 4. Eliminar propiedades
delete persona.edad;

// 5. Verificar existencia de una propiedad
console.log("nombre" in persona);              // true
console.log(persona.hasOwnProperty("edad"));   // false (porque fue eliminada)

// 6. Recorrer propiedades del objeto
for (let clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}

// 7. Métodos útiles de Object
console.log(Object.keys(persona));     // ["nombre", "saludar", "altura", "peso"]
console.log(Object.values(persona));   // ["Maxi", function, 1.76, 61]
console.log(Object.entries(persona));  // [["nombre", "Maxi"], ["saludar", ƒ], ["altura", 1.76], ["peso", 61]]