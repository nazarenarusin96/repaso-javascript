/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress
require('@4tw/cypress-drag-drop')

//import "cypress-real-events";

require("cypress-real-events")

describe('Eventos Mouse', ()=>{

    it('objeto A seleccionando a objeto B', ()=>{
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
        cy.title("eq","The internet");
        cy.title("eq","Dragn and Drop");

        cy.wait(1000);

        cy.get('#column-a').wait(1000).drag("#column-b",{force:true})
    })

    //! No tiene errores, pero no se ejecuta como se desea
    it('Ejecutando drag and drop', ()=>{
        cy.visit('https://seleniumbase.io/other/drag_and_drop');

        //cy.get('#angular').drag("#droparea",{force:true});

        cy.get('#drag1').drag("#div1")
    })

    //! Agregando dependencias para que funcione el hover (cypress-real-events)

    it('Función Hover', ()=>{
        cy.visit('https://qa-practice.netlify.app/mouse-hover');

        //cy.contains("All Courses").trigger("mouseover", {force:true});

        cy.contains("Hover over me, example no.2").realHover("mouse")

        cy.wait(1000)
    })

    it('Función Hover con elementos ocultos y utlizando promesas', ()=>{
        cy.visit('https://www.way2automation.com');

        //cy.wait(5000)

        cy.contains("All Courses").realHover("mouse").then(()=>{
            //cy.contains("Lifetime Membership").click();
            cy.contains("Selenium").click();

            cy.log("menu python")
            cy.contains("Selenium with Python").click({force:true});
            //cy.get('#menu-item-27584 > .menu-link > .menu-text').click()
        });
    })

    /*it.only('Range sliders', ()=>{
        cy.visit('');

        //! Este caso es para mover elementos con rangos númericos

        cy.get("#idprueba").invoke("attr","value",90); //invoke("atributo", "valor", numero)
    })*/

})