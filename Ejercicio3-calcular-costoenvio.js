// EJERCICIO 3.


/* 3. UNA EMPRESA DE ENVÍOS QUIERE IMPLEMENTAR UN PROGRAMA PARA CALCULAR EL COSTO DE ENVÍO DE UN PAQUETE. EL COSTO DEPENDE DEL DESTINO Y DEL PESO DEL PAQUETE. SI EL DESTINO ES DENTRO DEL PAÍS, EL COSTO ES DE $10 POR CADA KILO. SI EL DESTINO ES FUERA DEL PAÍS, EL COSTO ES DE $20 POR CADA KILO. ESCRIBE UN PROGRAMA QUE CALCULE EL COSTO DE ENVÍO DE UN PAQUETE DADO SU DESTINO Y PESO.*/


const detino = prompt("Hacia donde desea enviar el paquete?");
const pesotext = prompt("Cuantos kilos pesa el paquete?");
const peso = parseInt(pesotext);

const persocalc = peso * 20;

let lugar = 0;

switch (detino) {
    case "Guatemala":
    case "Santa rosa":
    case "Baja verapaz":
    case "Alta verapaz":
    case "El progreso":
    case "Izabal":
    case "Chiquimula":
    case "Zacapa":
    case "Jalapa":
    case "Jutiapa":
    case "Sacatepequez":
    case "Chimaltenango":
    case "Escuintla":
    case "Solola":
    case "Totonicapan":
    case "Quetzaltenango":
    case "Suchitepequez":
    case "Retalhuleu":
    case "San marcos":
    case "Huehuetenango":
    case "Quiche":
    case "Peten" :
        lugar = 10;
        break;
    default:
        lugar = 20;
}

const total = persocalc + lugar;

console.log(`El costo del peso es : ${persocalc}, El precio del destino es : ${lugar} El costo total del envío es: ${total}`);
