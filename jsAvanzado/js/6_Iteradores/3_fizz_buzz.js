for(let i=0; i<50; i++){
    if(i%15 ===0){
        console.log(`${i} FIZZBUZZ`); //! Siempre va primero la condición que menos se repite
    }
    else if(i%3 ===0){
        console.log(`${i} fizz`);
    }
    else if(i%5 ===0){
        console.log(`${i} buzz`);
    }
    
}