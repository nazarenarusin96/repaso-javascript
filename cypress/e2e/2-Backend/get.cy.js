/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

import  pageObjects from "../../support/pageObjects"

describe('Consultas API REST desde cypress', ()=>{

    const master = new pageObjects();

    let datos;

    it('GET', ()=>{
        datos=cy.request("http://localhost:3000/posts")
        .should((response)=>{
            expect(response.status).to.eq(200);
        })

        //datos.its("status").should("equal",200);
    })

    it.only('GET avanzado', ()=>{
        
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers:{
                accept:"application/json"
            }
        }).then((response)=>{
            let datos;

            datos=JSON.parse(JSON.stringify(response.body));

            cy.log(datos);

            expect(datos[0]).has.property("title","json-server");

            expect(datos[0]).has.property("author", "typicode");
        })
    })

})