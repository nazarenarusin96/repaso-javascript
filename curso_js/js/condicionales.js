let a= 10

if(a==10){
console.log("El valor es 10");
}

else{
console.log("El valor no es igual a 10");
}

//*Operador y = &&
//*Operador ó = ||

let edad=parseInt(prompt("Ingrese su edad: "))

/*if(edad<=0){
    alert("Edad menor a 1")
}
else if(edad>=101){
    alert("Edad mayor a 100")
}*/

function validarEdad(e) {
    if(edad<=0 || edad>=101){
        alert("Edad no valida")
    }
    else if(edad>=1 && edad<=11){
        alert("Usted es un niño")
    }
    else if(edad>=12 && edad<=18){
        alert("Usted es un adolescente")
    }
    else if(edad>=19 && edad<=30){
        alert("Usted es un joven adulto")
    }
    else{
        alert("Usted es un adulto")
    }
}

validarEdad(edad)

let f=prompt("Seleccione una fruta: ")

function costoFrutas(fruta) {

    switch (fruta) {
            case "Naranja":
            alert("Costo: 2000'")
            break;

            case "Manzana":
            alert("Costo: 1500")
            break;

            case "Pera":
            alert("Costo: 3000'")
            break;
    
        default:
            alert("No hay stock "+fruta)
            break;
    }    
}

costoFrutas(f)