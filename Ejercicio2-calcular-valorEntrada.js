// EJERCICIO 2.


/* 
2. UN PARQUE DE DIVERSIONES QUIERE IMPLEMENTAR UN PROGRAMA PARA CALCULAR EL COSTO DE ENTRADA DE SUS VISITANTES. EL COSTO DEPENDE DE LA EDAD DEL VISITANTE. SI ES UN NIÑO MENOR DE 12 AÑOS, LA ENTRADA ES DE $10. SI ES UN ADULTO MAYOR DE 60 AÑOS, LA ENTRADA ES DE $15. SI ES UN ADULTO ENTRE 12 Y 60 AÑOS, LA ENTRADA ES DE $20. ESCRIBE UN PROGRAMA QUE CALCULE EL COSTO DE ENTRADA DE UN VISITANTE DADO SU EDAD. */

const personatext = prompt("Cual es la deda de la persona?")
const persona = parseInt(personatext)

let entrada = 0;

if (persona <= 12){
    entrada = "La entrada espara un niño y el valor es de $12";
} else if (persona >= 60){
    entrada = "La entrada espara un Adulto mayor y el valor es de $15";
} else {
    entrada = "La entrada espara un adulto y el valor es de $20";
}

    console.log(entrada)
    