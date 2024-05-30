// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('escribir_texto', (selector, texto, t) => { 
    let tiempo=t;

    cy.get(selector).should("be.visible").type(texto);
    cy.wait(tiempo);
})

Cypress.Commands.add('click_force', (selector, t) => { 
    let tiempo=t;

    cy.get(selector).should("be.visible").click({force:true});
    cy.wait(tiempo);
})

 Cypress.Commands.add('register', (name, message) => { 

    cy.get('#title').should('be.visible').type(name);
    cy.get("#description").should("be.visible").type(message);
    cy.get("#btn-submit").should("be.visible").click({force:true});
 })

 Cypress.Commands.add('register_Qa_Practice', (name, lastName, phone, country, email, pass, t) => { 

    let tiempo=t;

    cy.get('#firstName').should('be.visible').type(name);
    cy.wait(tiempo)
    cy.get("#lastName").should("be.visible").type(lastName);
    cy.wait(tiempo)
    cy.get("#phone").should("be.visible").type(phone);
    cy.wait(tiempo)
    cy.get("#countries_dropdown_menu").should("be.visible").select(country);
    cy.wait(tiempo)
    cy.get("#emailAddress").should("be.visible").type(email);
    cy.wait(tiempo)
    cy.get("#password").should("be.visible").type(pass);
    cy.wait(tiempo)
    cy.get("#exampleCheck1").should("be.visible").check().should("be.checked");
    cy.wait(tiempo)
    cy.get("#registerBtn").should("be.visible").click({force:true});
 })

 Cypress.Commands.add('validandoCampo', (men, nombre) => { 

    cy.get('#emailAddress').should("be.visible").should("contain", men).then(()=>{
        cy.log("###########################");

        cy.log("El "+nombre+" no es valido");

        cy.log("###########################");
    })
 })