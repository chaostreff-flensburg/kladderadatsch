import React from "react";

class Task extends React.Component {
  getRandomColor = () => {
    var color = Math.floor(Math.random() * Math.floor(360));
    return "hsl(" + color + ", 69%, 67%)";
  };

  render() {
    return (
      <React.Fragment>
        <li>{this.props.title}</li>

        {/* Global style for body etc. */}
        <style jsx>{`
          ul {
            width: 80%;
            margin: 0 auto;
          }

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
