import Item from 'antd/lib/list/Item'
import React from 'react'
// import babel from '@babel/preset-react'
import For from './For'

const list = [
  {
    id: '1',
    name: 'one'
  },
  {
    id: '2',
    name: 'two'
  },
  {
    id: '3',
    name: 'three'
  },
  {
    id: '4',
    name: 'four'
  }
]

const Index = () => {
  return (
    <For 
      of={list}
    >
      {item=><div>{item.name}</div>}
      {/* <div>{item.name}</div> */}
      {/* {item=><div>{item}</div>} */}
    </For>
  )
}

export default Index

/**
 * <For each="item" of={ this.props.items }>
 *   <span key={ item.id }>{ item.title }</span>
 * </For>
 */