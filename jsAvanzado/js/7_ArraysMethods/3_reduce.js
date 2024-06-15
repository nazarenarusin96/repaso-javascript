//* reduce realiza la suma total de lo deseado

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

const resultado = carrito.reduce ((total, producto)=> total + producto.precio, 0);
console.log(resultado);