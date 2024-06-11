iniciarApp();

function iniciarApp(){
    console.log("Iniciando app...");
    
    segundaFuncion();
}

function segundaFuncion(){
    console.log("Ejecutando desde la segunda función");

    usuarioAutenticado("Naza");
}

function usuarioAutenticado(usuario){
    console.log("Autenticando usuario... espere...");

    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}

//############################################################

function sumar (a,b){
    return a+b; //* Función que retorna un valor
}

const resultado = sumar(2+3); //* Asignandole una variable al valor suma

console.log(resultado);

//############################################################

let total =0;

function agregarCarrito(){
    return total +=precio;
}

function calcularImpuesto(){
    return total * 1.15;
}

total = agregarCarrito(100);
total = agregarCarrito(300);
total = agregarCarrito(600);
total = agregarCarrito(800);

const totalPagar = calcularImpuesto(total);

console.log(total);