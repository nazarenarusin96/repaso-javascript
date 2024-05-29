/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

describe('Funciones invoke', ()=>{

    it('invoke text', ()=>{
        cy.visit('https://qa-practice.netlify.app/register');

        //! Valida el texto seleccionado

        cy.get(':nth-child(1) > label').invoke("text").as("info");

        cy.get("@info").should("contain", "First Name").then(()=>{
            cy.get('#firstName').should("be.visible").as("nombre");
            
            cy.get("@nombre").type("Probando");
        })
    })

    it('invoke style', ()=>{
        cy.visit('https://qa-practice.netlify.app/register');

        //! Encuentra el elemento por ID y cambia su estilo css

        cy.get("h2").invoke("attr","style","color:blue; font-size: 50px");
        
    })

    it.only('invoke style', ()=>{
        cy.visit('https://qa-practice.netlify.app/register');

        //! Encuentra los elementos por si ID o class, los oculta uno por uno y luego los vuelve a mostrar uno por uno

        cy.get("h2").invoke("hide");
        cy.wait(1000);
        cy.get(':nth-child(1) > label').invoke("hide");
        cy.wait(1000);
        cy.get('#firstName').invoke("hide");

        cy.wait(1000);

        cy.get("h2").invoke("show");
        cy.wait(1000);
        cy.get(':nth-child(1) > label').invoke("show");
        cy.wait(1000);
        cy.get('#firstName').invoke("show");
        
    })


})