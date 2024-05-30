/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

import  pageObjects from "../../support/pageObjects"

describe('Consultas API REST desde cypress', ()=>{

    const master = new pageObjects();

    let datos;

    it('POST', ()=>{
        
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body:{
                "id": 3,
                "title": "cypress-post-prueba",
                "author": "nazarena"
            }
        }).then((response)=>{
           expect(response.status).to.eq(201);
        })
    })

    it.only('Insertando múltiples valores POST', ()=>{

        for(let x=1; x<=10; x++){
            let tx=Math.random().toString(10);

            cy.request({
                method: "POST",
                url: "http://localhost:3000/posts",
                body:{
                    "id": tx,
                    "title": "Titulo #"+tx,
                    "author": "Autor #"+tx
                }
            }).then((response)=>{
               expect(response.status).to.eq(201);
            })
        }
    })

})