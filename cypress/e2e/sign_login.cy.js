/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

//? Utilizando la app cypress-realworld-app para pruebas

describe("formas de encontrar un elemento", ()=>{

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

        cy.log("###-INGRESANDO DATOS BANCARIOS-###")

        //! Esto debe ejecutarse solo una vez para que quede guardado en la database, si no tirara error

        /*cy.get('[data-test="user-onboarding-next"] > .MuiButton-label').click() //* Clickea botón next

        cy.get('#bankaccount-bankName-input').type("Banquito Bancario") //* Selecciona input e ingresa el nombre del banco

        cy.get('#bankaccount-routingNumber-input').type("123456789") //* Selecciona input e ingresa el numero requerido

        cy.get('#bankaccount-accountNumber-input').type("12345678910") //* Selecciona input e ingresa el numero requerido

        cy.get('[data-test="bankaccount-submit"]').click() //? selecciona el boton para enviar los datos del banco y los registra en la data base

        cy.get('[data-test="user-onboarding-next"] > .MuiButton-label').click()*/

        cy.get('[data-test="sidenav-bankaccounts"]').click() //* Clickea el boton cuentas de banco

        cy.get('[data-test="bankaccount-new"]').click() //* Clickea el boton de añadir cuenta de banco nueva

        //! Manera que acorta las funciones y se pueden hacer cadenas de acciones para optimizar el codigo

        cy.get('#bankaccount-bankName-input').type("probando").clear().type("pruebita") //*? Selecciona el input del nombre del banco, escribe un texto, lo borra y vuelve a escribir
    })

    
})
 