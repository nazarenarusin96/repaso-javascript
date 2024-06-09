const numeros = [ 10, 20, 30, 40 , 50 ];

const [, , tercero] = numeros; //! Quiero acceder solo al tercer parametro del array, se ponen coman vacías al parametro que no se desea acceder

console.log(tercero);

//! Divide el array en un conjunto desde la posición que se desea

const [primero, ...tercer0] = numeros;

console.log(tercer0);
