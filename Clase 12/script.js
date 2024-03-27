let personajes = []

async function buscarPersonajes() {
  const nombre = document.getElementById('inputBusqueda').value
  const div = document.getElementById('divResultado')
  const boton = document.getElementById('btnBusqueda')

  div.innerHTML = ''
  personajes = []

  boton.innerHTML = `  
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Buscando...</span>
  `
  boton.disabled = true

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
    div.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-xl-3 mb-2">
      <div class="card p-2" style="width: 18rem;">
          <img src="${p.image}" class="card-img-top" alt="${p.name}" >
          <div class="card-img-overlay"  onclick="abrirModal(${i})" role="button">
              <h5 class="card-title text-white text-center rounded" style="background-color:rgba(0,0,0,0.5)">${p.name}</h5>
          </div>
      </div>
    </div>`
  }

  boton.innerHTML = 'Buscar'
  boton.disabled = false
}

function abrirModal(id) {
  console.log(personajes[id])
  const p = personajes[id]
  //document.getElementById('modalTitle').innerText = p.name

  document.getElementById('modalBody').innerHTML = `
  <div class="card ">
  <div class="row g-0">
    <div class="col-md-6">
      <img src="${p.image}" class="img-fluid rounded-start" width=500 alt="${
    p.name
  }">
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h4>${p.name}</h4>
        <p class="card-text"><b>Estado: </b>${
          p.status == 'Alive'
            ? '<span class="badge rounded-pill text-bg-success">Vivo</span>'
            : p.status == 'Dead'
            ? '<span class="badge rounded-pill text-bg-danger">Muerto</span>'
            : '<span class="badge rounded-pill text-bg-secondary">' +
              p.status +
              '</span>'
        }</p>
        ${
          p.type != ''
            ? '<p class="card-text"><b>Tipo: </b>' + p.type + '</p>'
            : ''
        }
        <p class="card-text"><b>Genero: </b>${p.gender}</p>
        <p class="card-text"><b>Especie: </b>${p.species}</p>
        <p class="card-text"><b>Origen: </b>${p.origin.name}</p>
        <p class="card-text"><b>Ubicación: </b>${p.location.name}</p>

      </div>
    </div>
  </div>
</div>
`

  document.getElementById('btnModal').click()
}
