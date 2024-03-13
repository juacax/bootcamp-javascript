'use strict'

// OBJETO
class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
  }

  //Setter
  set edad(valor) {
    this._loquesea = valor
  }

  get edad() {
    return this._loquesea + 2
  }

  //Getter
  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`
  }
}

// INSTANCIA
const juancito = new Usuario('Juan', 'Perez')

juancito.edad = 32
console.log(juancito.edad)
console.log(juancito.nombre)
console.log(juancito.apellido)
console.log(juancito.nombreCompleto)
