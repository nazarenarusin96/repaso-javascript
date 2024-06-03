"use strict"; //! Previene que un objeto sea modificado

//* La variable const (constante) significa que el valor que este dentro de esta variable no podrá ser modificada

//? A pesar de estar en una variable const, las propiedades del objeto si pueden ser manipuladas

const producto ={
        nombre: "Monitor 20 Pulgadas",
        precio: 300,
        disponible:true
}

producto.disponible = true;
producto.imagen = "imagen.jpg"

console.log(producto);

//! Este código va a generar erro ya que utilizando la función use strict bloquea por completo el poder manipular un objeto mientras este en una variable const