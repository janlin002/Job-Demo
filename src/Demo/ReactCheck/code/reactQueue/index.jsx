import React, { useState } from 'react'

const Counter = () => {
  const [number, setNumber] = useState(0)
  const [name, setName] = useState('Jan')

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(1)
        setName('Foo')
        setName('Bar')
        setNumber(2)
        setNumber(3)
      }}>
        測試
      </button>
      <button onClick={() => {
        setNumber(4)
        setNumber(5)
        setNumber(6)
      }}>
        測試
      </button>
    </>
    // <>
    //   <h1>{number}</h1>
    //   <button onClick={() => {
    //     setNumber(number + 5)
    //     setNumber(n => n + 1)
    //   }}>Increase the number</button>
    // </>
  //      <>
  //      <h1>{number}</h1>
  //      <button onClick={() => {
  //        setNumber(number + 5)
  //        setNumber(n => n + 1)
  //        setNumber(43)
  //      }}>Increase the number</button>
  //    </>
  )
}

export default Counter

// 以一個 scope 為單位
// export default function Counter() {
//   const [count, setCount] = useState(0);
// 	const handleButtonClick = () => {
// 	  setCount(1);
// 	  // 執行到這裡時，其實 re-render 的動作還不會開始
// 	  setCount(2);
// 	  // 執行到這裡時，其實 re-render 的動作還不會開始
// 	  setCount(2);
// 	  // 執行到這裡時，這個事件已經沒有其他程式需要執行了，開始進行一次 re-render
// 	};
//   // ...
// }

// 當我們每次呼叫 setState 方法時，React 會將呼叫的動作依序紀錄到一個待執行計算的佇列（queue）中，然後合併試算並只進行一次 re-render 來完成畫面更新。
// https://ithelp.ithome.com.tw/articles/10300091