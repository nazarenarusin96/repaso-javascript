const autenticado = true;
const puedePagar = true;


//! ? signfinica if, : significa else

console.log(autenticado && puedePagar? "Si esta autenticado" : "error");

console.log(autenticado || puedePagar? "Si esta autenticado" : "error");

console.log(autenticado ? puedePagar? "Si esta autenticado": "Si esta atutenticado, pero no puede pagar" : "error");
