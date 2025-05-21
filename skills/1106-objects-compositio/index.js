// Habilidades individuales
const puedeHablar = (nombre) => ({
  hablar: () => console.log(`${nombre} dice: Hola!`),
});

const puedeComer = (nombre) => ({
  comer: () => console.log(`${nombre} está comiendo.`),
});

const puedeDormir = (nombre) => ({
  dormir: () => console.log(`${nombre} está durmiendo... 💤`),
});

// Composición de un objeto más complejo a partir de comportamientos simples
const crearPersona = (nombre) => {
  return {
    nombre,
    ...puedeHablar(nombre),
    ...puedeComer(nombre),
    ...puedeDormir(nombre),
  };
};

// Usamos la composición
const maxi = crearPersona("Maxi");

maxi.hablar(); // Maxi dice: Hola!
maxi.comer();  // Maxi está comiendo.
maxi.dormir(); // Maxi está durmiendo...
