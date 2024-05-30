/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

import  pageObjects from "../support/pageObjects"

describe('Plantilla hooks', ()=>{

    const master = new pageObjects();

    //master.visitRegisterForm();

    //master.visitFormSubmitDemo();

    master.visitTestingPractice();

    
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

        master.seccion1("Nazarena", "Rusin", 1145678932,1000);

        master.seccion2("Argentina", "probando@gmail.com", "pass1234",1000);

        master.seccion3();
    })

    it.only('Registro Expand Testing', ()=>{
        master.testingPractice("Your username is invalid!");
    })
})