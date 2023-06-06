/* 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert. */

const num = parseInt(prompt("Digite un numero"));

if (num%2 === 0) {
    alert("es par");
}else{
    alert("NO es par");
}