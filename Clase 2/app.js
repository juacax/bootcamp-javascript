function testLET() {
  let x = 10
  console.log(x)
  if (true) {
    console.log(x) //ERROR
    let x = 20
    console.log(x)
  }
  console.log(x)
}

function testLET2() {
  let x = 10
  console.log(x) //10
  if (true) {
    console.log(x) //10
  }
  if (true) {
    let x = 40
    console.log(x) //40
  }
  console.log(x) //10
}

function testVAR() {
  var x = 10
  console.log(x)
  if (true) {
    console.log(x)
    var x = 20
    console.log(x)
  }
  console.log(x)
}

function testLET_VAR() {
  var x = 10
  console.log(x)
  if (true) {
    console.log(x)
    let x = 20
    console.log(x)
  }
  console.log(x)
}

function testVar3() {
  var x = 10
  console.log(x) //10

  if (true) {
    console.log(x) //10
  }

  if (true) {
    console.log(x)
    //let x = 20
    console.log(x)
  }

  console.log(x) //10
}

testVar3()
