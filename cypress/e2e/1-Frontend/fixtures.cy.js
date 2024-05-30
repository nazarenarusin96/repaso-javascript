/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

import  pageObjects from "../../support/pageObjects" //! Se importa pageObjects.js

describe('Fixtures', ()=>{

    const master = new pageObjects();

    master.visitRegisterQaPractice(); //? Se ingresa a la página web

    before(()=>{

        //! Declarando la función data para poder traer la información desde ./fixtures/register.json

        cy.fixture("register").then((data)=>{
            //this.data=data;
            globalThis.data=data;
        })
    })

    beforeEach(()=>{
        cy.log("Esto se repite en cada uno de los test MUY IMPORTANTE");
    })


    afterEach(()=>{
        cy.log("Se ejecuta al final de todos los test");
    })

    it('Obteniendo data desde fixture e ingresando dicha información', ()=>{

        //! Consumo los datos setados desde ./fixtures/register.json y los imprimo en los inputs

        //? Ejecutando dede pageObjects
        
        cy.register_Qa_Practice(data.name, data.lastName, data.phone, data.country, data.email, data.pass, 1000 );

        //cy.get("#firstName").should("be.visible").type(data.name)
    })
})