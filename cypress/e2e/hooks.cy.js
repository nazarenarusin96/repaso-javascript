/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

describe('Plantilla hooks', ()=>{

    before(()=>{
        //! Antes de que se inicie el test, ejecuta la url
        cy.log("Se ejecuta al Principio");
        cy.visit("https://qa-practice.netlify.app/checkboxes");
    })

    beforeEach(()=>{
        cy.log("Esto se repite en cada uno de los test MUY IMPORTANTE")
    })


    afterEach(()=>{
        cy.log("Se ejecuta al final de todos los test")
    })

    it('checkbox', ()=>{
        cy.get('#checkbox1').check().should("be.checked");
        cy.wait(1000)
        cy.get('#checkbox1').uncheck().should("not.be.checked");

        cy.log("probando")
    })
})