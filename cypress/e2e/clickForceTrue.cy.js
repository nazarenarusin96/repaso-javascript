/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

describe('Click force true', ()=>{

    it('Caso de prueba click force true', ()=>{
        cy.visit('https://qa-practice.netlify.app/show-hide-element');

        cy.get('#showHideBtn').click({force:true}); //! Función que fuerza el click, de la unica manera que no se ejecute es que el código este erroneo
    })

})