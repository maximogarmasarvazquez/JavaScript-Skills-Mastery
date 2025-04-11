# 🧠 1006 - This Context

Este módulo muestra cómo funciona el contexto de ejecución (`this`) en JavaScript y cómo puede cambiar según cómo se invoque una función.

## 📌 ¿Qué es `this`?

Es una palabra clave que hace referencia al **contexto de ejecución actual**. Su valor depende de **cómo se llame** una función, no de dónde está definida.

---

## 📚 Casos comunes

### 1. En un método de objeto
```js
const obj = {
  nombre: "Máximo",
  hablar() {
    console.log(this.nombre);
  }
};
obj.hablar(); // "Máximo"
