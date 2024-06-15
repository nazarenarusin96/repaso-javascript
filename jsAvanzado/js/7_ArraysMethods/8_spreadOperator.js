//* Spread Operator no se le puede asingar a un objeto (...objeto)

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre"];

console.log("#####Array original#####");
console.log(meses);

const meses2 = [...meses, "Diciembre"]; //! ...meses copia el array original y crea una nueva variable que contiene esa infomación para poder ser modificada sin tocar el array original

console.log("#####Array con Spread Operator#####");
console.log(meses2);

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

//*Agregando objetos al carrito

const producto = {...carrito, nombre: "Disco duro", precio: 500}

//* Copiando array original y creando una variable nueva que contenga esa infomarción para poder ser manipulada sin problemas
const carrito2 = {...carrito, producto}

console.log(carrito2);