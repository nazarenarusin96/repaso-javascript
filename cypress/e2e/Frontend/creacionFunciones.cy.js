/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

describe('Plantilla hooks', ()=>{

    before(()=>{
        cy.log("Se ejecuta al Principio");
        cy.visit("https://qa-practice.netlify.app/register");
    })

    beforeEach(()=>{
        cy.log("Esto se repite en cada uno de los test MUY IMPORTANTE");
    })


    afterEach(()=>{
        cy.log("Se ejecuta al final de todos los test");
    })

    it('Llamando comando custom', ()=>{
        cy.escribir_texto("#firstName", "Nazarena", 1000);        
    })

   /* it.only('Llamando comando custom', ()=>{
        cy.register("#firstName", "Nazarena");
        cy.register("#lastName", "Rusin");
        cy.register("#phone", "1145786523");
        cy.register("#countries_dropdown_menu", "Argentina");
        cy.register("#emailAddress", "pruebita@gmail.com",);
        cy.register("#password", "pass1234");
        cy.register("#exampleCheck1");
        cy.register("#registerBtn");
    })*/
})