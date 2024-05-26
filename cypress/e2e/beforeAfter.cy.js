/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

describe('Before & After', ()=>{

    before('before', ()=>{
        cy.log("Ejecutando precondiciones a las pruebas");
    })

    it('probando', ()=>{
        cy.visit('http://localhost:3000/signin');
    })

    after('after', ()=>{
        cy.log("Ejecutando post condiciones a las pruebas");
    })

})