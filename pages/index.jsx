import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext
} from "react-beautiful-dnd";
import nanoid from "nanoid";

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
        { id: "basic-0", title: "Zähne putzen", color: "123" },
        { id: "basic-1", title: "Duschen/Waschen", color: "321" },
        { id: "basic-2", title: "2 Mahlzeiten essen", color: "220" }
      ]
    };
  }

  componentDidMount = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  };

  onDragEnd = result => {
    if (!result.destination) return;
    let movedTask = this.state.tasks[result.source.index];
    let newTaskArray = this.state.tasks;
    newTaskArray.splice(result.source.index, 1);
    newTaskArray.splice(result.destination.index, 0, movedTask);
    this.setState({ tasks: newTaskArray });
  };

  onSliderChange = energyLevel => {
    this.setState({ energyLevel: energyLevel });
  };

  createTask = () => {
    let newTaskArray = this.state.tasks;
    newTaskArray.push({
      id: nanoid(),
      title: "newTask",
      color: Math.random() * (359 - 1) + 1
    })
    this.setState({ tasks: newTaskArray });
  };

  render() {
    return (
      <React.Fragment>
        <Header onCreateTask={this.createTask} />

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

                    <hr/>

                    {this.state.tasks
                    .slice(this.state.energyLevel, this.state.tasks.length)
                    .map((task, index) => (
                      <Draggable
                        draggableId={task.id}
                        index={Math.floor(this.state.energyLevel) + index}
                        key={task.id}
                      >
                        {(provided, snapshot) => (
                          <Task
                            color={task.color}
                            title={task.title}
                            innerref={provided.innerRef}
                            provided={provided}
                            disabled={true}
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

          hr {
            margin: 20px 0;
            border: solid 1px #dedede;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Page;
