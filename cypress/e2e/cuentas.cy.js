/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

//? El test va a ser correcto
describe("cuentas", ()=>{

    let a=1+1;
    let b=2;

    it("suma correcta", ()=>{
        //cy,visit("");
        expect(a==b).to.equal(true);
    })

})

//* El test va a ser correcto
describe("cuentas", ()=>{

    let a=1+1;
    let b=2;

    it("resta correcta", ()=>{
        //cy,visit("");
        expect(a-b).to.equal(0);
    })

})

//! El test va a ser incorrecto
describe("cuentas", ()=>{

    let a=1+1;
    let b=3;

    it("suma incorrecta", ()=>{
        //cy,visit("");
        expect(a==b).to.equal(true);
    })

})