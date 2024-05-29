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

 Cypress.Commands.add('register', (selector, name, lastName, phone, country, pass, email, check, t) => { 

    //let tiempo=t;

    cy.get(selector).should("be.visible").type(name);

    cy.get(selector).should("be.visible").type(lastName);

    cy.get(selector).should("be.visible").type(phone);

    cy.get(selector).should("be.visible").select(country);

    cy.get(selector).should("be.visible").type(pass);

    cy.get(selector).should("be.visible").type(email);

    cy.get(selector).should("be.visible").check(check).should("be.checked");

    cy.get(selector).should("be.visible").click({force:true});
 })