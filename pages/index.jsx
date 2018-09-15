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
      energyLevel: 1,
      tasks: [
        { id: "nanoid-1337", title: "Beispiel Task", color: "123" },
        { id: "nanoid-4223", title: "Beispiel Task 2", color: "321" },
        { id: "nanoid-0000", title: "Beispiel Task 3", color: "220" }
      ]
    };
  }

  componentDidMount = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  };

  onDragEnd = result => {
    let movedTask = this.state.tasks[result.source.index];
    let newTaskArray = this.state.tasks;
    newTaskArray.splice(result.source.index, 1);
    newTaskArray.splice(result.destination.index, 0, movedTask);
    this.setState({ tasks: newTaskArray });
  };

  onSliderChange = energyLevel => {
    this.setState({ energyLevel: energyLevel });
  };

  render() {
    return (
      <React.Fragment>
        <Header />

        <main>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="tasklist">
              {(provided, snapshot) => (
                <ul ref={provided.innerRef} {...provided.droppableProps}>
                  {this.state.tasks
                    .slice(0, this.state.energyLevel)
                    .map((task, index) => (
                      <Draggable
                        draggableId={task.id}
                        index={index}
                        key={task.id}
                      >
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
            <Slider
              energyLevel={this.state.energyLevel}
              maxLevel={this.state.tasks.length}
              onSliderChange={value => this.onSliderChange(value)}
            />
          </section>
        </main>

        <style jsx>{`
          ul {
            padding-left: 0;
          }

          .energy-slider {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #ffffff;
            box-shadow: 0 6px 20px 0px black;
          }
        `}</style>

        <style jsx global>{`
          body {
            margin: 0;
            color: #605f5e;
            font-family: "Roboto", sans-serif;
          }
          main {
            width: 80%;
            margin: 0 auto;
          }

          ul {
            margin-top: 110px;
            margin-bottom: 100px;
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
