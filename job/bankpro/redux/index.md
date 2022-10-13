```js
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getFirstAction, resetFirstAction } from './action'
import { actionData } from './selector'

const Index = () => {
    const dispatch = useDispatch()

    const data = useSelector(actionData)

    useEffect(()=>{
        dispatch(getFirstAction())
        return ()=>{
            dispatch(resetFirstAction())
        }
    }, [])

  return (
    <div>index</div>
  )
}

export default Index
```