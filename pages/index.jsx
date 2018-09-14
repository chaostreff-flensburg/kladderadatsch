import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello Kladderadatsch!</h1>
        <DragDropContext>
          <Droppable droppableId="tasklist">
            {(provided, snapshot) => (
              <main ref={provided.innerRef} {...provided.droppableProps}>
                <Draggable draggableId="draggable-1">
                  {(provided, snapshot) => (
                    <h4
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      My draggable
                    </h4>
                  )}
                </Draggable>
              </main>
            )}
          </Droppable>
        </DragDropContext>
        <style jsx>{`
          h1 {
            font-family: sans-serif;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Page;
