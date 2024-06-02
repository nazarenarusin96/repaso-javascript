//* Declarando variables tipo number y sus tipos

const numero1 =30;
const numero2 =20;
const numeroFloat =20.20;
const numeroNegativo =-20;
const numero3 = new Number(80); //! Crea un tipo objeto, esta manera no es muy convencional


console.log(numero1);
console.log(numero2);
console.log(numeroFloat);
console.log(numeroNegativo);
console.log(numero3);

//* Calculadora

let resultadoSuma;
let resultadoResta;
let resultadoMulti;
let resultadoDiv;
let resultadoMultiplo;


resultadoSuma = numero1+numero2;

resultadoResta = numero1-numero2;

resultadoMulti = numero1*numero2;

resultadoDiv = numero1/numero2;

//resultadoMultiplo = numero1+numero2;

//? Funciones Math

let resultado = Math.PI;

let resultadoArriba = Math.PI;

let resultadoAbajo = Math.PI;

let resultadoRaiz = Math.PI;

let resultadoAbs = Math.PI;

let resultadoPotencia = Math.PI;

let resultadoMin = Math.PI;

let resultadoMax = Math.PI;

let resultadoRandom = Math.PI;

let resultadoRandomMulti = Math.PI;

let resultadoGenerator = Math.PI;



resultado = Math.round(2.8); // Redondea un número asignado

resultadoArriba = Math.ceil(2.1); // Redondea hacia arriba

resultadoAbajo = Math.floor(2.7); // Redondea hacia abajo

resultadoRaiz = Math.sqrt(12389090443); // Raíz cuadrada

resultadoAbs = Math.abs(500); // Trae el valor absoulto, en este caso 500

resultadoPotencia = Math.pow(2,4); // Potencia

resultadoMin = Math.min(2, 6, 4, 1); // Trae el menor número

resultadoMax = Math.max(2, 5, 8, 10); // Trae el mayor número

resultadoRandom = Math.random(); // Números randoms, casi siempre son flotantes

resultadoRandomMulti = Math.random()*20; // Números randoms, casi siempre son flotantes

resultadoGenerator = Math.floor(Math.random()*30); // Generando numeros del 0 al 30

console.log("Redondea un número asignado "+resultado);
console.log("Redondea hacia arriba "+resultadoArriba);
console.log("Redondea hacia abajo "+resultadoAbajo);
console.log("Raíz cuadrada "+resultadoRaiz);
console.log("Trae el valor absoulto, en este caso 500: "+resultadoAbs);
console.log("Potencia "+resultadoPotencia);
console.log("Trae el menor número "+resultadoMin);
console.log("Trae el mayor número "+resultadoMax);
console.log("Números randoms, casi siempre son flotantes "+resultadoRandom);

//Orden de las operaciones
let orden1 = 20+30*2;

let orden2 = (20+30)*2;

let descuento = (20+30+40+50+60)*2;

let impuesto = (20+30)*1.16;

console.log(orden1);
console.log(orden2);
console.log(descuento);
console.log(impuesto);

//? Incrementos y decremetos

let puntajeSuma = 5;
let puntajeResta = 5;

++puntajeSuma;//5
++puntajeSuma;//6

puntajeResta--;//5
puntajeResta++;//4

console.log(puntajeSuma);
console.log(puntajeResta);

//? Convertir String a Números

const num1="20";
const num2="20.2";
const num3="Uno";
const num4=20;

console.log(num1); //string
console.log(typeof num1); // typeof es para saber que tipo de variable es 
console.log(Number.parseInt(num1)); //parseando de string a numero

console.log(Number.parseFloat(num2)); //parseando de string a numero

console.log(Number.parseInt(num3)); // Va a devolver NaN

console.log(Number.isInteger(num4)); // isInteger valida si es un número de tipo entero o no (devuelve true)

console.log(Number.isInteger(num3)); // isInteger valida si es un número de tipo entero o no (devuelve false)
