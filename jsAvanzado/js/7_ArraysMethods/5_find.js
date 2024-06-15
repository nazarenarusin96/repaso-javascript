//* find es igual a findIndex, pero puedo traer todo el objeto. findIndex solo podias conseguir el index del objeto como tal

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

const resultado = carrito.find (producto => producto.nombre ==="Ram");

console.log(resultado);