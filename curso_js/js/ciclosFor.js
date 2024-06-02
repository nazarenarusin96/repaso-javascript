//*Función que muestra mediante un for la cantidad de veces que se quiere ejecutar las suma de manera hardcodeada y muestra su resultado

let x=0;
let=a=0;
let=b=0;
let=c=0;

let=d=0
let e=0;
let suma=0;

let num1=parseInt(prompt("Ingrese cantidad de veces que se quiere repetir el ciclo for: "))

for(x=0; x<=2;x++){
console.log("El numero se repite: "+x);

a=parseInt(prompt("Ingrese a: "))
b=parseInt(prompt("Ingrese b: "))

c=a+b

alert("El resultado de c es: "+ c);
}

//*Función que muestra mediante un for el resultado de una suma mediante 
for(x=1;x<=num1;x++){
    d=parseInt(prompt("Ingrese d: "))
    e=parseInt(prompt("Ingrese e: "))
    suma=d+e
    
    alert("El resultado de suma es: "+ suma);
}

let tabla=parseInt(prompt("Que tabla desea mostrar: "))
let num=parseInt(prompt("Hasta que numero desea mostrar: "))
let numero=0;

for(x=0; x<=num; x++){
   numero=tabla;

    console.log(numero+"x"+x+"="+(numero*x));
}

let datos=[1,2,3,4,5,6,7,8,9,10]

console.log("Numero de elementos: "+datos.length);

for(let x=1;x<=datos.length;x++){
console.log("numero de repeticiones: "+x);
} 

const object={a:1, b:2, c:3, nombre:"naza"} //* a seria producto y 1 seria el objeto

for(let producto in object){
    console.log(`${producto}: ${object[producto]}`);
}

//*Recorrer array con un for común
let frutas=["Naranja", "Pera", "Manzana", "Sandía"]

console.log(frutas.length);

for(x=0; x<frutas.length;x++){
console.log("Fruta numero: "+x+"="+frutas[x]);
}

//* Recorrer array con foreach

let frutas2=["Naranja", "Pera", "Manzana", "Sandía"]

frutas2.forEach(function(elemento, indice, array){
    console.log(indice, elemento);
})