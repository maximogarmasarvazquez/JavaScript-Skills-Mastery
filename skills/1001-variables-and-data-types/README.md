# 🧠 Ejercicio 01 - Variables and Data Types

## 📝 Descripción

En este ejercicio vamos a explorar los fundamentos esenciales de JavaScript: la declaración de variables utilizando `var`, `let` y `const`, junto con la comprensión de los **tipos de datos primitivos** y los **objetos**.

Es la base de todo lenguaje de programación, y comprender esto correctamente es clave para avanzar en conceptos más complejos.

---

## 📚 Contenido

### ✅ Declaración de Variables

JavaScript permite declarar variables de tres formas distintas:

| Declaración | Alcance (Scope)  | Reasignable | Redeclarable | Recomendado |
|-------------|------------------|-------------|--------------|-------------|
| `var`       | Función           | ✅           | ✅            | ❌           |
| `let`       | Bloque            | ✅           | ❌            | ✅           |
| `const`     | Bloque            | ❌           | ❌            | ✅ (si no cambia el valor) |

> ⚠️ Importante: `const` no significa que el valor interno no pueda mutar, solo que no se puede **reasignar la referencia**.

---

### ✅ Tipos de Datos Primitivos

Los **tipos primitivos** son los bloques más básicos de datos:

| Tipo       | Ejemplo            | Descripción                            |
|------------|--------------------|----------------------------------------|
| `string`   | `"Hola"`           | Texto entre comillas                   |
| `number`   | `42`, `3.14`       | Números (enteros o decimales)          |
| `boolean`  | `true`, `false`    | Valores lógicos                        |
| `undefined`| `let x;`           | Variable declarada pero sin valor      |
| `null`     | `let x = null;`    | Valor intencionalmente vacío           |

---

### ✅ Objetos

Un **objeto** en JavaScript es una colección de datos en formato `clave: valor`.

```js
const persona = {
  nombre: "Máximo",
  edad: 21,
  nacionalidad: "Argentina"
};
