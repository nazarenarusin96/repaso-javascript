let a=prompt("valor de a: ")
let b=prompt("valor de b: ")

let c=prompt("valor de c: ")
let d=prompt("valor de d: ")

//**parseInt setea los números en enteros
a=parseInt(a)
b=parseInt(b)
let suma= a+b

alert("El valor es: "+suma)

//**parseFloat setea los números en eflotantes, osea números con coma
c=parseFloat(c)
d=parseFloat(d)
let sumaFloat= c+d

alert("El valor flotante es: "+sumaFloat)

//**funcion basica y como llamarla
function sumita(arg1,arg2){
    alert("función suma")
    let s=arg1+arg2
    return s
}

let op_suma=sumita(2,2)//llamando a la funcion

alert(op_suma)

//**arrays basicos
let arrays =["a1","a2","a3","a4"]

alert(arrays[2])

