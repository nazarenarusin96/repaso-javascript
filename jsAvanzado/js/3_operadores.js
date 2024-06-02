const num1=20;
const num2="20";
const num3=30;

//* Operador mayor a

console.log(num1>num3);
console.log(num3>num1);

//* Operador menor a

console.log(num1<num3);

//? Comparar valores

//* Revisar si 2 números son iguales

console.log(num1 ==num3); //false
console.log(num1 ==num2); //true

//* Comparador estricto (también revisa el tipo de dato)

console.log(num1 ===num2); //false
console.log(num1 ===parseInt(num2)); //true (convierte el num2 en entero)

//* Diferentes

const pass1="admin";
const pass2="Admin";

console.log(pass1 !=pass2); //true
console.log(num1 !=num2); //false
console.log(num1 !==num2); //true
console.log(num1 !=parseInt(num2)); //false

//? Comparar Null && Undefined

let numeroUndefined;

//*Undefined
console.log(numeroUndefined);
console.log(typeof numeroUndefined);

//* Null

let numeroNull = null;

console.log(numeroNull);
console.log(typeof numeroNull);

console.log(numeroUndefined == numeroNull); //true

console.log(numeroUndefined === numeroNull); // false (Siempre es mejor utilizar el comparador stricto)
