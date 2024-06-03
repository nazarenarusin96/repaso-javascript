//* Un objecto agrupa todo en una sola variable

//! En lugar de tener tantas variables, se pude crear un object que agrupa todas esas variables

//? Creando un objecto

// Object literal
const producto ={
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    pass:1234,
}

//? Maneras de acceder a un valor especifico dentro del objeto
console.log(producto.nombre);

console.log(producto["precio"]);

//? Agregando y eliminando propiedades de un objeto

//* Agregando

producto.imagen = "imagen.jpg";

console.log(producto);

//* Eliminando

delete producto.pass;

console.log(producto);

//? Extrae el valor de una propiedad del object y lo pone en una variable
//const {nombre}=producto;

const {nombre, precio, disponible}=producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

//! Objects mas avanzado

const productoObject ={
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    pass:1234,
    Informacion:{
        fabricacion:{
            pais: "Argentina",
            fecha: "30/11/1996"
        },
        medidas:{
            peso: "1kg",
            med: "50cm"
            }
    }
}

console.log(productoObject.Informacion);
console.log(productoObject.Informacion.fabricacion.pais);
console.log(productoObject.Informacion.medidas);

//? Acceder a información especifica dentro del object

//! Destructuring

const {Informacion, Informacion: { fabricacion } } = productoObject;

const {Informacion: { fabricacion:{pais} } } = productoObject;


console.log(fabricacion); //* Debe mostrar todo lo que contiene la sección fabricación
console.log(pais); //* Debe mostrar solo la sección país dentro de fabricación
