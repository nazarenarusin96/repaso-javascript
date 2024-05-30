/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

import 'cypress-file-upload';

describe('Subiendo imagenes mediante plugin cypress-file-upload', ()=>{

    it('subiendo img', ()=>{
        cy.visit('https://qa-practice.netlify.app/file-upload');

        const ruta="img1.jpg" //? Se crea una varible que contiene el nombre de la img

        cy.get('#file_upload').attachFile(ruta); //? Se obtiene el id del boton para subir la imagen y sube el archivo mediante la variable creada

        cy.wait(1000); //espera

        cy.get('.custom-file > .btn').should("be.visible").click({force:true}); //? Selecciona el boton para enviar la imagen y lo clickea
    })

    it.only('subiendo img mediante promesa', ()=>{
        cy.visit('https://qa-practice.netlify.app/file-upload');

        const ruta="img1.jpg"

        cy.get('#file_upload').attachFile(ruta).then(()=>{
            cy.wait(1000)
            
            cy.log("Promesa cumplida exitosamente")

            cy.wait(1000)
            cy.get('.custom-file > .btn').should("be.visible").click({force:true});
        })

    })

})