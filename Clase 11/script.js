async function obtenerPersonajes() {
  let charactersList = []
  const div = document.getElementById('characters')

  await getAllCharacters(
    'https://rickandmortyapi.com/api/character',
    charactersList
  )

  charactersList.forEach((e, i) => {
    div.innerHTML += `<img src="${e.image}" width="50" height="50" > ${e.name} (${e.id}) Raza ${e.species} <br />`
  })
}

async function getAllCharacters(url, characters) {
  let response = []
  let next = null

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      response.push(...data.results)
      next = data.info.next
    })
    .catch((error) => alert(error))

  characters.push(...response)

  if (next) {
    await getAllCharacters(next, characters)
  } else {
    return characters
  }
}
