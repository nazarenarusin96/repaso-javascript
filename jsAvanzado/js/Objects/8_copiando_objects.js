const producto ={
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible:true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de {this.precio}`); //! Manera de referirse a parametros dentro del mismo objeto para no crear variables innecesarias
    }
}

const medidas ={
    peso: "1kg",
    med: "1m"
}

console.log(producto);
console.log(medidas);

//? Maneras de copiar 2 objetos diferentes, unirlos e imprimirlos
const resultado = Object.assign(producto, medidas);

const restOperator = {...producto, ...medidas}

console.log(resultado);
console.log(restOperator);

producto.mostrarInfo();