/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

//! Para conseguir mediante Xpath o copySelector en necesario inspeccionar en el navegador y en el input a testear hacer click derecho->copy-> y se va a desplegar la lista

require('cypress-xpath');

describe('Ejemplos tipos de selectores', ()=>{

    it('ID', ()=>{
        cy.visit('https://qa-practice.netlify.app/register'); //* Ingresa a la url ingresada

        cy.get("#firstName").should("be.visible").type("Naza"); //? Por ID siempre se utiliza #
    })

    it('Xpath', ()=>{
        cy.visit('https://qa-practice.netlify.app/register'); //* Ingresa a la url ingresada

        //*[@id="firstName"] xpath

        //cy.xpath(//*[@id="firstName"]).should("be.visible").type("Naza"); // codigo para buscar por xpath, pero no funciona

        cy.wait(1000); //espera
    })

    it('Contains', ()=>{

        //!! Contains se utiliza cuando hay que buscar por clase y muchos elementos la utilizan, se filtra por la palabra que hay dentro del div

        cy.visit('https://qa-practice.netlify.app/radiobuttons'); //* Ingresa a la url ingresada

        cy.get(".form-check-label").contains("Radio button 1").click(); //? Si la clase contiene radio button 1 entonces hace click

        cy.wait(1000); // espera

        cy.get(".form-check-label").contains("Radio button 2").click(); //? Ahora si la clase contiene radio button 2 entonces hace click

        cy.wait(1000); // espera

    })

    it('copySelector', ()=>{
        cy.visit('https://qa-practice.netlify.app/register'); //* Ingresa a la url ingresada

        cy.get("#firstName").should("be.visible").type("Naza"); //? Copia directamente el selector por la lista de inspeccionar, si lo ve visible entonces typea
    })

})