import React, { useState, useMemo, useCallback } from 'react';

const UseMemoDemo = () =>{
  // const [firstState, setFirstState] = useState(0)
  // const [secondState, setSecondState] = useState(0)

  // const countState = secondState + Math.random()

  // const countStatePlus = useMemo(()=>secondState + Math.random(), [secondState])
  // const countStatePlus2 = useCallback(secondState + Math.random(), [secondState])

  // const countClick = useCallback(()=>console.log(firstState+ secondState), [setSecondState])

  // console.log(countStatePlus, 'countStatePlus')
  // return (
  //   <div>
  //     <span>{firstState}</span>
  //     <button
  //       type="button"
  //       onClick={()=>setFirstState(firstState + 1)}
  //     >
  //       點擊
  //     </button>

  //     <span>{secondState}</span>
  //     <button
  //       type="button"
  //       onClick={()=>setSecondState(secondState + 1)}
  //     >
  //       點擊
  //     </button>

  //     <button
  //       type="button"
  //       onClick={()=>countClick()}>
  //       點擊
  //     </button>
  //     <div>{countState}</div>
  //     <div>{countStatePlus}</div>
  //     <div>{countStatePlus2}</div>
  //   </div>
  // )

  const [name, setName] = useState('Bill')

  const handleSubmit = () =>{
    setName('David')
  }

  const handleChangeName = useMemo(()=>{
    return (
      name
    )
  } ,[])

  console.log(handleChangeName, 'handleChangeName')

  return (
    <div>
      <button type="button" onClick={()=>handleSubmit()}>變更姓名</button>
      <div>{name}</div>
      <div>{handleChangeName}</div>
    </div>
  )
}

export default UseMemoDemo