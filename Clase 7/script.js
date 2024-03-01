function obtenerFecha() {
  const fechaActual1 = new Date('1986-11-4')
  const fechaActual2 = new Date('11/4/86')
  const fechaActual3 = new Date(1986, 10, 4)
  const fechaActual = new Date()
  const diff = fechaActual - fechaActual3
  const diffDias = Math.floor(diff / (24 * 60 * 60 * 1000))

  const fechaOrigen = new Date(2023, 6, 30)
  const fechaLimite = new Date(fechaOrigen.getTime())
  fechaLimite.setDate(fechaLimite.getDate() + 180)
  if (fechaActual > fechaLimite) {
    alert('Superó los 6 meses')
  }

  const options = {
    week: 'numeric',
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }

  const nuevaFecha = sumarDiasHabiles(fechaActual, 3)

  const pFecha = document.getElementById('fecha')
  const dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Juéves',
    'Viernes',
    'Sábado'
  ]

  pFecha.innerHTML =
    dias[fechaActual.getDay()] +
    ' ' +
    fechaActual.getDate() +
    '-' +
    (fechaActual.getMonth() + 1) +
    '-' +
    fechaActual.getFullYear()
}

function sumarDiasHabiles(fecha, dias) {
  // Creamos una copia de la fecha original
  let fechaNueva = new Date(fecha.getTime())

  // Iteramos sobre el número de días que queremos sumar
  while (dias > 0) {
    // Avanzamos un día
    fechaNueva.setDate(fechaNueva.getDate() + 1)

    // Si la fecha no es sábado (6) ni domingo (0), restamos un día hábil
    if (fechaNueva.getDay() !== 0 && fechaNueva.getDay() !== 6) {
      dias--
    }
  }

  return fechaNueva
}
