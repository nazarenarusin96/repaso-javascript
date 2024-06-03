"use strict";

const producto ={
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible:true
}

Object.seal(producto); //! A diferencia de freeze, seal nos permite modificar lo que ya esta declarado, pero nos nos deja agregar ni borrar parametros del objeto

producto.disponible=false; //* Va a cambiar el parametro disponible exitosamente

//producto.imagen = "img.js"; //! Va a generar error ya que no se puede agregar ningun parametro nuevo

//delete producto.precio; //! Va a generar error ya que no se puede eliminar ningun parametro nuevo

console.log(producto);