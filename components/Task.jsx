import React from "react";

class Task extends React.Component {
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
            margin: 12px 0;
            padding: 16px;
            padding-left: 4rem;
            position: relative;
            font-size: 20px;
            font-weight: 400;
            letter-spacing: 0.5px;

            border: solid 1px #dedede;
            border-radius: 6px;
            background-color: #fff;

            opacity: ${this.props.disabled ? "0.5" : "1"};

            text-decoration: ${this.props.done ? "line-through" : "none"};
          }

          li::before {
            content: "";
            position: absolute;
            height: 30px;
            width: 30px;
            background-color: ${"hsl(" + this.props.color + ", 100%, 65%)"};
            border-radius: 50%;
            top: 13px;
            left: 16px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Task;
