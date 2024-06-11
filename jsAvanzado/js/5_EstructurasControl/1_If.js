const puntaje = 1000;
const puntaje2 = 2000;


if(puntaje == 1000){
    console.log("Es igual");
}
else{
    console.log("No es igual");
}

//#########################################

if(puntaje2 != 2000){
    console.log("Es diferente");
}
else{
    console.log("Es igual");
}

//#########################################

//*Comparador Estricto

if(puntaje2 == "2000"){
    console.log("Es igual");
}

if(puntaje2 === 2000){
    console.log("Es igual");
}
else{
    console.log("Es diferente");
}