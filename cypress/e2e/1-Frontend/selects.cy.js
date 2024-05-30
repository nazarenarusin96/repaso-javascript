/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

describe('Manejo de selects', ()=>{

    it('Select por ID', ()=>{
        cy.visit('https://qa-practice.netlify.app/dropdowns');

        cy.get('#dropdown-menu').should("be.visible").select("Argentina").should("have.value","Argentina");

        cy.wait(1000); //espera

        cy.get('#dropdown-menu').should("be.visible").select("Belarus").should("have.value","Argentina");

        //cy.get('#dropdown-menu').first().click(); //* Selecciona el primer elemento de una lista de elementos con la misma clase

        //cy.get('#dropdown-menu').eq(3).click(); //* Selecciona el numero de elemento ingresado con la misma clase

        cy.wait(1000); //espera
    })

    it('Select escrito', ()=>{
        cy.visit('https://www.google.com');

        cy.get("#APjFqb").should("be.visible").type("Ferrari").type("{enter}");

        //! No se puede seleccionar, solo se puede mandar la información mediante .type("{enter}");

        cy.wait(1000); //espera
    })

    it('Multi Select', ()=>{
        cy.visit('https://qa-practice.netlify.app/dropdowns');

        //cy.get('#dropdown-menu').should("be.visible").select(["Argentina","Belarus","Chile"]); //! Este es el caso en el que se pueda ingresar varias opciones en un select

        cy.wait(1000); //espera
    })


    it('Promesas .then(entonces)', ()=>{
        cy.visit('https://qa-practice.netlify.app/dropdowns'); 
        
        //! La función .then significa entonces, si esto se cumple entonces se ejecutará esta función
    
        cy.get('#dropdown-menu').should("be.visible").select("Argentina").then(()=>{
            cy.get("#multi-level-dropdown-btn").should("be.visible").click()
;        })

            //!^^ Cuando seleccione dentro de la lista select la opción Argentina que tiene que ser visible, se ejecutará una función que lo siguien te que hará sera hacer click en el botón que esta abajo
    })

})