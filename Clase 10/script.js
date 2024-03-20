let array1 = [1, 5, 7, 9, 2, 3, 4]

const res = array1.find((e) => {
  return e % 2 == 0
})
console.log('Find:', res)

const resIndex = array1.findIndex((e) => {
  return e % 2 == 0
})
console.log('FindIndex:', resIndex)

const resMap = array1.map((e) => e * 2)
console.log('Map:', resMap)

const resFilter = array1.filter((e) => {
  return e % 2 == 0
})
console.log('Filter', resFilter)

const paresDuplicados = array1
  .filter((e) => e % 2 == 0)
  .map((e) => e * 2)
  .filter((e) => e > 5)

let listaDePrecios = []
var palabras = [
  'Pan',
  'Leche',
  'Queso',
  'Huevo',
  'Manzana',
  'Plátano',
  'Arroz',
  'Frijoles',
  'Aceite',
  'Azúcar',
  'Sal',
  'Pasta',
  'Carne',
  'Pollo',
  'Pescado',
  'Salsa',
  'Yogur',
  'Cereal',
  'Galletas',
  'Chocolate'
]

for (var i = 0; i < palabras.length; i++) {
  listaDePrecios.push({
    idProducto: i + 1,
    nombre: palabras[i],
    categoria: Math.floor(Math.random() * (10 - 1) + 1),
    precio: parseFloat((Math.random() * (500 - 10) + 10).toFixed(2))
  })
}

console.log('listaDePrecios', listaDePrecios)

const filtroCategoria = listaDePrecios.filter((elemento) => {
  return elemento.categoria in { 4: true, 5: true, 6: true }
})

const precioAumentado = filtroCategoria.map((elemento) => {
  return {
    ...elemento,
    precio: parseFloat((elemento.precio * 1.25).toFixed(2))
  }
})

const resultadoFinal = precioAumentado.filter((elemento) => {
  return elemento.precio >= 300
})

console.log('resultadoFinal', resultadoFinal)

const preciosAlterados = listaDePrecios
  .filter((e) => e.categoria == 4 || e.categoria == 5 || e.categoria == 6)
  .map((e) => {
    return { ...e, precio: parseFloat((e.precio * 1.25).toFixed(2)) }
  })
  .filter((e) => e.precio >= 300)

console.log('preciosAlterados', preciosAlterados)

preciosAlterados.sort((a, b) => {
  return a.nombre.localeCompare(b.nombre)
})
console.log(preciosAlterados)

listaDePrecios
  .sort((a, b) => {
    return a.nombre.localeCompare(b.nombre)
  })
  .sort((a, b) => a.categoria - b.categoria)

console.log(listaDePrecios)

let arrayNumeros = [1, 2, 3, 4, 5]

const resReduce0 = array1.reduce((x, y) => {
  console.log('a', x)
  console.log('b', y)
  return x > y ? x : y
})
console.log('resReduce0', resReduce0)

// Primera vuelta toma los dos primeros valores en X e Y
// Desde la segunda vuelta en adelante, en X almacenará un resultado, y en Y traera el siguiente elemento
