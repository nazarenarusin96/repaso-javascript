/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

describe('Navegación', ()=>{

    it('Navegando, atrás, adelante y recargando', ()=>{
        cy.visit('https://qa-practice.netlify.app');

        cy.wait(1000);

        cy.get('#alerts').should("be.visible").click({force:true});

        cy.wait(1000);

        cy.go("back"); //! Redirecciona a la página anterior

        cy.wait(1000);

        cy.go("forward"); //! Redirecciona a la página siguiente

        cy.wait(1000);

        cy.reload(); //! Recarga la página
    })

})