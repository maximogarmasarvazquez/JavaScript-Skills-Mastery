// 1. Contexto "this" en un objeto
const persona = {
  nombre: "Máximo",
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

persona.saludar(); // Hola, soy Máximo

// 2. "this" fuera de un objeto (modo estricto vs no estricto)
function mostrarThis() {
  "use strict";
  console.log(this); // undefined (en estricto), window (sin estricto)
}

mostrarThis();

// 3. "this" en una función dentro de un método
const usuario = {
  nombre: "Max",
  mostrar: function () {
    function interna() {
      console.log(this.nombre); // undefined (this apunta al contexto global)
    }
    interna();
  },
};

usuario.mostrar();

// 4. Solución: usar arrow function (no crea su propio this)
const usuarioArrow = {
  nombre: "Max",
  mostrar: function () {
    const interna = () => {
      console.log(this.nombre); // Max (hereda el this del contexto padre)
    };
    interna();
  },
};

usuarioArrow.mostrar();

// 5. Cambiar el "this" usando bind
function saluda() {
  console.log(`Hola, soy ${this.nombre}`);
}

const otraPersona = { nombre: "Luna" };

const saludoLuna = saluda.bind(otraPersona);
saludoLuna(); // Hola, soy Luna
