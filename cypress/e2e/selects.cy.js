/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

describe('Manejo de selects', ()=>{

    it('sección celulares movistar', ()=>{
        cy.visit('https://qa-practice.netlify.app/dropdowns');

        cy.get('#dropdown-menu').select("Afghanistan");
    })

})