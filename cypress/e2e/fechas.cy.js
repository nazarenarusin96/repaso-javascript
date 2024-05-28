/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

require("cypress-plugin-tab");

describe('Funciones para fechas', ()=>{

    it('Fuerza a elegir la fecha actual', ()=>{
        cy.visit('https://qa-practice.netlify.app/calendar');

        cy.get('#calendar').should("be.visible").click();

        cy.get(".day").first().click({force:true})
    })

    it.only('Escribe las fechas solicitadas', ()=>{
        cy.visit('https://qa-practice.netlify.app/calendar');

        //cy.get('#calendar').should("be.visible").click();

        cy.get('#range-date-calendar').should("be.visible").clear()

        cy.wait(1000)

        cy.get('#range-date-calendar').should("be.visible").type("01/01/2024 - 5/28/2024 {enter}")

    })

})