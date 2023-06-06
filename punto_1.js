/* 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”,
en caso de contestar no, responder: “No te creo”. */

const respuesta = prompt("¿Eres Bellisimo/a? responde si o no")

if(respuesta === "si" || respuesta === "SI"){
    alert("Ciertamente")
}else if(respuesta === "no" || respuesta === "NO"){
    alert("No te creo")
}


