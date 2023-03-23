import React, { useState } from 'react'

import List from './list'

const INITIAL_LIST = [
  {
    id: '1',
    firstName: 'Robin',
    lastName: 'Wieruch',
  },
  {
    id: '2',
    firstName: 'Aiden',
    lastName: 'Kettel',
  },
  {
    id: '3',
    firstName: 'Jannet',
    lastName: 'Layn',
  },
]

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  
  return result
}

const Index = () => {
  const [list, setList] = React.useState(INITIAL_LIST)

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) return

    setList(reorder(list, source.index, destination.index))
  }
  return (
    <>
      <List 
        list={list}
        onDragEnd={handleDragEnd}
        dragItemStyle={{
          background: 'pink',
          borderRadius: '16px',
        }}
        dragListStyle={{
          background: 'lightblue',
          borderRadius: '16px',
        }}
      >
        {(item, dragHandleProps) => (
          <>
            {item.firstName}&nbsp;
            {item.lastName}&nbsp;
            <span {...dragHandleProps}>#</span>
          </>
        )}
      </List>
    </>
  )
}

export default Index