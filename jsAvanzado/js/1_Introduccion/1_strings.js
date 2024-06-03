//? Los strings son cadenas de texto

//* Declarando variables y dandoles un valor de string de diferentes maneras: 

const producto1 = "Monitor 22 Pulgadas";

const productoPrueba = "           Monitor 32 Pulgadas           "; //Ejemplo de trim();

const pulgadas= "Monitor 22 Pulgadas";

const producto2= String("Monitor 24 Pulgadas");

const producto3= new String ("Monitor 27 Pulgadas");

const precio= " 100 USD"

//* Mostrando por consola el valor de cada variable

console.log(producto1);
console.log(producto2);
console.log(producto3);

//*La función .lenght cuenta la cantidad de letras que tiene una cadena de texto
console.log(producto1.length);

//* La función indexOf() busca si la palabra ingresada se encuentra en la variable y la imprime en consola
console.log(producto1.indexOf("Pulgadas"));

//* La función includes() busca si la palabra ingresada se encuentra en la variable e imprime su valor (true/false)
console.log(producto1.includes("Monitor"));

//? Maneras de utilizar la concatenación
console.log(producto1.concat(precio));
console.log(producto1.concat(" En Descuento"));
console.log(producto1+precio);
console.log(producto1+" Con el precio de "+precio);
console.log("El producto "+ producto1+ " tiene un precio de "+precio);

console.log(productoPrueba);

//? Eliminar el inicio con espacios de un string
console.log(productoPrueba.trimStart());
//? Eliminar el final con espacios de un string
console.log(productoPrueba.trimEnd());

console.log(productoPrueba.trimStart().trimEnd()); //! Elimina el principio y el final que contengan espacios de un string

//? Reemplazar texto seleccionado de un string
console.log(pulgadas);

console.log(pulgadas.replace('Pulgadas','"'));
console.log(pulgadas.replace('Monitor','Monitor Curvo'));

//? Cortar texto
console.log(pulgadas.slice(0, 10));
console.log(pulgadas.slice(8));
console.log(pulgadas.slice(2,1)); //! No va a mostrar nada en consola porque no es válido

//? Cortar texto de manera inteligente
console.log(pulgadas.substring(0, 10));
console.log(pulgadas.substring(2,1)); //! Va a dar vuelta los números para que la función sea válida (es más inteligente)

//? Repite la cantidad de veces deseada un texto
const texto = "En promoción".repeat(3);

console.log(texto);

//? Diferentes manersa de separar un array
const actividad = "Realizando pruebas en javascript";
console.log(actividad.split(" "));

const hobbies = "Jugar, Caminar, Leer, Escribir, Programación, Música"
console.log(hobbies.split(" "));

const tweet = "Probando funciones con #Hashtag"
console.log(tweet.split("#"));

//? Mayusculas y Minusculas
const mayusculas = "Monitor 20 Pulgadas";

console.log(mayusculas.toUpperCase());

console.log(mayusculas.toLowerCase());

const email ="CORREO@CORREO.COM"

console.log(email.toLocaleLowerCase());

//? Número en formato number y en formato string
const precioNum = 300;

console.log(precioNum);

console.log(precioNum.toString());