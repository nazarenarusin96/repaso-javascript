/// <reference types= "Cypress" />


describe("Validando el titulo", ()=>{

    it("Test validando titulo", ()=>{
        cy.visit("https://www.google.com/");

        cy.title().should("eq", "Google"); //? Key sensitive

        cy.wait(1000) //? Espera el tiempo que se le indique

        cy.log("Titulo validado");

        cy.get("#APjFqb").type("cypress io {enter}"); //? Selecciona el input por id e ingresa texto, el {enter} siempre va dentro de las comillas

        cy.get('.eKjLze').click(); //? Busca el link en el que se quiere ingresar por la primera clase y lo clickea
    })

})