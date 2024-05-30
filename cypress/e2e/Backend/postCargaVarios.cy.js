/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

import  pageObjects from "../../support/pageObjects"

describe('Consultas API REST desde cypress', ()=>{

    const master = new pageObjects();

    let datos;

    it.only('Metodo de carga por Randoms', ()=>{

        let tiempo=500;
        let numPruebas=10;

        it("",()=>{
            cy.log("Probando");
            cy.wait(1000)
        })

        it("Ingresando Test Random",()=>{
            for(let num=1; num<=10; num++){

            }
        })

       
    })

})