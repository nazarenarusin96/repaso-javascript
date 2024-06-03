//! Lo booleanos solo pueden ser true o false

const boolean1 =true;
const boolean2 =false;
const boolean3 ="true";
const boolean4 =new Boolean(true); //object


console.log(boolean1 == boolean3);
console.log(boolean1 === boolean3);

console.log(boolean4);
console.log(typeof boolean4);

console.log(boolean1 === true);
console.log(boolean1 === "true");

//? Operador ternario

let autenticado = false;

if(autenticado){
    console.log("Si, esta autenticado");
} else{
    console.log("No esta autenticado");
}

console.log(autenticado ? "Si, esta autenticado" : "No esta autenticado"); //! Suplanta de alguna manera al if()

