const carrito =[
    {nombre: "Teclado", precio: 100},
    {nombre: "Mouse", precio: 100},
    {nombre: "Monitor", precio: 100},
    {nombre: "Cpu", precio: 100},
    {nombre: "Celular", precio: 100},
    {nombre: "Notebook", precio: 100},
    {nombre: "Microprocesador", precio: 100},
    {nombre: "Fuente", precio: 100},
    {nombre: "Motherboard", precio: 100},
    {nombre: "Ram", precio: 100},
]

//* Crea una nuevo array y lo muestra en consola
const nuevoArreglo = carrito.map((producto)=>{
    return `${producto.nombre} - Precio: ${producto.precio}`
});

//! No crea nada y devuelve undefined por consola
const noCreaNuevoArreglo2 = carrito.forEach((producto)=>{
    return `${producto.nombre} - Precio: ${producto.precio}`
});

console.log(nuevoArreglo);
console.log(noCreaNuevoArreglo2);