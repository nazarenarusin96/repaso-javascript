/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

describe('Plantilla hooks', ()=>{

    before(()=>{
        cy.log("Se ejecuta al Principio");
    })

    beforeEach(()=>{
        cy.log("Esto se repite en cada uno de los test MUY IMPORTANTE");
    })


    afterEach(()=>{
        cy.log("Se ejecuta al final de todos los test");
    })

    it('1', ()=>{
        cy.log(1);
    })
})