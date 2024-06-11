//! IF no ejecuta todas las condiciones, solo la primera que se cumple

const puntaje = 1000;
const puntaje2 = 2000;


if(puntaje == 1000){
    console.log("Es igual");
}
else{
    console.log("No es igual");
}

//#########################################

if(puntaje2 != 2000){
    console.log("Es diferente");
}
else{
    console.log("Es igual");
}

//#########################################

//*Comparador Estricto

if(puntaje2 == "2000"){
    console.log("Es igual");
}

if(puntaje2 === 2000){
    console.log("Es igual");
}
else{
    console.log("Es diferente");
}

//#########################################

const dinero =500;
const dinero2 =200;
const totalPagar = 300;

console.log("###Mayor que###");

if(dinero > totalPagar){
    console.log("Si se puede pagar");
}
else{
    console.log("Dinero insuficiente");
}

console.log("###Menor que###");

if(dinero2 < totalPagar){
    console.log("Dinero insuficiente");
}
else{
    console.log("Si se puede pagar");
}

//#########################################

tarjeta = true;
const dinero3 =500;

if(dinero3 >= totalPagar){
    console.log("Si se puede pagar");
} else if(tarjeta){
    console.log("Puedo ejecutar el pago porque poseo la tarjeta");
}
else{
    console.log("Fondos insuficiente");
}

//#########################################

console.log("OPERADOR AND (&&)");

const usuario = true;
const puedePagar = true;

if (usuario && puedePagar){ 
    console.log("Si puede comprar");
}
else if(!usuario){ //! El signo de exclamación delante de la variable significa si no puede
    console.log("Inicia sesión o saca una cuenta");
}
else if(!puedePagar){
console.log("Fondos insuficientes");
}
else{
    console.log("No puedes comprar");
}

//#########################################

console.log("OPERADOR OR( || )");

const efectivo = 300;
const credito=500;
const disponible = efectivo + credito;
const totalAPagar=600;

if(efectivo > totalAPagar || credito > totalAPagar || disponible > totalAPagar){
    console.log("Si se puede realizar el pago");
}
else{
    console.log("Fondos insuficientes");
}

//#########################################

const puntajeJuego = 450;

function revisionPuntaje(){

    if (puntajeJuego >400){
        console.log("Buen Puntaje");
        return;
    }

    if (puntajeJuego >300){
        console.log("Excelente Puntaje");
        return;
    }
}

revisionPuntaje();