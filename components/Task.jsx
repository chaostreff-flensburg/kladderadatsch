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
          onClick={e => this.props.onSetDone(e)}
        >
          <input type="text" value={this.props.title} onChange={this.props.onTitleChange} disabled={!this.props.editable} />
        </li>

        <style jsx>{`
          li {
            list-style: none;
            margin: 12px 0;
            padding: 16px;
            padding-left: 4rem;
            position: relative;

            border: solid 1px #dedede;
            border-radius: 6px;
            background-color: #fff;

            opacity: ${this.props.disabled ? "0.5" : "1"};
          }

          input[type="text"] {
            margin: 0;
            padding: 0;

            font-size: 20px;
            font-weight: 400;
            letter-spacing: 0.5px;
            text-decoration: ${this.props.done ? "line-through" : "none"};

            border: none;
          }

          li::before {
            content: "";
            position: absolute;
            height: 30px;
            width: 30px;
            background-color: ${this.props.disabled ? "#aaa" : "hsl(" + this.props.color + ", 100%, 65%)"};
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
