/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

import  pageObjects from "../../support/pageObjects"

describe('Consultas API REST desde cypress', ()=>{

    const master = new pageObjects();

    let datos;

    it('PUT', ()=>{
        
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/1",
            body:{
                "id": 1,
                "title": "Modificando desde cypress api rest",
                "author": "nazarena"
            }
        }).then((response)=>{
           expect(response.status).to.eq(200);
        })
    })

})