let num1 = 55 //Número entero INT
let num2 = 10 //Número entero INT
// console.log(num1 + num2)

let num3 = 3.14 //Número decimal FLOAT
let num4 = 2.5 //Número decimal FLOAT

// FLOAT puede presentar problemas de PRECISIÓN

// console.log(num3 + num4)
// console.log(num3 * num4)

/*
console.log(Math.pow(25, 0.5)) //Potencia
console.log(Math.round(1.3)) //Redondeo
console.log(Math.round(1.49)) //Redondeo
console.log(Math.round(1.6)) //Redondeo
console.log(Math.ceil(1.3)) //Redondeo
console.log(Math.ceil(1.49)) //Redondeo
console.log(Math.ceil(1.6)) //Redondeo
console.log(Math.ceil(1.000004)) //Redondeo
console.log(Math.abs(-5)) //5
console.log(Math.max(5, 10, 6, 2, 33)) // 33
console.log(Math.min(5, 10, 6, 2, 33)) // 2

const numeros = [5, 10, 6, 2, 33]
console.log(Math.max(numeros)) // NaN
console.log(Math.max(...numeros)) // NaN
console.log(Math.max.apply(null, numeros)) // 33

console.log(Math.random()) // Random del 0 al 1

console.log(Math.floor(Math.random() * 1000)) // Random del 0 al 1000
console.log(Math.floor(Math.random() * (700 - 600 + 1) + 600)) // Random del 600 al 700
console.log(Math.floor(1.3)) //Redondeo
console.log(Math.floor(1.49)) //Redondeo
console.log(Math.floor(1.6)) //Redondeo

console.log(Number.parseInt('5.44')) //5
console.log(Number.parseInt(5.44)) //5
console.log(Number.parseInt(true)) // NaN

console.log(Boolean(1)) //TRUE
console.log(Boolean(5)) //TRUE
console.log(Boolean(-1)) //TRUE
console.log(Boolean(0)) //FALSE

console.log(Boolean('1')) //TRUE
console.log(Boolean('0')) //TRUE
console.log(Boolean('Hola')) //TRUE
console.log(Boolean('')) //FALSE

console.log('JS estás re loco')

console.log(Boolean([])) //TRUE
console.log(Boolean([1, 2, 3])) //TRUE

console.log(Boolean(null)) // FALSE
console.log(Boolean(NaN)) // FLASE

let valorEvaluado = 0
if ('') {
  console.log('VERDADERO')
} else {
  console.log('FALSO')
}

*/

let n1 = 0.3
let n2 = 0.2
let n3 = 0.1

let x = n1 - n2
let y = n2 - n3

// > mayor
// < menor
// == igual en valor
// === igual en valor y tipo
// >= mayor o igual
// <= menor o igual
// != distinto valor
// !== distinto valor y tipo

// && AND
// || OR
// ! NOT

// true o false

let valorEvaluado = '10'

if (valorEvaluado !== 10) {
  console.log('VERDADERO')
} else {
  console.log('FALSO')
}
