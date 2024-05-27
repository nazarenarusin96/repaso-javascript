/// <reference types="Cypress" />

const cypress = require("cypress");

//* ^^ hace funcionar los comandos de cypress

//! LA EXTENSIÓN BETTER COMMENTS GENERA CONFLICTO CON XPATH

const xpath = require("cypress-xpath");

describe('Tipos de checkbox', ()=>{

    /*it("login", ()=>{

        cy.visit('http://localhost:3000/signin'); //? Ingresa a la página mediante localhost:3000
    
        cy.get('#username').type("nfrusin"); //* selecciona el input typea el userame
    
        cy.get('#password').type("pass1234"); //* selecciona el input typea la contraseña

        cy.get('.PrivateSwitchBase-input-14').check(); //* selecciona el checkbox y lo pone en true

        cy.get('.PrivateSwitchBase-input-14').uncheck(); //* selecciona el checkbox y lo pone en false
    
        //cy.get('.MuiButton-label').click(); //* selecciona el boton para enviar los datos e ingresa al sistema
    
    })*/

    //! La función click() y la función check() con los checkboxs realizan la misma función

    it('checkbox por type', ()=>{
        cy.visit('https://qa-practice.netlify.app/checkboxes'); //* Ingresa a la url ingresada

        //? selecciona el checkbox, lo pone en true y be.checked verifica que sea correcto
        cy.get("[type='checkbox']").check().should("be.checked"); //! En este caso todas las casillas son checkeadas

        cy.wait(1000) //espera

        //? deselecciona el checkbox, lo pone en false y not.be.checked verifica que sea correcto
        cy.get("[type='checkbox']").uncheck().should("not.be.checked"); //! En este caso todas las casillas son des-checkeadas

        cy.wait(2000) //espera
    })

    it('checkbox por ID', ()=>{
        cy.visit('https://qa-practice.netlify.app/checkboxes');//* Ingresa a la url ingresada

        cy.get('#checkbox2').check().should("be.checked"); //? En este caso, se busca el checkbox por id, lo selecciona, lo pone en true y verifica que sea correcto

        //cy.xpath("//*[@id='checkbox1']").check(); // Probando por xpath
    })

    it('Radio Buttons', ()=>{
        cy.visit('https://qa-practice.netlify.app/radiobuttons');//* Ingresa a la url ingresada

        cy.get("form-check-label").contains("Radio button 2").click(); //? Selecciona el radio button por clase, busca la palabra deseada y lo pone en true
    })
})