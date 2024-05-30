/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

import  pageObjects from "../../support/pageObjects"

describe('Consultas API REST desde cypress', ()=>{

    const master = new pageObjects();

    let datos;

    it('DELETE', ()=>{
        
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/11"
        }).then((response)=>{
           expect(response.status).to.eq(200);
        })
    })


    it.only('DELETE varios elementos al mismo tiempo', ()=>{

        for(let x=12; x<=16;x++){

            cy.request({
                method: "DELETE",
                url: "http://localhost:3000/posts/"+x
            }).then((response)=>{
               expect(response.status).to.eq(200);
            })

        }
    })
})