//* every es igual a some, solo que some certifica que cumpla la condición solo un objeto, every verifica que todo el arrays de objetos cumpla con esa condición

const carrito =[
    {nombre: "Teclado", precio: 100},
    {nombre: "Mouse", precio: 300},
    {nombre: "Monitor", precio: 500},
    {nombre: "Cpu", precio: 850},
    {nombre: "Celular", precio: 1000},
    {nombre: "Notebook", precio: 1700},
    {nombre: "Microprocesador", precio: 750},
    {nombre: "Fuente", precio: 347},
    {nombre: "Motherboard", precio: 1200},
    {nombre: "Ram", precio: 50},
]

//* Devuelve true
const resultado = carrito.every(producto => producto.precio <2000);

console.log(resultado);

//! Devuelve false
const resultado2 = carrito.every(producto => producto.precio >3000);

console.log(resultado2);