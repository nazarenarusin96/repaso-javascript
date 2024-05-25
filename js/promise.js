//* De esta manera no se van a ejecutar en orden

/*let x=10;

console.log("Primer proceso");

setTimeout(() => {
    x=x*3+2
    console.log("Segundo proceso"+ x);
});

console.log("Tercer proceso");

console.log("#############################");*/

//? De esta manera se va a ejecutar en orden

let a=10
console.log("Primer proceso");

//! Las promesas siempre llevan 2 argumentos (resolve que es la respuesta y reject en el caso que no funcione dicha promesa)

const promesa = new Promise((resove,reject)=>{
setTimeout(()=>{
    a=a+5;
    console.log("Segundo proceso");
    resove(a) //!resolveme la variable a
})
},3000)

//! Se llama la promesa con la función entonces, se le pasa un parametro que es el resolve de la funcion y lo imprime
promesa.then(res=>{
    console.log("Tercer proceso resultado: "+res);
})