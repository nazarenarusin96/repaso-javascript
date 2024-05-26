/// <reference types="Cypress" />
//* ^^ hace funcionar los comandos de cypress

describe('cuentas asserts', ()=>{

    let a=1;

    it('verificando una igualdad', ()=>{
        expect(1==1).to.equal(true);
    })

    it('no es una igualdad', ()=>{
        expect(1==1).to.equal(false);
    })

    it('resta', ()=>{
        expect(2-1).to.equal(1);
    })

    it('resta erronea', ()=>{
        expect(1-1).to.not.equal(2);
    })

    it('tiene que ser verdadero', ()=>{
        expect(2==2).to.be.true;
    })

    it('tiene que ser falso', ()=>{
        expect(2==1).to.be.false;
    })

    it('la variable existe', ()=>{
        expect(a).to.exist;
    })

    it('es menos a 10', ()=>{
        expect(a).to.be.lessThan(10);
    })

    it('es mayor a 10', ()=>{
        expect(25).to.be.greaterThan(10);
    })
})