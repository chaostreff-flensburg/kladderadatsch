import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext
} from "react-beautiful-dnd";
import nanoid from "nanoid";

import Header from "../components/healthhackkiel/Header";
import Task from "../components/healthhackkiel/Task";
import Slider from "../components/healthhackkiel/Slider";

class Page extends React.Component {
  constructor(props) {
    super(props);
    resetServerContext();
    this.state = {
      energyLevel: 1,
      tasks: [
        { id: "basic-0", title: "Zähne putzen", done: false, color: "123" },
        { id: "basic-1", title: "Duschen/Waschen", done: false, color: "321" },
        {
          id: "basic-2",
          title: "2 Mahlzeiten essen",
          done: false,
          color: "220"
        }
      ]
    };
  }

  componentDidMount = () => {
    if ("serviceWorker" in navigator) {
      // navigator.serviceWorker.register("/sw.js");
    }
    let tasks = this.retrieveTasks();
    if (tasks != undefined) {
      this.setState({ tasks: tasks });
    }
    let energy = this.retrieveEnergylevel();
    if (energy != undefined) {
      this.setState({ energyLevel: energy });
    }

    document.documentElement.setAttribute("prefers-color-scheme", "light");
  };

  onDragEnd = result => {
    if (!result.destination) return;
    let movedTask = this.state.tasks[result.source.index];
    let newTaskArray = this.state.tasks;
    newTaskArray.splice(result.source.index, 1);
    newTaskArray.splice(result.destination.index, 0, movedTask);
    this.setState({ tasks: newTaskArray });
    this.saveTasks(newTaskArray);
  };

  onSliderChange = energyLevel => {
    this.setState({ energyLevel: energyLevel });
    this.saveEnergylevel(energyLevel);
  };

  createTask = () => {
    let newTaskArray = this.state.tasks;
    newTaskArray.push({
      id: nanoid(),
      title: "Neue Aufgabe",
      done: false,
      color: Math.random() * (359 - 1) + 1
    });
    this.setState({ tasks: newTaskArray });
    this.saveTasks(newTaskArray);
  };

  toggleTask = index => {
    let newTaskArray = this.state.tasks;
    newTaskArray[index].done = !newTaskArray[index].done;
    this.setState({ tasks: newTaskArray });
    this.saveTasks(newTaskArray);
  };

  renameTask = (e, index) => {
    let newTaskArray = this.state.tasks;
    newTaskArray[index].title = e.nativeEvent.target.value;
    this.setState({ tasks: newTaskArray });
    this.saveTasks(newTaskArray);
  };

  saveTasks = tasks => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  saveEnergylevel = energyLevel => {
    localStorage.setItem("energyLevel", JSON.stringify(energyLevel));
  };

  retrieveTasks = () => {
    var tasksString = localStorage.getItem("tasks");
    return JSON.parse(tasksString);
  };

  retrieveEnergylevel = () => {
    var energyLevelString = localStorage.getItem("energyLevel");
    return JSON.parse(energyLevelString);
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
                            done={task.done}
                            onSetDone={e => this.toggleTask(index)}
                            editable={false}
                            onTitleChange={e => e.preventDefault}
                          />
                        )}
                      </Draggable>
                    ))}

                  <li>
                    <hr />
                  </li>

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
                            done={task.done}
                            onSetDone={e => e.preventDefault}
                            disabled={true}
                            editable={true}
                            onTitleChange={e =>
                              this.renameTask(
                                e,
                                Math.floor(this.state.energyLevel) + index
                              )
                            }
                          />
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
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

        <style jsx>{`
          body {
            margin: 0;
            color: #605f5e;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Ubuntu, "Helvetica Neue", Arial, sans-serif;
          }
          main {
            max-width: 620px;
            margin: 0 auto;
          }

          ul {
            margin: 0 16px;
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
