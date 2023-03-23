import React from 'react'
import PropTypes from 'prop-types'
import {
  Draggable
} from 'react-beautiful-dnd'

const ListItem = ({
  index, 
  item,
  dragItemStyle = {},
  children
}) => {
  return (
    <Draggable index={index} draggableId={item.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          //   {...provided.dragHandleProps}
          style={{
            // default item style
            padding: '8px 16px',
            // default drag style
            ...provided.draggableProps.style,
            // customized drag style
            ...(snapshot.isDragging ? dragItemStyle : {}),
          }}
        >
          {children(item, provided.dragHandleProps)}
        </div>
      )}
    </Draggable>

  )
}

export default ListItem

ListItem.propTypes = {
  index: PropTypes.string.isRequired,
  item: PropTypes.instanceOf(Object).isRequired,
  dragItemStyle: PropTypes.instanceOf(Object).isRequired,
  children:  PropTypes.element.isRequired,
}