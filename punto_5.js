/* 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales. */

const a = parseInt(prompt("Digite un numero"));
const b = parseInt(prompt("Digite un numero"));

if (a > b) {
  alert(`${b} es el menor`);
} else {
  alert(`${a} es el menor`);
}
