class pageObjects{
    visitRegisterQaPractice(){
        before(()=>{
            cy.visit("https://qa-practice.netlify.app/register");
        })    
    }

    visitFormSubmitDemo(){
        before(()=>{
            cy.visit("https://www.lambdatest.com/selenium-playground/ajax-form-submit-demo");
        })    
    }

    visitRegisterForm(){
        before(()=>{
            cy.visit("https://qa-practice.netlify.app/register");
        })    
    }

    visitTestingPractice(){
        before(()=>{
            cy.visit("https://practice.expandtesting.com/login");
        })    
    }

    registerQaPractice(name, lastName, phone, country, email, pass, t){
    let tiempo=t;

    cy.get('#firstName').should('be.visible').type(name);
    cy.wait(tiempo)
    cy.get("#lastName").should("be.visible").type(lastName);
    cy.wait(tiempo)
    cy.get("#phone").should("be.visible").type(phone);
    cy.wait(tiempo)
    cy.get("#countries_dropdown_menu").should("be.visible").select(country);
    cy.wait(tiempo)
    cy.get("#emailAddress").should("be.visible").type(email);
    cy.wait(tiempo)
    cy.get("#password").should("be.visible").type(pass);
    cy.wait(tiempo)
    cy.get("#exampleCheck1").should("be.visible").check().should("be.checked");
    cy.wait(tiempo)
    cy.get("#registerBtn").should("be.visible").click({force:true});
    }

    seccion1(name, lastName, phone, t){
        let tiempo=t;
    
        cy.get('#firstName').should('be.visible').type(name);
        cy.get("#lastName").should("be.visible").type(lastName);
        cy.get("#phone").should("be.visible").type(phone);
        cy.log("Ejecutando la primera parte del registro")
        cy.wait(tiempo);
        }

        seccion2(country, email, pass, t){
            let tiempo=t;
            cy.get("#countries_dropdown_menu").should("be.visible").select(country);
            cy.get("#emailAddress").should("be.visible").type(email);
            cy.get("#password").should("be.visible").type(pass);
            cy.log("Ejecutando la segunda parte del registro")
            cy.wait(tiempo);
        }

        seccion3(){
            cy.get("#exampleCheck1").should("be.visible").check().should("be.checked");
            cy.get("#registerBtn").should("be.visible").click({force:true});
            cy.log("Ejecutando la tercera parte del registro")
        }

    testingPractice(men, nombre){

        cy.get('#username').should("be.visible").type("asd");
        
        cy.get('#login > .btn').should("be.visible").click();

        cy.wait(1000)
        
        cy.get('b').should("be.visible").should("contain", men).then(()=>{
            cy.log("###########################");
    
            cy.log("El "+nombre+" no es valido");
    
            cy.log("###########################");
        })

    }
}

export default pageObjects;