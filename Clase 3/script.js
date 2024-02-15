let texto = 'texto' //string
let numero = 1 //number
let bool = true //boolean
let sinDefinir = undefined //undefined

let vacio = null
let textVacio = ''
let miUndefined = undefined

//console.log(vacio == miUndefined) //TRUE o FALSE
//console.log(vacio === miUndefined) //TRUE o FALSE

//console.log('123' == 123) //TRUE o FALSE
//console.log(123 === '123') //TRUE o FALSE

let miObjeto = {
  propiedadNumerica: 1,
  propiedadTexto: 'texto',
  propiedadObjeto: {
    propiedadNumerica: 1,
    propiedadTexto: 'texto'
  },
  propiedadLista: [
    { prop1: 11, prop2: 21 },
    { prop1: 12, prop2: 22 }
  ],
  propiedadListaVacia: [],
  propiedadListaMixta: [1, 'uno', { prop: 1 }, [2, 3, 4]]
}

//console.log(miObjeto.propiedadListaMixta[3][2])

let matrix = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ],
  [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18]
  ],
  [
    [19, 29, 21],
    [22, 23, 24],
    [25, 26, 27]
  ]
]

//console.log(matrix[2][1][1])

const persona = {
  nombre: 'Raúl',
  apellido: 'Morales',
  edad: 42
}

console.log(persona)

persona = {
  nombre: 'Raúl',
  apellido: 'Morales',
  edad: 43
}

console.log(persona)
