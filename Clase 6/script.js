let arrayNumbers = []

function enviarNumero() {
  const input = document.getElementById('numero')
  const contenedor = document.getElementById('contenedor')

  arrayNumbers.push(input.value)

  let inner = ''

  let vueltas = 0

  //FOR
  for (let i = 0; i < arrayNumbers.length; i++) {
    inner += arrayNumbers[i] + '<br />'
  }

  contenedor.innerHTML = inner

  //Do While
  /*
  do {
    inner += arrayNumbers[vueltas] + '<br />'
    vueltas++
  } while (vueltas < arrayNumbers.length)
    */

  //While
  /*
  while (vueltas < arrayNumbers.length) {
    inner += arrayNumbers[vueltas] + '<br />'
    vueltas++
  }
    */
  contenedor.innerHTML = inner

  //Una posible solución
  //let inner = contenedor.innerHTML
  //contenedor.innerHTML = inner + (input.value + '<br />')

  //Otra posible solución
  //contenedor.innerHTML += input.value + '<br />'
}
