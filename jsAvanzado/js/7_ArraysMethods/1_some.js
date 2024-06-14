const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre"];


//? Devuelve true o false en el caso de que se encuentre o no lo requerido en el array

//* Devuelve true
const resultado = meses.includes("enero"); //! Includes no sirve en un array de objetos
console.log(resultado);

//! Devuelve false
const resultado2 = meses.includes("diciembre"); 
console.log(resultado2);

console.log("#############################################");

//* En un arreglo de objetos se utiliza .some

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

//* Devuelve true
const existe = carrito.some((producto)=>{
    return producto.nombre ==="Cpu"
});
console.log(existe);

//! Devuelve false
const existe2= carrito.some(producto=> producto.nombre ==="Parlantes");
console.log(existe2);

console.log("#############################################");
console.log("Utilizando .some para recorrer un array básico");

const mesSome = meses.some(mes =>mes==="febrero")
console.log(mesSome);