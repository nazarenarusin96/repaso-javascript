/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

//? Utilizando la app cypress-realworld-app para pruebas

describe("formas de encontrar un elemento", ()=>{

    /// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress



    it('create user', ()=>{
        cy.visit('http://localhost:3000/signin'); //? Ingresa a la página mediante localhost:3000

        cy.get('[data-test="signup"]').click(); //? Ingresa a la sección de crear usuario

        cy.get('#firstName').type("nazarena") //? selecciona el input typea el nombre

        cy.get('#lastName').type("rusin") //? selecciona el input typea el apellido

        cy.get('#username').type("nfrusin") //? selecciona el input typea el userame

        cy.get('#password').type("pass1234") //? selecciona el input typea la contraseña

        cy.get('#confirmPassword').type("pass1234") //? selecciona el input typea la contraseña para que sea confirmada e identica al anterior input

        cy.get('[data-test="signup-submit"]').click() //? selecciona el boton para enviar los datos y los registra en la data base
    })



    it("login", ()=>{
        //cy.visit('https://www.movistar.com.ar');

        cy.visit('http://localhost:3000/signin'); //? Ingresa a la página mediante localhost:3000

        //?Para buscar por clase se utiliza el . punto

        //!Para buscar por id se utiliza el # hashtag 

        //cy.get('.pnt-contenedor-buscador > .btn').type("Motorola");

        cy.get('#username').type("nfrusin"); //* selecciona el input typea el userame

        cy.get('#password').type("pass1234"); //* selecciona el input typea la contraseña

        cy.get('.MuiButton-label').click(); //* selecciona el boton para enviar los datos e ingresa al sistema
    })

})