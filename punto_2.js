/* 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. 
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.
 */

const num = parseInt(prompt("Digite un numero"));

if(num%2 === 0) {
    alert(`${num} es divisible entre 2`);
}else {
    alert(`${num} no es divisible entre 2`);
}