/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

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

})