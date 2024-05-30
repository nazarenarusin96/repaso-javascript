/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress
require ("cypress-plugin-tab");

describe('Comenzando con Asserts mas avanzados', ()=>{

    it('contains', ()=>{
        cy.visit('https://qa-practice.netlify.app/dropdowns#2nd-level-2');

        cy.get("#dropdown-menu").contains("Argentina").click({force:true});
    })

    it('find', ()=>{
        cy.visit('https://practicesoftwaretesting.com/#/');

        cy.get(".container").find(".card"); //? Busca por un div con clase que contiene varios elementos con la misma clase y muestra por consola cuantos son

        cy.wait(1000) //espera

        //! Los elementos son arrays, asi que siempre comienzan en 0

        cy.get(".container").find(".card").eq(1).click(); //? Busca por un div con clase que contiene varios elementos con la misma clase, selecciona un elemento y ejecuta el click
    })

    it('encontrando y validando por texto', ()=>{
        cy.visit('https://practicesoftwaretesting.com/#/category/hand-tools');

        //!Promesa que extrae el texto, lo pasa a una variable que valida que si lo que esta guardado en la variable es lo que se ve reflejado en el cy.log, mostrara un mensaje de validación exitoso

        cy.get(".container").find(".card").eq(1).then((e)=>{
            cy.log(e.text());

            let estado = e.text();

            cy.log(estado);

            if(estado="Hammer $12.58"){
                cy.log("Ejecución exitosa");
            }
            else{
                cy.log("Ejecución erronea");
            }
        })
    })

    it('asserts have contains', ()=>{
        cy.visit('https://qa-practice.netlify.app/tab');

        cy.get("#newTabBtn").should("have.text", '\n          Press me - New Tab\n        ').click();
    })


    it('register con validate contain', ()=>{

        //? REGISTRO
        cy.visit('https://qa-practice.netlify.app/register');

        cy.get('#firstName').should("be.visible").type("Naza").tab();

        cy.get('#lastName').should("be.visible").type("Rusin").tab();

        cy.get('#phone').should("be.visible").type("1146749520").tab();

        cy.get('#countries_dropdown_menu').should("be.visible").select("Argentina")

        cy.get('#emailAddress').should("be.visible").type("email@gmail.com").tab();

        cy.get('#password').should("be.visible").type("pass1234").tab();

        cy.get('#exampleCheck1').should("be.visible").check().tab();     
        
        //? ##################################################################

        cy.get('#firstName').should("have.value", "Naza").then(()=>{ //! have.value es cuando el valor del input debe ser igual al deseado, si es asi se ejecuta la promesa

            cy.log("Promesa cumplida - Ejecutando función");

            cy.wait(1500);

            cy.get('#registerBtn').should("be.visible").click();
        });
    })

    //! FUNCION PARA SABER SI CONTIENE TAL CLASE

    /*it('have class validando un campo por clase', ()=>{

        cy.visit('https://qa-practice.netlify.app/register');

        cy.get("#firstName").should("have.class", ".form-control").type("asd")
    })*/

    it('Saber la cantidad de elementos que tiene una tabla', ()=>{
        cy.visit('https://commitquality.com');

        cy.get("tbody >tr").should("have.length",10); //? Busca por tipo de html y por elemento y verifica su longitud y si es a corde con lo que se ingresa

        cy.get("tbody >tr").should("have.length",10).and("have.css", "vertical-align","middle"); //! Busca por las propiedades de css
    })

    it.only('Utilizando la función cy.contains en el inicio en vez de cy.get', ()=>{
        cy.visit('https://qa-practice.netlify.app/dropdowns');

        cy.contains("[type='button']", "Dropdown").should("be.visible").click({force:true});
    })


})