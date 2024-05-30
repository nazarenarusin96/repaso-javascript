/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

import  pageObjects from "../support/pageObjects"

describe('', ()=>{

    const master = new pageObjects();

    it('', ()=>{
        cy.visit('');
    })

})