// EJERCICIO 5.

/*
5. UN PROGRAMA QUE PIDA AL USUARIO INGRESAR EL DÍA DE LA SEMANA (LUNES A DOMINGO) Y MUESTRE UN MENSAJE QUE DIGA SI ES UN DÍA LABORABLE O DE FIN DE SEMANA.
*/

let dia = prompt("Ingrese un dia de la semana")

switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        dia = "Dia laborable"
        break;
    case "sabado":
    case "domingo":
        dia = "Fin de semana"
        break;

}
console.log(`El dia que ingreso es : ${dia}`)
