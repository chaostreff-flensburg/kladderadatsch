import React from "react";
import { Settings } from "react-feather";
import { Calendar } from "react-feather";

class Page extends React.Component {
  getDateTime = () => {
    return "Hello world 2";
  };

  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="settings">
            <Settings />
          </div>
          <h1>{this.getDateTime()}</h1>
          <div className="calendar">
            <Calendar />
          </div>
        </nav>

        <style jsx>{`
          .settings {
            float: left;
          }

          .calendar {
            float: right;
          }

          h1 {
            font-size: 20px;
            font-family: sans-serif;
            margin: 0;
            display: inline;
          }

          nav {
            padding-bottom: 1rem;
            padding-top: 1rem;
            border-bottom: solid 1px;
            border-color: lightslategray;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Page;
