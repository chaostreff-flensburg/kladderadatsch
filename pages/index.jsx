import React from "react";
import Header from "../components/Header";
import Task from "../components/Task";
import Slider from "../components/Slider";
import Energyheadline from "../components/Energyheadline";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

class Page extends React.Component {
  componentDidMount = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <ul>
            <Task color="123" title="Beispiel task" />
          </ul>

          {/* Global style for body etc. */}
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
          <section className="energy-slider">
            <Energyheadline />
            <Slider />
          </section>
        </main>

        <style jsx>{`
          ul {
            padding-left: 0;
          }

          .energy-slider {
            position: absolute;
            bottom: 0;
            left: 10%;
            right: 10%;
          }
        `}</style>

        <style jsx global>{`
          body {
            margin: 0;
            color: #605f5e;
            font-family: "Open Sans Condensed", sans-serif;
          }
          main {
            width: 80%;
            margin: 0 auto;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Page;
