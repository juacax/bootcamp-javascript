console.log('Logs')
console.error('Esto es un Error')
console.info('Este es un mensaje Informativo')
console.warn('Esta es una advertencia')

let A = 10
let B = 50

//

if (A >= 11 || B == 50) {
  console.log('Entró en OR')
}

if ((A >= 11) ^ (B == 50)) {
  console.log('Entró en XOR')
}

/*
NEGACIÓN !
AND &&
OR ||
XOR ^
XOR (NAND AND OR)
NAND !(&&)
NOR !(||)
XNOR !(^)
*/

if (!(A >= 11 && B == 50) && (A >= 11 || B == 50)) {
  console.log('Entró en XOR')
}
