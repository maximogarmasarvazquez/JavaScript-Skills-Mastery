function Persona(nombre) {
  this.nombre = nombre;
}

Persona.prototype.saludar = function() {
  console.log("Hola, soy " + this.nombre);
};

const maxi = new Persona("Máximo");
maxi.saludar(); // Hola, soy Máximo
