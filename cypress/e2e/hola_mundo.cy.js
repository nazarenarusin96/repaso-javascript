/// <reference types="Cypress" />

/*describe("Primer programa de prueba", ()=>{

    it("1-Ejecución", ()=>{
        cy.log("probando")
        cy.wait(1000)
    })

    it("2-Ejecución",()=>{
        cy.visit("https://demoqa.com/text-box");

        cy.get("#userName").type("Naza")
        cy.wait(1000)
    })
})*/

describe("Test busqueda", ()=>{

    it("busqueda con resultados", ()=>{
        cy.visit("https://demoqa.com/text-box");

        cy.get('#userName').type("Naza");
        cy.get('#userEmail').type("emailprueba@gmail.com");
        cy.get('#currentAddress').type("Calle Falsa 123");
        cy.get('#permanentAddress').type("Probando");
        cy.get('#submit').click();
    })

})