/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

describe('For && Foreach', ()=>{

    it('Ejemplo basico for', ()=>{
        for(let i=1; i<=20; i++){
            cy.log("Numero "+i)
        }
    })

    it('Tabla', ()=>{
        let t=2
        for(let i=1; i<=20; i++){
            cy.log(t+" x "+i+" = "+t*i);
        }
    })

    it('Recorriendo varios elementos de un div que tienen la misma clase para conseguir información de todos', ()=>{
        cy.visit('https://practicesoftwaretesting.com/#/');

        cy.get('.card-body').each(($el, index, $list)=>{
            //cy.log($list) //* muestra por log en el div que se encuentra y sus atributos
            //cy.log(index) //? muestra la posición del array en el que se encuentra
            //cy.log($el) 
            //cy.log($el.text()) //! muestra lo que contiene el texto de dicho elemento

            let herramientas=$el.text();
            cy.log(herramientas)
        })      
    })

    it.only('Seleccionando un elemento del array', ()=>{
        cy.visit('https://practicesoftwaretesting.com/#/');

        cy.get('.card-body').each(($el, index, $list)=>{    

            let herramientas=$el.text();

            if(herramientas.includes("Bolt Cutters")){
                cy.wrap($el).click({force:true}); //!Entrega el objeto pasado a .wrap(). Si el objeto es una promesa, obtenga su valor resuelto.
            }
            
        })      
    })

})