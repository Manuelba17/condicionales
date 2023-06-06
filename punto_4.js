/* 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', 
en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
 */

const num = parseInt(prompt("Digite un numero"));

if (num === 1000){
    alert("Ganaste un premio");
}else{
    alert("Sigue intentando");
}