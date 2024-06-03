function Producto (nombre, precio, disponible){
    this.nombre = nombre,
    this.precio = precio,
    this.disponible = disponible
}

const ingresandoProducto = new Producto ("Monitor 24 Pulgadas", 500, true);

console.log(ingresandoProducto);