import React from 'react'
import PropTypes from 'prop-types'
import { 
  DragDropContext,
  Droppable,
  Draggable } from 'react-beautiful-dnd'

import ListItem from './listItem'

const List = ({ list, onDragEnd, dragListStyle = {}, ...props }) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="droppable" direction="horizontal">
      {(provided, snapshot) => (
        <div 
          ref={provided.innerRef}
          {...provided.droppableProps}
          //   style={{
          //     ...(snapshot.isDraggingOver ? dragListStyle : {}),
          //   }}
          style={{ display: 'flex' }}
        >
          {list.map((item, index) => (
            <ListItem 
              key={item.id}
              index={index} 
              item={item}
              {...props}/>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
)

export default List

List.propTypes = {
  list: PropTypes.instanceOf(Object).isRequired,
  onDragEnd: PropTypes.func.isRequired,
  dragListStyle: PropTypes.instanceOf(Object).isRequired,
}