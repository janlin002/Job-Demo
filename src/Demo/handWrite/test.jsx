function test () {
  for (let i = 0; i < 10; i++) {
    console.log(i)
    setTimeout(function printValue() { 
      console.log(`The number is ${i}`); 
    }, 1000); 
  }
  console.log('h1h')
        
}

// test()

function test2(){
  for (var i = 0; i < 10; i++) {
    console.log(i)
    setTimeout(function printValue() { 
      console.log(`The number is ${i}`); 
    }, 1000); 
  }
  console.log('h1h')
        
}

test2()