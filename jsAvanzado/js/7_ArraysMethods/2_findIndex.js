//* findIndex sirve para encontrar parámetros dentro de arrays o arrays con objetos de una manera mas sencilla para prescindir del for

//! findIndex solo deja traer un valor

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
    {nombre: "Motherboard", precio: 154},
    {nombre: "Ram", precio: 50},
]

//* Encontrando parámetros en un array
const indice = meses.findIndex(mes => mes === "noviembre");

//* Devuelve el parámetro encontrado por consola
console.log(indice);

//! Al no encontrar el parámetro requerido, devuelve -1

const menosUno = meses.findIndex(mes => mes === "diciembre");

console.log(menosUno);

console.log("##############################################################");

//? Encontrando parámetros en un array con objetos

const existe = carrito.findIndex((producto)=>{
    return producto.nombre ==="Cpu"
});
console.log("Posición "+existe);