# 🧩 1007 - Events and Event Handling

## 📚 Descripción

Cómo manejar eventos en JavaScript. Cómo registrar eventos con `addEventListener`, cómo funcionan los eventos en el DOM, y cómo se propagan (bubbling y capturing). El manejo adecuado de eventos es esencial para crear interfaces interactivas.

---

## 🔥 Conceptos clave

### ✅ ¿Qué es un evento?

Un evento es cualquier interacción del usuario con la página, como un clic, teclado, scroll, mouse, etc.

---

### ✅ ¿Cómo registrar un evento?

```js
const boton = document.getElementById('miBoton');

boton.addEventListener('click', () => {
  alert('¡Hiciste clic!');
});
