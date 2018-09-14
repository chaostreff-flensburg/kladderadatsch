import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Navigation from "../components/Navigation";

class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
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
        <style jsx global>{`
          body {
            margin: 0;
            color: #605f5e;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Page;
