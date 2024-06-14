let i=0;

let a=0;


while(i <=10){
    console.log("Número "+i);

    i++;  //! SIEMPRE VA ESTO AL FINAL, SI NO ROMPE EL CÓDIGO
}

while(a<=50){
    if(a%15 ===0){
        console.log(`${a} FIZZBUZZ`); //! Siempre va primero la condición que menos se repite
    }
    else if(a%3 ===0){
        console.log(`${a} fizz`);
    }
    else if(a%5 ===0){
        console.log(`${a} buzz`);
    }
    i++
    
}