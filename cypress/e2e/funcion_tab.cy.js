/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress
require('cypress-plugin-tab')

describe('', ()=>{

    it('', ()=>{
        cy.visit('https://qa-practice.netlify.app/register');

        cy.get('#firstName').type("Naza").tab();

        cy.get('#lastName').type("Rusin").tab();

        
    })

})