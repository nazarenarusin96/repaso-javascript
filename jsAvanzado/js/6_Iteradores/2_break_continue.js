//! Break && Continue

console.log("#################BREAK##################");

for(let i=0 ; i<=10; i++){

   if(i===5){
        console.log("Llegaste al número 5, fin");
        break;  
   }
   else{
    console.log(`Número: ${i}`);
   }
}

console.log("#################CONTINUE################");

for(let i=0 ; i<=10; i++){

    if(i===5){
         console.log("Llegaste al número cinco, continuemos");
         continue;
    }
    else{
     console.log(`Número: ${i}`);
    }
 }

console.log("Ejemplo de descuento en carrito aplicando continue");

 const carrito =[
    {nombre: "Teclado", precio: 100},
    {nombre: "Mouse", precio: 100},
    {nombre: "Monitor", precio: 100, descuento: true},
    {nombre: "Cpu", precio: 100},
    {nombre: "Celular", precio: 100},
    {nombre: "Notebook", precio: 100},
    {nombre: "Microprocesador", precio: 100},
    {nombre: "Fuente", precio: 100},
    {nombre: "Motherboard", precio: 100},
    {nombre: "Ram", precio: 100},
]

for(let i=0; i<carrito.length; i++){

    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    else{
        console.log(carrito[i].nombre);
    }
    
}