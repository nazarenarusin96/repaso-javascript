//*Función normal

/*function saludar(){
    alert("Esto es una función de tipo flecha")
}*/

//? Función hecha con typescript, es lo mismo de arriba, pero mas abreviado y se deja de utilizar la palabra function

const saludar = () =>{
    alert("Esto es una función de tipo flecha")
}

saludar()

//? La función flecha sirve para acortar significativamente el codigo

//* Función básica
function resta(a,b){
    console.log(a-b);
    return a-b
}

//? Función con metodo flecha
const restita = (a,b) =>{
    console.log(a-b);
}

//* Función normal
/*function cuadrado(x){
    console.log(x*x);
}*/

//? Función flecha

const cuadrado= x => console.log(x*x);

cuadrado(9)

//? Función con valores predeterminados

const sumita = (a=5, b=10) =>{
    console.log(a+b);
}

sumita()