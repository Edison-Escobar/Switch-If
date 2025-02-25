// EJERCICIO 6.

/*
6. UN PROGRAMA QUE PIDA AL USUARIO INGRESAR UNA LETRA DEL ALFABETO Y DETERMINE SI ES UNA VOCAL O UNA
CONSONANTE.
*/

let letra = prompt("Ingrese una letra del abecedario")

switch (letra) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        letra = "La letra que ingreso es una vocal";
        break;
    default:
        letra = "La letra que ingreso es una consonante";
        break;

}
console.log(`${letra}`)