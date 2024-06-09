const meses = ["enero", "febrero", "marzo", "abril", "mayo"];

console.table(meses);

console.log("#Agregando junio al ultimo elemento del array#");

meses.push("junio");

console.table(meses);

//##########################################################################

const carrito = [ ];

const producto1 ={
    nombre:"Mouse",
    precio: 250
}

const producto2 ={
nombre:"Teclado",
precio: 300
}

const producto3 ={
nombre:"Televisor",
precio: 500
}
        
const producto4 ={
nombre:"Celular",
precio: 700
}

const producto5 ={
nombre:"Monitor 24 Pulgadas",
precio: 100
}

const producto6 ={
nombre:"Placa de video",
precio: 150
}

const producto7 ={
nombre:"Parlantes",
precio: 150
}

const producto8 ={
nombre:"Microprocesador",
precio: 150
}

const producto9 ={
nombre:"Cables",
precio: 150
}

const producto10 ={
nombre:"Cpu",
precio: 150
}


//! Manera imperativa, trabaja sobre la misma variable declarada
carrito.push(producto1) //* pushea al final del array
carrito.unshift(producto2);//* pushea al principio del array

carrito.push(producto3)
carrito.push(producto4)
carrito.push(producto5)
carrito.push(producto6)
carrito.push(producto7)
carrito.push(producto8)
carrito.push(producto9)
carrito.push(producto10)

console.table(carrito);

//? Manera declarativa, no modifica la variable original

/* let resultado = [ ];

resultado = [...carrito, producto];

console.log("--------------------");

resultado = [producto2, producto3, ...resultado];

console.table(resultado); */

//! Eliminar desde el final del array

carrito.pop();

console.log("Eliminando el último objeto del array (Cpu)");

console.table(carrito);

//! Eliminar desde el principio del array

carrito.shift();

console.log("Eliminando el primer objeto del array (Teclado)");

console.table(carrito);

//! Eliminando desde una posición deseada del array

console.log("Eliminando el objeto deseado del array (Monitor 24 Pulgadas)");

carrito.splice(3, 1)
console.table(carrito)