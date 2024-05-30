/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

import  pageObjects from "../../support/pageObjects"

describe('', ()=>{

    const master = new pageObjects();

    it('Ejemplo básico de creación de un json', ()=>{
        const datos={
            "nombre":"Nazarena",
            "apellido":"Rusin",
            "edad":"27",
        }

        cy.log(datos["nombre"])
        cy.log(datos["apellido"])
        cy.log(datos["edad"])
    })

    it.only('Ejemplo de creación de un json', ()=>{
        const datos={
            "nombre":"Nazarena",
            "apellido":"Rusin",
            "edad":"27",
            "cursos":[{
                "Nombre":"javascript",
                "nota":9
            },
            {
                "Nombre":"git",
                "nota":8
            },
            {
                "Nombre":"cypress",
                "nota":10
            }]
        }

        cy.log(datos["nombre"])
        cy.log(datos["apellido"])
        cy.log(datos["edad"])
        cy.log(datos.cursos);
        cy.log(datos.cursos[1]);
        cy.log(datos.cursos[1].Nombre);
    })

})