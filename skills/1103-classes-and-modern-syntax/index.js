class Desarrollador extends Persona {
  constructor(nombre, stack) {
    super(nombre); // Llama al constructor de la clase padre
    this.stack = stack;
  }

  presentar() {
    console.log(`Soy ${this.nombre} y uso ${this.stack}`);
  }
}

const dev = new Desarrollador("Maxi", "React");
dev.saludar();    // Hola, soy Maxi
dev.presentar();  // Soy Maxi y uso React
