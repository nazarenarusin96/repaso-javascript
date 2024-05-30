/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

describe('Before & After', ()=>{

    before('before', ()=>{
        cy.log("Ejecutando precondiciones a las pruebas"); //! before es lo que se que ejecuta antes que que cualquier otro código
    })

    it('probando', ()=>{
        cy.visit('http://localhost:3000/signin'); //* Código de prueba
    })

    after('after', ()=>{
        cy.log("Ejecutando post condiciones a las pruebas"); //? Aftes es lo que se ejecuta al final del código
    })

})