//* concat une diferentes arrays en uno solo

const meses1 = ["enero", "febrero", "marzo", "abril", "mayo","junio"];

const meses2 = ["julio", "agosto", "septiembre"];

const meses3 = ["octubre", "noviembre"]

const meses4 = meses1.concat(meses2, meses3, "otro mes")
console.log(meses4);

console.log("###########################################################");

//? Spread Operator

const resultado2 = [...meses1, ...meses2, ...meses3, "otro mes"];
console.log(resultado2);