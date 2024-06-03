"use strict"; //! El lenguaje deja de ser permisivo

//* La variable const (constante) significa que el valor que este dentro de esta variable no podrá ser modificada

//? A pesar de estar en una variable const, las propiedades del objeto si pueden ser manipuladas

const producto ={
        nombre: "Monitor 20 Pulgadas",
        precio: 300,
        disponible:true
}

Object.freeze(producto); //! object.freeze() "congela" el código, es decir que no se va a poder modificar

//producto.disponible = true;
//producto.imagen = "imagen.jpg"

console.log(producto);

console.log(Object.isFrozen(producto)); //* Muestra en formato booleano si un objeto esta freezeado o no

//! Este código va a generar error ya que utilizando la función object.freeze() bloquea por completo el poder manipular un objeto mientras este en una variable const

