/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

describe('Manejo de los alias', ()=>{

    it('Ejemplo básico de alias', ()=>{
        cy.visit('https://qa-practice.netlify.app/register');

        cy.get('#firstName').should("be.visible").as("nombre"); //? La función .as() es para crear un tipo de variable con el id o la clase del input que se desea utilizar

        cy.wait(1000) //espera

        cy.get("@nombre").type("Nazarena"); //* Llama al alias creado
    })

    it.only('Registro avanzado con alias', ()=>{
        cy.visit('https://qa-practice.netlify.app/register');

        //! .as() es para crear una variable cuando se tiene que repetir varias veces en el código

        cy.get('#firstName').should("be.visible").as("nombre"); //? La función .as() es para crear un tipo de variable (alias) con el id o la clase del input que se desea utilizar
        cy.get('#lastName').should("be.visible").as("apellido");
        cy.get('#phone').should("be.visible").as("num");
        cy.get('#countries_dropdown_menu').should("be.visible").as("select")
        cy.get('#emailAddress').should("be.visible").as("email")
        cy.get('#password').should("be.visible").as("pass")
        cy.get('#exampleCheck1').should("be.visible").as("checkbox")
        cy.get('#registerBtn').should("be.visible").as("register")

        cy.wait(1000) //espera

        cy.get("@nombre").type("Nazarena"); //* Llama al alias creado
        cy.get("@apellido").type("Rusin");
        cy.get("@num").type("1156789435");
        cy.get("@select").select("Argentina").should("have.value","Argentina");
        cy.get("@email").type("pruebita@gmail.com");
        cy.get("@pass").type("naza1234"); 
        cy.get("@checkbox").check(); 
        cy.get("@register").click({force:true});
        
    })

})