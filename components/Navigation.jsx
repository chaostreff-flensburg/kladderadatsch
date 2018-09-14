import React from "react";
import { Settings } from "react-feather";
import { Calendar } from "react-feather";

class Page extends React.Component {
  getDate = () => {
    var dateTime = new Date();
    var weekdays = [
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
      "Sonnatg"
    ];
    var weekday = dateTime.getDay();
    var day = dateTime.getDate() + "." + dateTime.getMonth();
    return weekdays[weekday] + " " + day;
  };

  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="settings">
            <Settings />
          </div>
          <h1>{this.getDate()}</h1>
          <div className="calendar">
            <Calendar />
          </div>
        </nav>

        <style jsx>{`
          .settings {
          }

          .calendar {
          }

          h1 {
            font-size: 20px;
            font-family: sans-serif;
            margin: 0;
            display: inline;
          }

          nav {
            padding: 1rem;
            border-bottom: solid 1px;
            border-color: #605f5e;
            display: flex;
            justify-content: space-between;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Page;
