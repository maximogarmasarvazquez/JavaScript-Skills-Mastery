// Ejemplo 1: División simple con manejo de errores
function dividir(a, b) {
  try {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError("Ambos parámetros deben ser números.");
    }

    if (b === 0) {
      throw new Error("No se puede dividir por cero.");
    }

    const resultado = a / b;
    console.log(`Resultado: ${resultado}`);
    return resultado;

  } catch (error) {
    console.error("¡Error detectado!");
    console.error(error.name + ": " + error.message);

  } finally {
    console.log("Fin de la función dividir().\n");
  }
}

dividir(10, 2);    // OK
dividir(10, 0);    // Error por división cero
dividir("10", 5);  // Error por tipo incorrecto

// Ejemplo 2: Simulando carga de datos con errores
function cargarDatosDesdeAPI() {
  try {
    let exito = Math.random() > 0.5;

    if (!exito) {
      throw new Error("No se pudo obtener los datos del servidor.");
    }

    console.log("✅ Datos cargados correctamente.");
  } catch (err) {
    console.warn("⚠️ Error al cargar los datos:", err.message);
  } finally {
    console.log("✔️ Intento de carga finalizado.\n");
  }
}

cargarDatosDesdeAPI();
cargarDatosDesdeAPI();

// Ejemplo 3: Capturar error desde un bloque asincrónico usando try/catch en async
async function obtenerUsuario() {
  try {
    // Simulamos una promesa que falla
    await Promise.reject("No se pudo obtener el usuario");
  } catch (e) {
    console.error("❌ Error asincrónico:", e);
  } finally {
    console.log("📦 Fin del proceso async.\n");
  }
}

obtenerUsuario();
