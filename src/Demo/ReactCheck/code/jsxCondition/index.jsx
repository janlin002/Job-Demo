import React from 'react'
import { If, For } from './condition'

const itemList = [1,2,3,4]

const Index = () => {
  const [show, setShow] = React.useState(false)
  return (
    <div>
      <If condition={show}>
        <div>Its true</div>
      </If>
      <For idx="item" of={itemList}>
        {/* {item} */}
        <div>123</div>
      </For>
      <button
        type="button"
        onClick={()=>setShow(!show)}
      >
        點擊
      </button>
    </div>
    
  )
}

export default Index