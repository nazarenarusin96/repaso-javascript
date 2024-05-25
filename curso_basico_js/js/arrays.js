//**recorrer un array y su tamaño


let frutas =["naranja","manzana","pera","banana"]

console.log("El número de alimentos es: " + frutas.length); //tamaño del array

console.log("Mostrar el número" + frutas[2]);//recorre el array

frutas.forEach(function(elemento, indice, array){
    alert("El elemento es: "+elemento)
    alert("El indice es: "+indice)
    alert("El array es: "+array)
})

//?Agregar elemento al final del array

let nuevoElemento=frutas.push("Anana")//.push agrega elementos al array

frutas.forEach(function(elemento, indice, array){
    alert("El array es: "+array)
})

//?Eliminar ultimo elemento

let eliminarElemento=frutas.pop()//.pop elimina el ultimo elemento de un array

frutas.forEach(function(elemento, indice, array){
    alert("El array es: "+array)
})

//?Agregar al principio del array

let agregarElemento= frutas.unshift("Granada")

frutas.forEach(function(elemento, indice, array){
    alert("El array es: "+array)
})

//?Eliminar el primer elemento del arrays

let EliminarElemento1= frutas.shift()

frutas.forEach(function(elemento, indice, array){
    alert("Se elimino el primer elemento")
})

//?Encontrar elemento en una determinada posicion

let buscarElemento= frutas.indexOf("manzana")
alert("elemento encontrado: " + buscarElemento)

//?Eliminar elemento en una determinada posicion

let eliminarElementoPos=frutas.splice(buscarElemento, 1)

frutas.forEach(function(elemento,indice,array){
    alert("Indice: " + indice)
    alert("Elemento: "+ elemento)
})

//?Copiar todo el array en otro array

let frutas2=[]
frutas2=frutas.slice()

frutas2.forEach(function(elemento, indice, array){
    alert("Frutas 2")
    alert("indice: "+ indice)
    alert("elemento "+elemento)
})
