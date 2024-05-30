/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

describe('Ejecutando funciones para subir y bajar por la página', ()=>{

    it.only('pageUp', ()=>{
        cy.log("Caso de prueba utilizando funcion only")
    })

    it('pageUp', ()=>{
        cy.visit('https://qa-practice.netlify.app/register');

        //cy.title().should('eq','Register Form');

        cy.wait(1000)

        cy.get("#firstName").type("{pageup}");

        cy.wait(2000)
    })

    it('pageDown', ()=>{
        cy.visit('https://qa-practice.netlify.app/register');

        //cy.title().should('eq','Register Form');

        xspecify.wait(1000)

        cy.get("#firstName").type("{pagedown}");

        xspecify.wait(2000)
    })

})