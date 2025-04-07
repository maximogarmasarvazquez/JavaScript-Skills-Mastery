# 🧠 JavaScript – Control Flow

Este repositorio contiene ejemplos prácticos y explicaciones detalladas sobre uno de los pilares fundamentales en la programación con JavaScript: **el flujo de control**. Aquí exploramos cómo hacer que el programa tome decisiones y repita acciones según ciertas condiciones.

---

## 📌 Tema: Control Flow

**Descripción:**  
Uso de instrucciones condicionales y bucles en JavaScript. Se incluyen `if`, `else`, `switch`, `for`, `while` y `do...while`.

---

## 📖 Contenidos

### 🔹 Condicionales

Las condicionales permiten que tu programa ejecute diferentes bloques de código dependiendo del valor de ciertas expresiones lógicas.

#### ✅ `if` / `else if` / `else`
Estructura básica de decisión.

```js
const edad = 20;

if (edad < 18) {
  console.log("Menor de edad");
} else if (edad === 18) {
  console.log("Justo 18 años");
} else {
  console.log("Mayor de edad");
}
