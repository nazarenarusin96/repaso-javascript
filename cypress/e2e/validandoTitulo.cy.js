/// <reference types= "Cypress" />


describe("Validando el titulo", ()=>{

    it("Test validando titulo", ()=>{
        cy.visit("https://demoqa.com/text-box");

        cy.title().should("eq", "ToolsQA")

        console.log("ok");
    })

})