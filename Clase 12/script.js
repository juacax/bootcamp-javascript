async function buscarPersonajes() {
  const nombre = document.getElementById('inputBusqueda').value
  const div = document.getElementById('divResultado')
  const boton = document.getElementById('btnBusqueda')

  div.innerHTML = ''
  boton.innerHTML = `  
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Buscando...</span>
  `
  boton.disabled = true

  let personajes = []
  let nextPage = ''

  const url = `https://rickandmortyapi.com/api/character/?name=${nombre}`

  while (nextPage != null) {
    await fetch(nextPage == '' ? url : nextPage)
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          personajes.push(...data.results)
          nextPage = data.info.next
        } else {
          div.innerHTML = '<h2>Sin resultados</h2>'
          nextPage = null
        }
      })
      .catch((error) => {
        alert(error)
        nextPage = null
      })
  }

  for (let i = 0; i < personajes.length; i++) {
    const p = personajes[i]
    div.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-2">
    <div class="card p-2" style="width: 18rem;">
        <img src="${p.image}" class="card-img-top" alt="${p.name}">
        <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">
                <b>Estado: </b>${p.status}<br/>
                <b>Tipo: </b>${p.type}<br/>
                <b>Genero: </b>${p.gender}<br/>
            </p>
        </div>
    </div>
    
    </div>`
  }

  boton.innerHTML = 'Buscar'
  boton.disabled = false
}
