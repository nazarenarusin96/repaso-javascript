//? Creando la función

num1 = 20;

num2="20;"

//! Utilizar la primera
function sumar (){
    console.log(2+2);
}

//* Llamando la función
sumar();

const sumita = function (){
    console.log(3+3);
}

sumita();

//#########################################################

function saludo(nombre, apellido){
    console.log(`Nombre: ${nombre} - Apellido: ${apellido}`);
}

saludo("Nazarena", "Rusin");

//#########################################################

//* Parametros por default

//* Colocando un valor por defecto en el caso de que no se haya ingresado los datos requeridos

function saludo2(nombre, apellido = "Parámetro vacío"){
    console.log(`Nombre: ${nombre} - Apellido: ${apellido}`);
}

saludo2("Nazarena");
