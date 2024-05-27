/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress
require('cypress-plugin-tab')

describe('Funcion tabulador', ()=>{

    it('Ejecutando la funcion tabulador', ()=>{
        cy.visit('https://qa-practice.netlify.app/register'); //Ingresa a la página deseada

        cy.get('#firstName').type("Naza").tab(); //? Busca por id el input deseado, se ingresa datos y con la funcion .tab tabula al siguiente input

        cy.get('#lastName').type("Rusin").tab(); //? Busca por id el input deseado, se ingresa datos y con la funcion .tab tabula al siguiente input


    })

})