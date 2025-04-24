# 🧱 1101 - Objects and Properties

En JavaScript, los **objetos** son estructuras fundamentales para almacenar y organizar datos. Permiten agrupar múltiples valores bajo una sola entidad usando claves (propiedades) y valores.

---

## 📌 ¿Qué es un objeto?

Un objeto en JavaScript es una colección de pares clave-valor. Las claves son cadenas (o símbolos) y los valores pueden ser cualquier tipo de dato: números, strings, funciones, otros objetos, etc.

```js
const persona = {
  nombre: "Maxi",
  edad: 21,
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`);
  }
};
