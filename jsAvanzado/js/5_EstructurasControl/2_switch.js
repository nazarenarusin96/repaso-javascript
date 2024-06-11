const metodoPago = "efectivo";

switch(metodoPago){
    case "efectivo":
        console.log(`Pagaste con ${metodoPago}`);
        break;

        case "cheque":
        console.log(`Pagaste con ${metodoPago}`);
        pagar();
        break;

        default:
            console.log("Método de pago no soportado")
}

function pagar (){
    console.log("Ejecutando pago");
}