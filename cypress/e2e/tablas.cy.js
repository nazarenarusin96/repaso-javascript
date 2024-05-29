/// <reference types="Cypress" />

//const { should } = require("chai");

//* ^^ hace funcionar los comandos de cypress

describe('Test tablas', ()=>{

    it('Elementos padre-hijo', ()=>{
        cy.visit('https://qa-practice.netlify.app/pagination');

        //cy.get("#content > nav:nth-child(2) > ul").children(".page-item").should("contain","1").click()
        cy.get("#content > nav:nth-child(2) > ul").children(".page-item").eq(1).click(); //? Busca mediante el elemento hijo con la función .children()

        cy.wait(1000) //espera

        cy.get("#content > nav:nth-child(2) > ul").children(".page-item").eq(2).click(); //! Se utiliza la función .eq(2) para que no genere error, busca los elementos por numero de array

        cy.get("#content > nav:nth-child(2) > ul").children(".page-item").filter(".page-link").click(); //? Utiliza la función .filter() para filtrar por el elemento que se desea como una class
    })

    it('Elementos padre-hijo con for', ()=>{
        cy.visit('https://practice.expandtesting.com/add-remove-elements');        

        cy.get(".container").children(".btn").click({force:true}).then(()=>{ //? Realizando una promesa con for para que genere varios botones en una sola función

            for(let i=1; i<=5; i++){
                cy.get(".container").children(".btn").click({force:true})
            }
    })        

    cy.wait(1000) //espera


    cy.get(".container").find(".added-manually").then(()=>{ //? Realizando una promesa con for para que elimine los botones generados antes en una sola función

        let equal=0; //* Se inicializa la variable equal para que el for pueda recorrer todos los botones

        //* La siguiente función realiza clicks en botones mediante un for
        for(let i=1; i<=6; i++){
            cy.get(".container").find(".added-manually").eq(equal).click({force:true}) //? Se utiliza la función .find() para encontrar un elemento deseado como por class
            
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

        cy.get(".container").find(".added-manually").first().click({force:true}) //? Busca el primer elemento

        cy.wait(1000) //espera

        cy.get(".container").find(".added-manually").last().click({force:true}) //? Busca el último elemento
        
    })

    it('funcion NextAll', ()=>{
        cy.visit('https://practice.expandtesting.com/add-remove-elements');     

        cy.get(".container").children(".btn").click({force:true}).then(()=>{

            for(let i=1; i<=5; i++){
                cy.get(".container").children(".btn").click({force:true})
            }
    })

    //! Esta función genera errores

    cy.get(".container").find(".added-manually").nextAll() //? La función .nextAll() selecciona todos los elementos encontrados uno por uno como si fuera un for
        
    })

    it('funcion con elemento padre', ()=>{
        cy.visit('https://practice.expandtesting.com/add-remove-elements');     

        cy.get(".container").children(".btn").click({force:true}).then(()=>{

            for(let i=1; i<=5; i++){
                cy.get(".container").children(".btn").click({force:true})
            }
    })

        //! Esta función genera errores

    |cy.get("[type='button']").parent().should("have.class",".container") //? La función .parent() busca por elemento padre, primero se indica que tipo de elemento es y busca por una caracteristica como la class
        
    })


})