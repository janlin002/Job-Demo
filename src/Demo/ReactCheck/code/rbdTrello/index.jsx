import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Index = () => {
  const [items, setItems] = useState(["A", "B", "C"]);

  return (
    <DragDropContext>
      <Droppable droppableId="drop-id">
        {/* // droppableId: 該 Droppable 的唯一識別ID */}

        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {/*
          provided.innerRef
          套件的機制所需, 直接去取用 dom 的 ref, 就是套用的例行公事
        */}

            {items.map((item, index) => (
              // 以 map 方式渲染每個拖曳卡片 (Draggable)
              <Draggable draggableId={item.id} index={index}>
                {/* // draggableId: 該卡片的唯一識別ID */}
                {(provided, snapshot) => (
                  /*
                ...provided.droppableProps
                ...provided.draggableProps
                ...provided.dragHandleProps
                單純展開其他必要的 props
              */

                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {/* 實際上的卡片內容 */}
                    {item}
                    {/* 實際上的卡片內容 */}
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Index;
