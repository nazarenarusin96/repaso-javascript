describe("Primer programa de prueba", ()=>{

    it("1-Ejecución", ()=>{
        cy.log("probando")
        cy.wait(1000)
    })

    it("2-Ejecución",()=>{
        cy.visit("https://demoqa.com/text-box");

        cy.get("#userName").type("Naza")
        cy.wait(1000)
    })
})