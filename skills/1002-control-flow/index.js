
// Condicionales simples y compuestos
// Estructuras de control de flujo: if, switch, for, while, do while

let edad = 18;
//if else 
if (edad < 18) {
  console.log("Eres menor de edad");
} else if (edad === 18) {
  console.log("Recién cumplidos");
} else {
  console.log("Eres mayor de edad");
}

let dia = "lunes";
//switch
switch (dia) {
  case "lunes":
    console.log("Comienza la semana");
    break;
  case "viernes":
    console.log("Fin de semana cerca");
    break;
  default:
    console.log("Día común");
}

//for
for (let i = 0; i < 5; i++) {
    console.log("Iteración:", i);
  }

//while
  let j = 0;
do {
  console.log("Se ejecuta al menos una vez:", j);
  j++;
} while (j < 3);