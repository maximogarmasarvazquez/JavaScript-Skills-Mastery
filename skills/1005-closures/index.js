function crearContador() {
  let contador = 0;

  return function () {
    contador++;
    console.log(contador); 
    return contador;
  };
}

const contar = crearContador();

contar(); // 1
contar(); // 2
contar(); // 3