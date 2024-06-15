//* filter funciona igual que findIndex, pero permite realizar mas operaciones sobre los arrays

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre"];

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

//* Trayendo todos los productos mayores a 1000

let resultado = carrito.filter(producto=>producto.precio >= 1000);

//? Trayendo todos los productos menores a 500

let resultado2 = carrito.filter(producto=>producto.precio < 500);

//! Filtrando por palabra que no se desee mostrar
let resultado3 = carrito.filter(producto=>producto.nombre !="Fuente");

// TODO: Filtrando por palabra que si se desee mostrar
let resultado4 = carrito.filter(producto=>producto.nombre =="Microprocesador");


console.log(resultado);
console.log("######################################");
console.log(resultado2);
console.log("######################################");
console.log(resultado3);
console.log("######################################");
console.log(resultado4);