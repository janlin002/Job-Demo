import React, { useState, useEffect } from 'react'

// const Interview = () =>{
//   const [st1, setSt1] = useState('')
//   const [st2, setSt2] = useState('')

//   console.log('1')
  
//   useEffect(()=>{
//     console.log('2')
//   })
  
//   useEffect(()=>{
//     console.log('3')
//     setSt1 ('st1')
//   }, [])

//   useEffect(()=>{
//     console.log('4')
//     setSt2('st2')
//   }, [st1])

//   useEffect(()=>{
//     console.log('5')
//   }, [st1, st2])
//   return (
//     <>
//       {`Final: ${st1} ${st2}`}
//     </>
//   )
// }

// export default Interview

// const Interview = () =>{
//   const [count, setCount] = useState(0)
//   console.log('1')

//   React.useEffect(()=>{
//     console.log('2')
//     setCount(1)
//   })

//   useEffect(()=>{
//     console.log('3')
//   }, [count])

//   return (
//     <div>interview simple</div>
//   )
// }

// export default Interview

// Answer: 123451245112

// function A () {
//   const [count, setCount] = useState(4);

//   useEffect(()=>{
//     setCount(prev => prev + 1);
//     setCount(prev => prev + 1);
//     setCount(prev => prev + 1);
//   }, [])

//   console.log('A: ', count)

//   return null;
// }

// export default A
function ScopeTest(a) {
  var b = 4;
  function bar() {
    console.log(`a:${a},b:${b},c:${c}`); // "a:3,b:4,c:5"
  }
  let c = 5;
  console.log(a); // 3
  console.log(b); // 4
  console.log(c); // 5
  bar();
}

ScopeTest(3);

export default ScopeTest()
// console.log(a);

// function showUserId() {
//   // function scope
//   var user_id = '111'
  
//   if (true) {
//     // block scope
//     let user_id_2 = '999'
//     const user_id_3 = '777'
//     console.log(user_id_3) // 777
//   }
  
//   console.log(user_id) // 111
//   console.log(user_id_2) // ReferenceError
// }
// showUserId()