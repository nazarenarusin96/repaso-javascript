/// <reference types="Cypress" />

//const { should } = require("chai");

//* ^^ hace funcionar los comandos de cypress

describe('Test tablas', ()=>{

    it('Elementos padre-hijo', ()=>{
        cy.visit('https://qa-practice.netlify.app/pagination');

        //cy.get("#content > nav:nth-child(2) > ul").children(".page-item").should("contain","1").click()
        cy.get("#content > nav:nth-child(2) > ul").children(".page-item").eq(1).click();

        cy.wait(1000)

        cy.get("#content > nav:nth-child(2) > ul").children(".page-item").eq(2).click();

        cy.get("#content > nav:nth-child(2) > ul").children(".page-item").filter(".page-link").click();
    })

    it('Elementos padre-hijo con for', ()=>{
        cy.visit('https://practice.expandtesting.com/add-remove-elements');        

        cy.get(".container").children(".btn").click({force:true}).then(()=>{

            for(let i=1; i<=5; i++){
                cy.get(".container").children(".btn").click({force:true})
            }
    })        

    cy.wait(1000)


    cy.get(".container").find(".added-manually").then(()=>{

        let equal=0;

        for(let i=1; i<=6; i++){
            cy.get(".container").find(".added-manually").eq(equal).click({force:true})
            
        }

    })
    })

    it('funcion first && last', ()=>{
        cy.visit('https://practice.expandtesting.com/add-remove-elements');     

        cy.get(".container").children(".btn").click({force:true}).then(()=>{

            for(let i=1; i<=5; i++){
                cy.get(".container").children(".btn").click({force:true})
            }
    })    

        cy.get(".container").find(".added-manually").first().click({force:true})

        cy.wait(1000)

        cy.get(".container").find(".added-manually").last().click({force:true})
        
    })

    it('funcion NextAll', ()=>{
        cy.visit('https://practice.expandtesting.com/add-remove-elements');     

        cy.get(".container").children(".btn").click({force:true}).then(()=>{

            for(let i=1; i<=5; i++){
                cy.get(".container").children(".btn").click({force:true})
            }
    })

    cy.get(".container").find(".added-manually").nextAll()
        
    })

    it('funcion con elemento padre', ()=>{
        cy.visit('https://practice.expandtesting.com/add-remove-elements');     

        cy.get(".container").children(".btn").click({force:true}).then(()=>{

            for(let i=1; i<=5; i++){
                cy.get(".container").children(".btn").click({force:true})
            }
    })

    |cy.get("[type='button']").parent().should("have.class",".container")
        
    })


})