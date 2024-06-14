const auto ={
    name : "Camaro",
    year: 1969,
    motor: "6.0"
}

    console.log("######################################################");

    console.log("ForIn");

for (let propiedad in auto){
    console.log(propiedad);
}

console.log("Accediendo a las caracteristicas por forIn");

for (let propiedad in auto){
    console.log(`${auto[propiedad]}`);
}

console.log("######################################################");


console.log("ForOf"); 

for (let [llave, valor] of Object.entries(auto)){
    console.log("Accediento al tipo: "+llave);
    console.log("Accediento a la información: "+valor);
}