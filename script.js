// 1 - Funcion Par Impar -----------------------------------
console.log("// 1 - Funcion Par Impar ------")

function esParImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} es par`);
    } else {
        console.log(`${numero} es impar`);
    }
}
esParImpar(22,)


// 2 - Funcion Mayor o Igual --------------------------------
console.log("// 2 - Funcion Mayor o Igual ------")
function mayorIgual (num1,num2){
    if (num1>num2){
        console.log(num1+" es el mayor")
    }
    else if (num2>num1) {
        console.log(num2+ " es el mayor")
    }
    else{
        console.log (+num1+" y "+num2+" Son iguales");
    }

}
mayorIgual(65,65)


// 3 - Funcion Multiplo de 5 ---------------------------------------

console.log("// 3 - Multiplo de 5 ------")
function  multiploDeCinco(n){
    let resto=n%5;
    if(resto===0){
        console.log(n+" es multiplo de 5")
    }
    else{
        console.log(+n+" no es multiplo de 5")
    }
}

multiploDeCinco(15);

//  4 - Funcion imprimir desde 0 ----------------------------------
console.log("// 4 - Imprimir desde cero ------")
function  imprimirDesdeCero(n){
    for (let i=0; i<=n; i++){
        console.log("El valor actual es: "+i)
        if (i===n){
            console.log(n +" es el valor final")
        }
    }

}
imprimirDesdeCero(8)

// 5 - Palabra y Numero indicado ---------------------------------------
console.log("// 5 - Palabras y numeros -----")
function imprimirPalabraNumero(palabra, numero){
    for(let i=0; i<numero; i++){
        console.log(palabra + " " + (i+1));
    }
}
imprimirPalabraNumero("Alumno", 10);

// 6 - Imprimir Array ----------------------------------------------
console.log("// 6 - Imprimir Array ------")
function imprimirArray(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
 }
 let miArray = [1, 2, 3, 4, 5];
 imprimirArray(miArray);

// 7 - Imprimir array sin 5 ---------------------------------------
console.log("// 7 - Imprimir Array sin 5 ------")
function imprimirArraySalteando(array) {
    for(let i = 0; i < array.length; i++) {
        if(i !== 4) {
            console.log(array[i]);
        }
    }
 }
 
 let arrayGuardados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 imprimirArraySalteando(arrayGuardados);


// 8 - Imprimir array multiplicado por un numero ---------------------------------------
console.log("// 8 - Imprimir array multiplicado -")
function imprimirArrayMultiplicado(array, num) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i] * num);
    }
   }
   let arrayMultiplicacion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   imprimirArrayMultiplicado(arrayMultiplicacion, 3);
   