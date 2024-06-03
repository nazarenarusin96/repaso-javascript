//! Los arrays siempre comienzan en 0

const numeros = [10, 20, 30];

const meses = new Array ("enero", "febrero", "marzo");

const deTodo = ["Hola", 10, true, "si", null, {nombre: "naza", apellido: "rusin", edad: 27}, [1, 2, 3]]; //! Puede existir un array dentro de otro array

console.log(numeros);
console.log(meses);
console.log(deTodo);

console.table(numeros);