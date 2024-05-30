/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

import indexPage from "../../support/index";

describe('Test busqueda', ()=>{

    it('busqueda con resultados', ()=>{
        /*cy.visit('https://www.movistar.com.ar'); //?Visita la pagina

        cy.get('.pnt-contenedor-buscador > .btn').type("motorola"); //? Busca la clase del buscador y escribe la palabra deseada

        cy.get('.pnt-img-lupa').click();//? Busca el elemento del boton de busqueda y lo clickea

        cy.get('.pnt-resultados-principales > .pnt-titulo-seccion').contains("motorola");//?Busca la palabra deseada y verifica que figure correctamente en la pagina */

        //! Aplicando pages objects

        indexPage.urlMovistar()

        indexPage.search("motorola");

    })

})