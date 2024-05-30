/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

import  pageObjects from "../support/pageObjects" //! Se importa page Objects

describe('Plantilla hooks', ()=>{

    const master = new pageObjects(); //? Se llama a page Objects

    //master.visitRegisterForm();

    //master.visitFormSubmitDemo();

    master.visitTestingPractice(); //? Se llama a la función deseada de page objects, en este caso es una página web ya seteada

    
    beforeEach(()=>{
        cy.log("Esto se repite en cada uno de los test MUY IMPORTANTE")
    })


    afterEach(()=>{
        cy.log("Se ejecuta al final de todos los test")
    })

    it('Registro con comandos', ()=>{
        cy.log("probando")
        cy.register("Nazarena", "probando");
    })

    it('Registro QA Practice', ()=>{

        //cy.register_Qa_Practice("Nazarena", "Rusin", 1145678932, "Argentina", "probando@gmail.com", "pass1234",1000);
        //master.registerQaPractice(1000)
        //cy.reload()

        //! Ejemplo seccionado

        //* La lógica de todo esta función se encuentra en la sección ./support/pageObjects.js y en la sección  ./support/commands

        master.seccion1("Nazarena", "Rusin", 1145678932,1000); //? Se pasa por parametro lo que se desea ingresar en el input

        master.seccion2("Argentina", "probando@gmail.com", "pass1234",1000);

        master.seccion3(); //? Se ejecuta checkbox y button
    })

    it.only('Registro Expand Testing', ()=>{
        //! Función que valida el mensaje de error
        master.testingPractice("Your username is invalid!");
    })
})