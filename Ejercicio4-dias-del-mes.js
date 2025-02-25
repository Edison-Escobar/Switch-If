// EJERCICIO 4.


/* PARA UNA FUNCIONALIDAD DEL PROGRAMA QUE ESTÁ DESARROLLANDO SU EQUIPO ES NECESARIO DETEMINAR LA CANTIDAD DE DÍAS QUE TIENE UN MES APARTIR DEL NOMBRE DEL MES.
*/

let mes = prompt("Ingrese el Mes")

switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log("Este me tiene 31 dias")
        break;
    case "noviembre":
    case "abril":
    case "junio":
    case "septiembre":
        console.log("Este mes tiene 30 dias")
        break;
    case "febrero":
        console.log("Este mes tiene 28 dias") 
}
