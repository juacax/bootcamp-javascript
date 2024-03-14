const arrayVacio = []
const numerosPares = [2, 4, 6, 8, 10, 12, 14, 16]
const vocales = ['a', 'e', 'i', 'o', 'u']
const arrayDeLoQueQuieras = [1, true, 'FALSE', { edad: 10 }]
const matriz = [
  [1, 3, 5],
  [2, 4, 6]
]
let arrayRaro = ['Elemento1', , 2, 3, 4]
arrayRaro[10] = 'pepito'

const numerosImpares = new Array(1, 3, 5, 7, 9)

const saludo = 'Hola'
const nuevoArrayVacio = Array.of()
const numerosImparesOf = Array.of(1, 3, 5, 7, 9)
const arrayDeSaludo = Array.from(saludo)

const nuevoArrayDeSaludo = arrayDeSaludo //Referencia
const copiaArrayDeSaludo = Array.from(arrayDeSaludo) //Copia

//console.log(arrayDeSaludo)
//console.log(copiaArrayDeSaludo)

copiaArrayDeSaludo.push('s')

//console.log(arrayDeSaludo)
//console.log(copiaArrayDeSaludo)

let array1 = [1, 5, 7, 9, 2, 3, 4]

//FIND solo devuelve el primer elemento que cumpla la condición
const res = array1.find((e) => {
  return e % 2 == 0
})
console.log('Find:', res)

const resIndex = array1.findIndex((e, i) => {
  return e % 2 == 0
})
console.log('FindIndex:', resIndex)

const resMap = array1.map((e) => e * 2)
console.log(resMap)

let array2 = Array.from(array1) //Copia
let array3 = [...array1] //Copia
let array4 = array1.slice() //Copia
let array5 = array1.concat() //Copia
let array6 = array1.map((item) => item) //Copia

let objeto1 = { edad: 50, nombre: 'Pepe' }
let objeto1B = objeto1 //Referencia
let objeto2 = { ...objeto1 } //Copia
let objeto3 = JSON.parse(JSON.stringify(objeto1)) //Copia
let objeto4 = Object.assign({}, objeto1) //Copia

//console.log(objeto1)
//console.log(objeto2)

objeto2.edad = 60

//console.log(objeto1)
//console.log(objeto2)

function iniciarArrays() {
  document.getElementById('array1').innerHTML = array1
  document.getElementById('array2').innerHTML = array2
}

function alterarArrays() {
  array2.push(5)
  document.getElementById('array2').innerHTML = array2
  document.getElementById('array1').innerHTML = array1
}
