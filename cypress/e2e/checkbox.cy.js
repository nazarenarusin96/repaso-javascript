/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

describe('', ()=>{

    it("login", ()=>{

        cy.visit('http://localhost:3000/signin'); //? Ingresa a la página mediante localhost:3000
    
        cy.get('#username').type("nfrusin"); //* selecciona el input typea el userame
    
        cy.get('#password').type("pass1234"); //* selecciona el input typea la contraseña

        cy.get('.PrivateSwitchBase-input-14').check(); //* selecciona el checkbox y lo pone en true

        cy.get('.PrivateSwitchBase-input-14').uncheck(); //* selecciona el checkbox y lo pone en false
    
        //cy.get('.MuiButton-label').click(); //* selecciona el boton para enviar los datos e ingresa al sistema
    
    })

})