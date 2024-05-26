class indexPage{
    constructor(){
        this.searchInput = ".pnt-contenedor-buscador > .btn"
        this.searchButton = ".pnt-img-lupa"
        this.searchWord = ".pnt-resultados-principales > .pnt-titulo-seccion"
    }

    search = (element) =>{
        cy.get(this.searchInput).type(element);
        cy.get(this.searchButton).click();
        cy.get(this.searchWord).contains(element);
    }

    urlMovistar(){
        cy.visit("https://www.movistar.com.ar")
    }
}

export default new indexPage();