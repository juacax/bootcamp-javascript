function mouseArriba() {
  let R = getRandom(0, 255)
  let G = getRandom(0, 255)
  let B = getRandom(0, 255)

  let txtR = 255 - R
  let txtG = 255 - G
  let txtB = 255 - B

  const bgColor = `rgb(${R},${G},${B})`
  const txtColor = `rgb(${txtR},${txtG},${txtB})`

  const h1Clase5 = document.getElementById('h1Clase5')
  h1Clase5.style.backgroundColor = bgColor
  h1Clase5.style.color = txtColor

  var umbralContraste = 4.5

  if (calcularContraste(R, G, B, txtR, txtG, txtB) < umbralContraste) {
    mouseArriba()
  }
}

function calcularContraste(color1, color2) {
  var luminosidad1 = calcularLuminosidad(color1)
  var luminosidad2 = calcularLuminosidad(color2)

  var contraste =
    (Math.max(luminosidad1, luminosidad2) + 0.05) /
    (Math.min(luminosidad1, luminosidad2) + 0.05)
  return contraste
}

function calcularContraste(R, G, B, tR, tG, tB) {
  const luminosidad1 = calcularLuminosidad(R, G, B)
  const luminosidad2 = calcularLuminosidad(tR, tG, tB)

  const contraste =
    (Math.max(luminosidad1, luminosidad2) + 0.05) /
    (Math.min(luminosidad1, luminosidad2) + 0.05)
  return contraste
}

function calcularLuminosidad(R, G, B) {
  const luminosidad = (0.2126 * R + 0.7152 * G + 0.0722 * B) / 255
  return luminosidad
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
