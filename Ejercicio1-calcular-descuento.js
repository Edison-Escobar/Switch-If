// EJERCICIO 1.


/* UN RESTAURANTE QUIERE IMPLEMENTAR UN PROGRAMA DE DESCUENTOS PARA SUS CLIENTES. SI EL CLIENTE ES UN ESTUDIANTE, SE LE APLICA UN DESCUENTO DEL 10%. SI ES UN ADULTO MAYOR, SE LE APLICA UN DESCUENTO DEL 15%. SI ES UN CLIENTE FRECUENTE, SE LE APLICA UN DESCUENTO DEL 20%. ESCRIBE UN PROGRAMA QUE CALCULE EL DESCUENTO A APLICAR A CADA CLIENTE Y MUESTRE EL MONTO TOTAL A PAGAR.
*/

const gastotextp = prompt ("Cuanto gasto?")
const cliente = prompt("Que tipo de cliente es? estudiante, adulto mayor o cliente frecuente")
const gasto = parseInt(gastotextp)

let descuento = 0;

if (cliente == "estudiante"){
    descuento = 0.10;
} else if (cliente == "adulto mayor"){
descuento = 0.15;
} else if (cliente == "cliente frecuente"){
    descuento = 0.20;
}

let descuentototal = (gasto * descuento)
let Total = (gasto - descuentototal)

console.log(`El gasto total fue : ${gasto} El descuento es de : ${descuentototal} y el total a pagar es : ${Total}`)