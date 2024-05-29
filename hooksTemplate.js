/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

describe('Plantilla hooks', ()=>{

    before(()=>{
        cy.log("Se ejecuta al Principio")
    })

    beforeEach(()=>{
        cy.log("Esto se repite en cada uno de los test MUY IMPORTANTE")
    })


    afterEach(()=>{
        cy.log("Se ejecuta al final de todos los test")
    })

    it('1', ()=>{
        cy.log(1)
    })

    it('2', ()=>{
        cy.log(2)
    })

    it('3', ()=>{
        cy.log(3)
    })

    it('4', ()=>{
        cy.log(4)
    })

    it('5', ()=>{
        cy.log(5)
    })
})