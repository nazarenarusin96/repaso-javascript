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

console.log(carrito.length);

//? Recorre el array y trae cada elemento

for(let i=0; i<carrito.length; i++){
    console.log(carrito[i].nombre);
}

//* Ejemplo de como identificar pares e impares mediante un for con if utilizando modulo

for(let i=0 ; i<=10; i++){

    if(i % 2===0){
        console.log(`El número ${i} es PAR`);
    }
    else{
        console.log(`El número ${i} es IMPAR`);

    }
}