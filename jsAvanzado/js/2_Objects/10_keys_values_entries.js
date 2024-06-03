const producto ={
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible:true
}

const productoVacio ={

}

//! keys devuelve lo que se encuentra dentro del objeto

//? Devuelve la parte izquierda del objeto, las llaves
console.log(Object.keys(producto));
console.log(Object.keys(productoVacio));

//? Devuelve la parte derecha del objeto, sus valores
console.log(Object.values(producto));

//? Devuelve toda la información del objeto
console.log(Object.entries(producto));
