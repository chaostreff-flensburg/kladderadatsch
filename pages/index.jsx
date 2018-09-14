import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext
} from "react-beautiful-dnd";

import Header from "../components/Header";
import Task from "../components/Task";
import Slider from "../components/Slider";

class Page extends React.Component {
  constructor(props) {
    super(props);
    resetServerContext();
    this.state = {};
  }

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
          <DragDropContext>
            <Droppable droppableId="tasklist">
              {(provided, snapshot) => (
                <ul ref={provided.innerRef} {...provided.droppableProps}>
                  <Draggable draggableId="draggable-1">
                    {(provided, snapshot) => (
                      <Task
                        color={"123"}
                        title={"Beispiel task"}
                        innerref={provided.innerRef}
                        provided={provided}
                      />
                    )}
                  </Draggable>
                  <Draggable draggableId="draggable-2">
                    {(provided, snapshot) => (
                      <Task
                        color={"321"}
                        title={"Beispiel task 2"}
                        innerref={provided.innerRef}
                        provided={provided}
                      />
                    )}
                  </Draggable>
                </ul>
              )}
            </Droppable>
          </DragDropContext>
          <section className="energy-slider">
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

          li {
            list-style-type: none;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Page;
