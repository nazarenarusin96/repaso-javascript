//? Iterando con arrays

const pendientes = ["trabajar", "estudiar", "comprar", "tareas", "proyecto"];

//pendientes.forEach(pendiente=>console.log(pendiente)); //! cuando se le pasa solo un parámetro

pendientes.forEach((pendiente, index)=>{
    console.log(`${index} : ${pendiente}`);
}) 

console.log("######################################################");

//* Iterando con objetos

const carrito =[
    {nombre: "Teclado", precio: 100},
    {nombre: "Mouse", precio: 300},
    {nombre: "Monitor", precio: 500},
    {nombre: "Cpu", precio: 850},
    {nombre: "Celular", precio: 1000},
    {nombre: "Notebook", precio: 1700},
    {nombre: "Microprocesador", precio: 750},
    {nombre: "Fuente", precio: 347},
    {nombre: "Motherboard", precio: 154},
    {nombre: "Ram", precio: 50},
]

carrito.forEach((compra, index)=>{
    console.log(`${index} : ${compra.nombre}`);
});

console.log("######################################################");

const nuevoArray = carrito.map (compra =>compra.precio);

console.log(nuevoArray);