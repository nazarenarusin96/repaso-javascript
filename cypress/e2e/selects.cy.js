/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

describe('Manejo de selects', ()=>{

    it('sección celulares movistar', ()=>{
        cy.visit('https://qa-practice.netlify.app/dropdowns');

        cy.get('#dropdown-menu').select("Argentina");

        //cy.get('#dropdown-menu').first().click(); //* Selecciona el primer elemento de una lista de elementos con la misma clase

        //cy.get('#dropdown-menu').eq(3).click(); //* Selecciona el numero de elemento ingresado con la misma clase
    })

})