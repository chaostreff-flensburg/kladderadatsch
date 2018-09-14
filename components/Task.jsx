import React from "react";

class Task extends React.Component {
  getRandomColor = () => {
    var color = Math.floor(Math.random() * Math.floor(360));
    return "hsl(" + color + ", 69%, 67%)";
  };

  render() {
    const { provided, innerref } = this.props;
    return (
      <React.Fragment>
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={innerref}
        >
          {this.props.title}
        </li>

        <style jsx>{`
          li {
            list-style: none;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 1.5rem;
            border-top: solid 1px #605f5e;
            position: relative;
          }

          li::before {
            content: "";
            position: absolute;
            height: 10px;
            width: 10px;
            background-color: ${"hsl(" + this.props.color + ", 69%, 67%)"};
            border-radius: 50%;
            top: 35%;
            left: 0;
          }

          li:first-child {
            border-top: none;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Task;
