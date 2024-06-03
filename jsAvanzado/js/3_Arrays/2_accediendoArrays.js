const numeros = [10, 20, 30, [40, 50, 60]];

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[40]); //undefined
console.log(numeros[3]); //accediendo al array dentro del array
console.log(numeros[3] [1]); //accediendo al array dentro del array y accediendo a un número