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
    this.state = {
      tasks: [
        { id: "nanoid-1337", title: "Beispiel Task", color: "123" },
        { id: "nanoid-4223", title: "Beispiel Task 2", color: "321" }
      ]
    };
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

                  {this.state.tasks.map((task, index) => (
                    <Draggable draggableId={task.id} index={index} key={task.id}>
                      {(provided, snapshot) => (
                        <Task
                          color={task.color}
                          title={task.title}
                          innerref={provided.innerRef}
                          provided={provided}
                        />
                      )}
                    </Draggable>
                  ))}

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
