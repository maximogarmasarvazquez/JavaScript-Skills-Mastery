// Ejemplo de Factory Function para un carro
function crearCarro(marca, modelo) {
  return {
    marca,
    modelo,
    encender() {
      console.log(`${this.marca} ${this.modelo} está encendido.`);
    }
  };
}

const miCarro = crearCarro("Toyota", "Corolla");
miCarro.encender(); // Toyota Corolla está encendido.

// Factory Function para crear un usuario
function crearUsuario(nombre, edad) {
  return {
    nombre,
    edad,
    saludar() {
      console.log(`¡Hola! Soy ${this.nombre} y tengo ${this.edad} años.`);
    }
  };
}

const usuario1 = crearUsuario("Maxi", 21);
usuario1.saludar(); // ¡Hola! Soy Maxi y tengo 21 años.