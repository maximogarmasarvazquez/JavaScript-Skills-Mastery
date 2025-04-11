# 1008 - Error Handling and Exceptions

## 📚 Descripción

Este concepto aborda cómo JavaScript maneja errores mediante bloques `try`, `catch` y `finally`. Es esencial para controlar errores en tiempo de ejecución, evitar que el programa se detenga inesperadamente y manejar excepciones de forma limpia y segura.

---

## 🧠 Conceptos Clave

- **try**: Intenta ejecutar un bloque de código que puede generar un error.
- **catch**: Captura y maneja el error si ocurre.
- **finally**: Se ejecuta siempre, ocurra o no un error, ideal para cerrar recursos o finalizar procesos.

---

## 💡 Ejemplo Básico

```js
function dividir(a, b) {
  try {
    if (b === 0) {
      throw new Error("No se puede dividir por cero.");
    }
    return a / b;
  } catch (error) {
    console.error("Se produjo un error:", error.message);
  } finally {
    console.log("Operación finalizada.");
  }
}

dividir(10, 2); // ✅ Devuelve 5
dividir(10, 0); // ❌ Error manejado: No se puede dividir por cero
